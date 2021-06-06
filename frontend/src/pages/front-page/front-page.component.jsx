import React from 'react';

import { connect } from 'react-redux';
import { Post } from '../../components/post/post.component';
import { getPosts } from '../../redux/post/post.actions';
import { createStructuredSelector } from 'reselect';

import { selectPostsToDisplay } from '../../redux/post/post.selectors';
import './front-page.styles.scss';

class FrontPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
        }
    }

    componentDidMount() {
        this.props.getPosts({page: 1, category: 'general'})
    }

    render(){
        return(
            <div className="front-page">
                <div className="posts-container">
                        <button onClick={() => this.props.getPosts()}>Get Posts</button>
                {
                    !this.props.postsToDisplay ? null 
                        : 
                    this.props.postsToDisplay.map(({id, ...otherData}) => (
                        <Post key={ id } {...otherData} />
                    ))
                }
                </div>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    postsToDisplay: selectPostsToDisplay(state),
})

export default connect(mapStateToProps, { getPosts })(FrontPage);