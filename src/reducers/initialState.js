const initialState = {
    blogs: [],
    entries: [],
    authors: [],
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
                comment: ''
            },
            relationships: {
                author: {},
                entry: {}
            }
        }
    }
}

export default initialState;