import React from 'react';
import './post.styles.scss';
import { PostContent } from '../post-content/post-content.component';

import { connect } from 'react-redux';
import { Footer } from '../footer/footer.component';

class Post extends React.Component {
    constructor(props) {
        super(props);

    }
 // id, content, likes, dislikes, title, views

    modifyRating = (type) => {
        if(type === 'increase') {
           
        } else {

        }
    }  

    render(){
        return(
            <div className="post-container">
                <div className="header">{ this.props.title }</div>
                <PostContent>{ this.props.content }</PostContent>
                <Footer modifyRating={ this.modifyRating }/>
            </div>
        )
    }
};

export default Post;



