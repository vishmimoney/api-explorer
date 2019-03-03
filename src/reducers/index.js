import { blogsReducer, selectedBlogReducer } from './blogs';
import { entriesReducer, selectedEntryReducer } from './entries';
import { authorsReducer, selectedAuthorReducer } from './authors';
import { commentsReducer, selectedCommentReducer }from './comments';
import progressBarReducer from './progressBar';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    blogs: blogsReducer,
    entries: entriesReducer,
    authors: authorsReducer,
    comments: commentsReducer,
    selectedBlog: selectedBlogReducer,
    selectedEntry: selectedEntryReducer,
    selectedAuthor: selectedAuthorReducer,
    selectedComment: selectedCommentReducer,
    progressBar: progressBarReducer
});

export default rootReducer;