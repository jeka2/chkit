import React from 'react';
import './paginator.styles.scss';

export const Paginator = ({ numberOfPages, getPage, currentPage, category }) => {
    return <div className="pagination">
        { Array.from(Array(numberOfPages)).map((_, i) => {
            return <span key={ i }className="page-link" onClick={ () => getPage({page: i + 1, category: category }) }>{ i + 1 }</span>;
        }) } 
    </div>
}