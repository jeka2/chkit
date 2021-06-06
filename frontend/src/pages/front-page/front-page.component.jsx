import React from 'react';

import { connect } from 'react-redux';
import { Post } from '../../components/post/post.component';
import { getPosts } from '../../redux/post/post.actions';
import { createStructuredSelector } from 'reselect';

import { selectPostsToDisplay } from '../../redux/post/post.selectors';

class FrontPage extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPosts();
    }

    render(){
        return(
            <div className="front-page">
                {
                    this.props.postsToDisplay && this.props.postsToDisplay.forEach(postData => {
                        console.log(postData)
                    })
                }
            </div>
        )
    }
};

const mapStateToProps = state => ({
    postsToDisplay: selectPostsToDisplay(state),
})

export default connect(mapStateToProps, { getPosts })(FrontPage);