const INITIAL_STATE = {
    currentType: 'general',
    postsToDisplay: []
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
        default:
            return {state}
    }
};

export default postReducer;