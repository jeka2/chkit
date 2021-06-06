import React from 'react';
import './post.styles.scss';

export const Post = ({ content, likes, dislikes, title, views }) => {
    return <div className="post-container">
        <div className="header">{ title }</div>
        <div className="main-body">{ content }</div>
        <div className="footer">FOOTER</div>
    </div>
}

