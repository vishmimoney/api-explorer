import blogReducer from './blogs';
import { combineReducers } from 'redux';

const initialState = {
    blogs: [],
    entries: [],
    authors: [],
    comments: []
}

const rootReducer = combineReducers({
    blogs: blogReducer
});

export default rootReducer;