import { createSelector } from 'reselect';

const selectPost = state => state.post;

export const selectPostsToDisplay = createSelector(
    [selectPost],
    post => post.postsToDisplay
)

export const getNumberOfPages = createSelector(
    [selectPost],
    post => post.paginationNumber
)

export const selectCurrentPostScore = createSelector(
    [selectPost],
    post => {
        return post.onDisplay && post.onDisplay.score
    }
)
