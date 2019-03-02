import * as actionTypes from '../../actions/blogs/types';
import initialState from '../initialState';

const blogReducer = (state = initialState.blogs, action) => {
    switch(action.type) {
        case actionTypes.GET_BLOGS: 
            console.log(state);
            console.log({...state, blogs: action.blogs });
            return action.blogs;
        default:
            return state;    
    }
}

export default blogReducer;