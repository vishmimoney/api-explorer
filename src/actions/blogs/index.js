import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:3100';

export const getBlogs = () => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/blogs?format=vnd.api%2Bjson`)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_BLOGS,
                blogs: res.data.data
            });
        })
        .catch((err) => console.log(err));
    };
}