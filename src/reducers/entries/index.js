import * as actionTypes from '../../actions/entries/actionTypes';
import initialState from '../initialState';

const entriesReducer = (state = initialState.entries, action) => {
    switch(action.type) {
        case actionTypes.GET_ENTRIES: 
            return action.entries;
        default:
            return state;    
    }
}

export default entriesReducer;