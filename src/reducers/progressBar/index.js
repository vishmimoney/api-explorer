import * as actionTypes from '../../actions/progressBar/actionTypes';
import initialState from '../initialState';

const progressBarReducer = (state = initialState.progessBarStatus, action) => {
    switch (action.type) {
        case actionTypes.ASYNC_ACTION_START:
            return { ...initialState.progessBarStatus, inProgress: true };
        case actionTypes.ASYNC_ACTION_END:
            return { ...initialState.progessBarStatus, inProgress: false };
        default:
            return { ...initialState.progessBarStatus, inProgress: false };
    }
}

export default progressBarReducer;

