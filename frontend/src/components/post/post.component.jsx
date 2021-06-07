import React, { useImperativeHandle } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { withRouter } from 'react-router';
import './post.styles.scss';
import { PostContent } from '../post-content/post-content.component';
import { modifyRating } from '../../redux/post/post.actions'; 

import { connect } from 'react-redux';
import { Footer } from '../footer/footer.component';

import { selectCurrentPostScore } from '../../redux/post/post.selectors';

class Post extends React.Component {
    constructor(props) {
        super(props);

    }
 // id, content, likes, dislikes, title, views

    modifyRating = (type) => {
        this.props.modifyRating(this.props.id, type)
    }  

    render(){
        return(
            <div className="post-container">
                <div onClick={ () => {
                    this.props.history.push({pathname: `/posts/${this.props.id}`})
                } }>
                    <div className="header">{ this.props.title }</div>
                    <PostContent>{ this.props.content }</PostContent>
                </div>
                <Footer score={ this.props.updatedScore } modifyRating={ this.modifyRating }/>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return { updatedScore: state.post.postsToDisplay.find(post => post.id === ownProps.id).score }
}

export default withRouter(connect(mapStateToProps, { modifyRating })(Post));



