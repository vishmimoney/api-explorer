import * as actionTypes from '../../actions/authors/actionTypes';
import initialState from '../initialState';

export const authorsReducer = (state = initialState.authors, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHORS: 
            return action.authors;
        default:
            return state;    
    }
}

export const selectedAuthorReducer = (state = initialState.selectedAuthor, action) => {
    switch(action.type) {
        case actionTypes.SET_SELECTED_AUTHOR: 
            return {...state, id: action.selectedAuthor};
        case actionTypes.GET_AUTHOR_DETAILS:
            return {...state, details: action.authorDetails};   
        default:
            return state;    
    }
}
