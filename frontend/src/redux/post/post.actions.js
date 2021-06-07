export const getPosts = ({ page, category }) => {
    return dispatch => {
        fetch(`http://localhost:3001/categories/${category}/posts/pages/${page}`, {
            method: "GET",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
        }).then(res => res.json())
            .then(data => {
                dispatch({type: 'LOAD_POSTS', payload: data.posts})
                dispatch({type: 'SET_PAGES', payload: data.pages})
            });
    }
};

export const modifyRating = (post_id, type) => {
    return dispatch => {
        fetch(`http://localhost:3001/ratings`, {
            method: "POST",
            headers: { Accept: "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ 
                token: sessionStorage.getItem('user-token'),
                post_id,
                type
            })
        }).then(res => res.json())
            .then(data => {
                if(data.errors) {

                }
                else {
                    dispatch({ type: 'MODIFY_POST_RATING', payload: { postId: data.post_id, score: data.post_score } })
                }
            });
    }
}

export const getPost = (postId) => {
    return dispatch => {
        fetch(`http://localhost:3001/posts/${postId}`, {
            method: "GET",
            headers: { Accept: 'application/json', "Content-Type": "application/json" },
        }).then(res => res.json())
            .then(data => {
                if(data.errors) {

                }
                else {
                    const { post } = data;
                    dispatch({ type: 'SET_POST_ON_DISPLAY', payload: { post } })
                }
            });
    }
}

