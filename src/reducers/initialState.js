const initialState = {
    blogs: {
        data: [],
        currentPage: 1,
        pageCount: 1
    },
    entries: [],
    authors: {
        data: [],
        currentPage: 1,
        pageCount: 1
    },
    comments: [],
    selectedBlog: {
        id: '',
        details: {
            attributes: {
                name: ''
            },
            relationships: {
                tags: []
            }
        }
    },
    selectedEntry: {
        id: '',
        details: {
            attributes: {
                id: ''
            },
            relationships: {
                authors: [],
                comments: [],
                blog: {}
            }
        }
    },
    selectedAuthor: {
        id: '',
        details: {
            attributes: {
                name: ''
            },
            relationships:{
                comments: [],
                entries: []
            }
        }
    },
    selectedComment: {
        id: '',
        details: {
            attributes: {
                body: ''
            },
            relationships: {
                author: {},
                entry: {}
            }
        }
    },
    progessBarStatus: {
        inProgress : true
    }
}

export default initialState;