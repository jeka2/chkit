const INITIAL_STATE = {
    loggedIn: false,
    userName: '',
    email: '',
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_SIGNED_IN':
            return {
                ...state,
                loggedIn: !state.loggedIn
            }
        case 'LOGIN_USER':
            debugger
            return {
                ...state,
                userName: action.payload.username,
                email: action.payload.email
            }
        default:
            return state;
    }
}

export default userReducer;