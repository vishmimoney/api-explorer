import * as actionTypes from './actionTypes';
import axios from 'axios';
import { get } from 'http';

const apiRootPath = 'http://localhost:8000';

export const getEntries = () => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/entries?format=vnd.api%2Bjson`)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_ENTRIES,
                    entries: res.data.data
                });
            })
            .catch((err) => console.log(err));
    };
}

export const setSelectedEntry = (id) => {
    return {
        type: actionTypes.SET_SELECTED_ENTRY,
        selectedEntry: id
    }
}

export const getEntryDetails = (id) => {

    const details = {
        attributes: {},
        relationships: {
            authors: [],
            comments: [],
            blog: {}
        }
    };

    return (dispatch) => {
        axios.get(`${apiRootPath}/entries/${id}?format=vnd.api%2Bjson`)
            .then((res) => {
                details.attributes = res.data.data.attributes;

                let authors = [...res.data.data.relationships.authors.data];
                let comments = [...res.data.data.relationships.comments.data];
                let blog = { ...res.data.data.relationships.blog.data };

                if (authors.length && comments.length && blog) {
                    Promise.all(authors.map((author) => {
                        return axios.get(`${apiRootPath}/authors/${author.id}?format=vnd.api%2Bjson`)
                    }))
                    .then((authorsData) => {
                        const authorsDetails = authorsData.map((authorData) => {
                            return authorData.data.data;
                        });                 
                        details.relationships.authors = authorsDetails;

                        Promise.all(comments.map((comment) => {
                            return axios.get(`${apiRootPath}/comments/${comment.id}?format=vnd.api%2Bjson`)
                        }))
                        .then((commentsData) => {
                            const commentsDetails = commentsData.map((commentData) => {
                                return commentData.data.data;
                            });
                            details.relationships.comments = commentsDetails;
                            axios.get(`${apiRootPath}/blogs/${blog.id}?format=vnd.api%2Bjson`)
                            .then((res) => {
                                details.relationships.blog = res.data.data;
                                dispatch({
                                    type: actionTypes.GET_ENTRY_DETAILS,
                                    entryDetails: details
                                });
                            })
                            .catch(err => console.log(err));
                        })
                        .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
                }
                else {
                    dispatch({
                        type: actionTypes.GET_ENTRY_DETAILS,
                        entryDetails: details
                    });
                }
            })
            .catch(err => console.log(err));
    };
}