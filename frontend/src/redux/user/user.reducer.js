const INITIAL_STATE = {
    loggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_SIGNED_IN':
            return {
                ...state,
                loggedIn: !loggedIn
            }
        default:
            return state;
    }
}