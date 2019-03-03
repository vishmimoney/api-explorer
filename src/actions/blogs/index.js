import * as actionTypes from './actionTypes';
import * as progressBarActions from '../progressBar/actionTypes';
import axios from 'axios';

const apiRootPath = 'http://localhost:8000';

export const getBlogs = (page) => {

    return (dispatch) => {
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });

        axios.get(`${apiRootPath}/blogs?format=vnd.api%2Bjson&page%5Bnumber%5D=${page}`)
            .then((res) => {
                dispatch({
                    type: actionTypes.GET_BLOGS,
                    blogs: {
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

export const setSelectedBlog = (id) => {
    return {
        type: actionTypes.SET_SELECTED_BLOG,
        selectedBlog: id
    }
}

export const getBlogDetails = (id) => {

    return (dispatch) => {
        dispatch({
            type: progressBarActions.ASYNC_ACTION_START
        });

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
            .catch((err) => console.log(err))
            .finally(() => {
                dispatch({
                    type: progressBarActions.ASYNC_ACTION_END
                });
            });
    };
}