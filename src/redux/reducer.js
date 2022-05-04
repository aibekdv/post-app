const initialState = {
    posts: [],
    filteredPosts: [],
}

const reducerPosts = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_POST':
            return {
                ...state,
                posts: action.payload,
                filteredPosts: state.posts,
            }
        case 'FILTER_BY_ID':
            return {
                ...state,
                filteredPosts: state.posts.sort((a, b) => a.id - b.id)
            }
        case 'FILTER_BY_NAME':
            return {
                ...state,
                filteredPosts: state.posts.sort((a, b) => (a.title > b.title) ? 1 : -1)
            }
        case 'FILTER_BY_DESC':
            return {
                ...state,
                filteredPosts: state.posts.sort((a, b) => (a.body > b.body) ? 1 : -1)
            }

        case 'SEARCH_BY_TITLE':
            return {
                ...state,
                filteredPosts: state.posts.filter(post => post.title.includes(action.payload))
            }
        default:
            return state
    }
}

export default reducerPosts