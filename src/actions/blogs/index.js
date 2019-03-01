import * as actionTypes from './types';

export const getBlogs = (blogs) => {
    return {
        type: actionTypes.GET_BLOGS,
        blogs
    }
}