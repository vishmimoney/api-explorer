import * as actionTypes from '../../actions/blogs/actionTypes';
import initialState from '../initialState';

export const blogsReducer = (state = initialState.blogs, action) => {
    switch(action.type) {
        case actionTypes.GET_BLOGS: 
            return action.blogs; 
        default:
            return state;    
    }
}


export const selectedBlogReducer = (state = initialState.selectedBlog, action) => {
    switch(action.type) {
        case actionTypes.SET_SELECTED_BLOG: 
            return {...state, id: action.selectedBlog};
        case actionTypes.GET_BLOG_DETAILS:
            return {...state, details: action.blogDetails};   
        default:
            return state;    
    }
}
