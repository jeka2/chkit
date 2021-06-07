const INITIAL_STATE = {
    currentType: 'general',
    postsToDisplay: [],
    paginationNumber: 1
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
            const post = state.postsToDisplay.find(el => el.id === 
                    action.payload.postId)
    
            post.score = action.payload.score;
            debugger
            return {
                ...state,
                
            }
        default:
            return {state}
    }
};

export default postReducer;