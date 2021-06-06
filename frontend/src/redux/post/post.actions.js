export const getPosts = ({ page, category }) => {
    return dispatch => {
        fetch(`http://localhost:3001/categories/${category}/posts/pages/${page}`, {
            method: "GET",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
        }).then(res => res.json())
            .then(data => {
                dispatch({type: 'LOAD_POSTS', payload: data.posts})
            });
    }
}