import { saveTokenToSession } from './user.utils';

export const createUser = user => {
    return dispatch => {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user: {  
                    username: 'user20',
                    password: 'password1',
                    password_confirmation: 'password1'
                } 
            })
        }).then(res => res.json())
          .then(data => {
              saveTokenToSession(data.token)
              dispatch({ type: "LOGIN_USER", payload: data.user})
              dispatch({ type: "TOGGLE_SIGNED_IN"})
          })
    }
}

export const authenticateUser = user => {
    return dispatch => {
        debugger
        fetch('http://localhost:3001/users/authenticate', {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json" },
                body: JSON.stringify({ 
                    token: sessionStorage.getItem('user-token')
                })
            }).then(res => res.json())
            .then((data) => {
                const { errors, user } = data;
                if(errors) {
                    // flashcomponent
                }
                else {
                    dispatch({ type: 'AUTHENTICATE', payload: user})
                }
            })
    }
}

export const logUserOut = user => {

}