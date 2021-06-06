export const getPosts = post => {
    return dispatch => {
        fetch('http://localhost:3001/categories/general/posts', {
            method: "GET",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
        }).then(res => res.json())
            .then(data => {
                dispatch({type: 'LOAD_POSTS', payload: data.posts})
            });
    }
}