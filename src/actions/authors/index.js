import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

export const getAuthors = () => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/authors?format=vnd.api%2Bjson`)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_AUTHORS,
                    authors: res.data.data
                });
            })
            .catch((err) => console.log(err));
    };
}

export const setSelectedAuthor = (id) => {
    return {
        type: actionTypes.SET_SELECTED_AUTHOR,
        selectedAuthor: id
    }
}

export const getAuthorDetails = (id) => {
    const details = {
        attributes: {},
        relationships: {}
    };
    
    let commentsUrl, entriesUrl;

    return (dispatch) => {
        axios.get(`${apiRootPath}/authors/${id}?format=vnd.api%2Bjson`)
            .then((res) => {
                details.attributes = res.data.data.attributes;

                commentsUrl = `${apiRootPath}/authors/${id}/comments/?format=vnd.api%2Bjson`;
                entriesUrl = `${apiRootPath}/authors/${id}/entries/?format=vnd.api%2Bjson`;
               
                return axios.get(commentsUrl)
            })
            .then((res) => {
                details.relationships.comments = res.data.data;
                return axios.get(entriesUrl)     
            })
            .then((res) => {
                details.relationships.entries = res.data.data;
                dispatch({
                    type: actionTypes.GET_AUTHOR_DETAILS,
                    authorDetails: details
                });
            })
            .catch((err) => console.log(err));
    };
}
