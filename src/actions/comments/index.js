import * as actionTypes from './actionTypes';
import * as progressBarActions from '../progressBar/actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

export const getComments = (page) => {

    return (dispatch) => {
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });

        axios.get(`${apiRootPath}/comments?format=vnd.api%2Bjson&page%5Bnumber%5D=${page}`)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_COMMENTS,
                    comments: {
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

export const setSelectedComment = (id) => {
    return {
        type: actionTypes.SET_SELECTED_COMMENT,
        selectedComment: id
    }
}

export const getCommentDetails = (id) => {

    const details = {
        attributes: {},
        relationships: {
            author: {},
            entry: {}
        }
    };

    return (dispatch) => {
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });

        axios.get(`${apiRootPath}/comments/${id}?format=vnd.api%2Bjson`)
            .then((res) => {
                details.attributes = res.data.data.attributes;

                let authorId, authorUrl, entryId, entryUrl;

                if (res.data.data.relationships.author.data) {
                    authorId = res.data.data.relationships.author.data.id;
                    authorUrl = `${apiRootPath}/authors/${authorId}?format=vnd.api%2Bjson`;
                }

                if (res.data.data.relationships.entry.data) {
                    entryId = res.data.data.relationships.entry.data.id;
                    entryUrl = `${apiRootPath}/entries/${entryId}?format=vnd.api%2Bjson`;
                }

                if (authorUrl && entryUrl) {
                    axios.get(authorUrl)
                        .then((res) => {
                            details.relationships.author = res.data.data;
                            return axios.get(entryUrl)  
                        })
                        .then((res) => {
                            details.relationships.entry = res.data.data;
                            dispatch({
                                type: actionTypes.GET_COMMENT_DETAILS,
                                commentDetails: details
                            });
                        })
                        .catch((err) => console.log(err));
                }
                else if (entryUrl) {
                    axios.get(entryUrl)
                        .then((res) => {
                            details.relationships.entry = res.data.data;
                            dispatch({
                                type: actionTypes.GET_COMMENT_DETAILS,
                                commentDetails: details
                            });
                        })
                        .catch((err) => console.log(err));
                }
                else {
                    dispatch({
                        type: actionTypes.GET_COMMENT_DETAILS,
                        commentDetails: details
                    });
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                dispatch({
                    type: progressBarActions.ASYNC_ACTION_END
                });
            });
    };
}