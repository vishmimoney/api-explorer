import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:3100';

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