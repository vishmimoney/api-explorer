import * as actionTypes from '../../actions/entries/actionTypes';
import initialState from '../initialState';

export const entriesReducer = (state = initialState.entries, action) => {
    switch(action.type) {
        case actionTypes.GET_ENTRIES: 
            return action.entries;
        default:
            return state;    
    }
}

export const selectedEntryReducer = (state = initialState.selectedEntry, action) => {
    switch(action.type) {
        case actionTypes.SET_SELECTED_ENTRY: 
            return {...state, id: action.selectedEntry};
        case actionTypes.GET_ENTRY_DETAILS:
            return {...state, details: action.entryDetails};   
        default:
            return state;    
    }
}