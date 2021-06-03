import { saveTokenToSession } from './user.utils';

export const createUser = user => {
    return dispatch => {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user: {  
                    username: 'user13',
                    password: 'password1',
                    password_confirmation: 'password1'
                } 
            })
        }).then(res => res.json())
          .then(data => {
              debugger
              saveTokenToSession(data.token)
              dispatch({ type: "LOGIN_USER", payload: data})
              dispatch({ type: "TOGGLE_SIGNED_IN"})
          })
    }
}

export const authenticateUser = user => {
    debugger
    return dispatch => {
        fetch('http://localhost:3001/users/authenticate', {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    token: sessionStorage.getItem('user-token') || 'token'
                })
            }).then(res => res.json())
            .then(({ token, userData }) => {
                saveTokenToSession(token)
                dispatch({ type: "TOGGLE_SIGNED_IN", payload: userData })
            })
    }
}

export const logUserOut = user => {

}