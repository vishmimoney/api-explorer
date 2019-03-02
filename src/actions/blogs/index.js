import * as actionTypes from './types';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

export const getBlogs = (blogs) => {

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