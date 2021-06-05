export const saveTokenToSession = token => {
    sessionStorage.setItem('user-token', token);
}