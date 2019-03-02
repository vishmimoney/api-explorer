import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:3100';

export const getComments = () => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/comments?format=vnd.api%2Bjson`)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_COMMENTS,
                comments: res.data.data
            });
        })
        .catch((err) => console.log(err));
    };
}