import blogReducer from './blogs';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blogs: blogReducer
});

export default rootReducer;