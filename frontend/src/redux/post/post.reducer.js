const INITIAL_STATE = {
    currentType: 'general',
}

const postReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CATEGORY':
            const { currentType } = action.payload;
            return {
                ...state,
                currentType
            }
        default:
            return {state}
    }
}

export default postReducer;