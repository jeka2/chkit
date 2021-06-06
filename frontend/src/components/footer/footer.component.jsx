import React from 'react';
import './footer.styles.scss';

export const Footer = () => (
    <div className="footer">
        <div className="action-container">
            <span className="vote-actions">
                <span className="like">&#8679;</span>
                <span className="vote-count">{ 100 }</span>
                <span className="dislike">&#8681;</span>
            </span>
            <span className="other-actions">
                <span className="share">SHARE</span>
                <span className="comments">COMMENTS</span>
            </span>
        </div>
    </div>
);