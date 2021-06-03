import { saveTokenToSession } from './user.utils';

export const createUser = user => {
    return dispatch => {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ 
                user: {  
                    username: 'user1',
                    password: 'password1',
                    password_confirmation: 'password1'
                } 
            })
        }).then(res => res.json())
          .then(data => {
              saveTokenToSession(data.token)
              dispatch({ type: "TOGGLE_SIGNED_IN", payload: user })
          })
    }
}

export const authenticateUser = user => {
    sessionStorage.getItem('user-token')
}

export const logUserOut = user => {

}