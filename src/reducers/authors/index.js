import * as actionTypes from '../../actions/authors/actionTypes';
import initialState from '../initialState';

const authorsReducer = (state = initialState.authors, action) => {
    switch(action.type) {
        case actionTypes.GET_AUTHORS: 
            return action.authors;
        default:
            return state;    
    }
}

export default authorsReducer;