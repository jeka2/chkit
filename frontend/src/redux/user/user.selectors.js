import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const userLoggedIn = createSelector(
    [selectUser],
    user => user.loggedIn
)