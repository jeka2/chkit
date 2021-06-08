const INITIAL_STATE = {
    loggedIn: false,
    userName: '',
    email: '',
    id: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'TOGGLE_SIGNED_IN':
            return {
                ...state,
                loggedIn: !state.loggedIn
            }
        case 'LOGIN_USER':
            const userName = action.payload.username;
            const { id, email } = action.payload;
            return {
                ...state, userName, id, email
            }
        case 'LOGOUT_USER':
            return {
                ...INITIAL_STATE
            }
        case 'AUTHENTICATE':
            if(state.id != action.payload.id) 
                state = INITIAL_STATE
        default:
            return state;
    }
}

export default userReducer;