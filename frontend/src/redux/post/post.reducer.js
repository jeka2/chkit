const INITIAL_STATE = {
    currentType: 'general',
    postsToDisplay: [],
    paginationNumber: 1,
    onDisplay: null
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            const { currentType } = action.payload;
            return {
                ...state,
                currentType
            }
        case 'LOAD_POSTS':
            return {
                ...state,
                postsToDisplay: action.payload
            }
        case 'SET_PAGES':
            return {
                ...state,
                paginationNumber: action.payload
            }
        case 'MODIFY_POST_RATING':
            let post;
            if(state.onDisplay) { // If the rating pertains to post currently being viewed
                post = state.onDisplay;
            } else { // If on the page with many posts
                post = state.postsToDisplay.find(el => el.id === 
                    action.payload.postId)
            }
            post.score = action.payload.score;
            return {
                ...state,
            }
        case 'SET_POST_ON_DISPLAY':
            return {
                ...state,
                onDisplay: action.payload.post
            }
        default:
            return {state}
    }
};

export default postReducer;