import * as actionTypes from '../../actions/comments/actionTypes';
import initialState from '../initialState';

const commentsReducer = (state = initialState.comments, action) => {
    switch(action.type) {
        case actionTypes.GET_COMMENTS: 
            return action.comments;
        default:
            return state;    
    }
}

export default commentsReducer;