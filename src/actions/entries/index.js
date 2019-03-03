import * as actionTypes from './actionTypes';
import * as progressBarActions from '../progressBar/actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

export const getEntries = (page) => {

    return (dispatch) => {
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });

        axios.get(`${apiRootPath}/entries?format=vnd.api%2Bjson&page%5Bnumber%5D=${page}`)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_ENTRIES,
                    entries: {
                        data: res.data.data,
                        currentPage: res.data.meta.pagination.page,
                        pageCount: res.data.meta.pagination.pages
                    }
                });
            })
            .catch((err) => console.log(err))
            .finally(() => {
                dispatch({
                    type: progressBarActions.ASYNC_ACTION_END
                });
            });
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
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });
        
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

                            return Promise.all(comments.map((comment) => {
                                return axios.get(`${apiRootPath}/comments/${comment.id}?format=vnd.api%2Bjson`)
                            }))
                        })
                        .then((commentsData) => {
                            const commentsDetails = commentsData.map((commentData) => {
                                return commentData.data.data;
                            });
                            details.relationships.comments = commentsDetails;
                            return axios.get(`${apiRootPath}/blogs/${blog.id}?format=vnd.api%2Bjson`)
                        })
                        .then((res) => {
                            details.relationships.blog = res.data.data;
                            dispatch({
                                type: actionTypes.GET_ENTRY_DETAILS,
                                entryDetails: details
                            });
                        })
                        .catch(err => console.log(err))
                        .finally(() => {
                            dispatch({
                                type: progressBarActions.ASYNC_ACTION_END
                            });
                        });
                }
                else {
                    dispatch({
                        type: actionTypes.GET_ENTRY_DETAILS,
                        entryDetails: details
                    });
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                dispatch({
                    type: progressBarActions.ASYNC_ACTION_END
                });
            });
    };
}