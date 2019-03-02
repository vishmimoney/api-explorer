import * as actionTypes from '../../actions/blogs/actionTypes';
import initialState from '../initialState';

const blogsReducer = (state = initialState.blogs, action) => {
    switch(action.type) {
        case actionTypes.GET_BLOGS: 
            return action.blogs;
        default:
            return state;    
    }
}

export default blogsReducer;