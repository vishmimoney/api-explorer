import * as actionTypes from '../../actions/blogs/types';

const blogReducer = (state={blogs:[]}, action) => {
    switch(action.type) {
        case actionTypes.GET_BLOGS: 
            return state;
        default:
            return state;    
    }
}

export default blogReducer;