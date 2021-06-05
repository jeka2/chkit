import React from 'react';
import './post.styles.scss';

export const Post = ({ header, mainBody, footer, imageUrl }) => (
    <div className="post-container">
        <div className="header">HEADER</div>
        <div className="main-body">BODY</div>
        <div className="footer">FOOTER</div>
    </div>
)

