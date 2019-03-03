import * as actionTypes from './actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

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

export const setSelectedBlog = (id) => {
    return {
        type: actionTypes.SET_SELECTED_BLOG,
        selectedBlog: id
    }
}

export const getBlogDetails = (id) => {

    return (dispatch) => {
        axios.get(`${apiRootPath}/blogs/${id}?format=vnd.api%2Bjson`)
        .then((res) => {
            dispatch({
                type: actionTypes.GET_BLOG_DETAILS,
                blogDetails: {
                    attributes: res.data.data.attributes,
                    relationships: {
                        tags: res.data.data.relationships.tags.data
                    }
                }
            });
        })
        .catch((err) => console.log(err));
    };
}