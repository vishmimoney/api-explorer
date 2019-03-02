import blogsReducer from './blogs';
import entriesReducer from './entries';
import authorsReducer from './authors';
import commentsReducer from './comments';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blogs: blogsReducer,
    entries: entriesReducer,
    authors: authorsReducer,
    comments: commentsReducer
});

export default rootReducer;