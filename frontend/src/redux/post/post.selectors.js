import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectPostsToDisplay = createSelector(
    [selectPost],
    post => post.postsToDisplay
)
