import React from 'react';
import './post.styles.scss';

import { Footer } from '../footer/footer.component'

export const Post = ({ content, likes, dislikes, title, views }) => {
    return <div className="post-container">
        <div className="header">{ title }</div>
        <div className="content">{ content }</div>
        <Footer />
    </div>
}

