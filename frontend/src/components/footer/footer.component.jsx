import React from 'react';
import './footer.styles.scss';

export const Footer = ({ modifyRating, score }) => (
    <div className="footer">
        <div className="action-container">
            <span className="vote-actions">
                <span onClick={ () => modifyRating('increase')} className="like">&#8679;</span>
                <span className="vote-count">{ score }</span>
                <span onClick={ () => modifyRating('decrease')} className="dislike">&#8681;</span>
            </span>
            <span className="other-actions">
                <span className="share">SHARE</span>
                <span className="comments">COMMENTS</span>
            </span>
        </div>
    </div>
);