import React from 'react';

export const FullPost = ({ postInfo: { title, content } }) => {
    return (
        <div className="post">
            <h2>{ title }</h2>
            <hr />
            <h3>{ content }</h3>
        </div>
    )
}
export default FullPost;