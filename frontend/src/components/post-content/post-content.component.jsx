import React from 'react';
import './post-content.styles.scss';

export const PostContent = ({ children }) => (
    <div className="content">
        { children }
    </div>
)