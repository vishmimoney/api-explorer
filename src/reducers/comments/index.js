import * as actionTypes from '../../actions/comments/actionTypes';
import initialState from '../initialState';

export const commentsReducer = (state = initialState.comments, action) => {
    switch(action.type) {
        case actionTypes.GET_COMMENTS: 
            return action.comments;
        default:
            return state;    
    }
}

export const selectedCommentReducer = (state = initialState.selectedComment, action) => {
    switch(action.type) {
        case actionTypes.SET_SELECTED_COMMENT: 
            return {...state, id: action.selectedComment};
        case actionTypes.GET_COMMENT_DETAILS:
            return {...state, details: action.commentDetails};   
        default:
            return state;    
    }
}
