import React from 'react';

import { connect } from 'react-redux';
import Post from '../../components/post/post.component';
import { getPosts } from '../../redux/post/post.actions';
import { Paginator} from '../../components/paginator/paginator.component';
import { createStructuredSelector } from 'reselect';

import { selectPostsToDisplay, getNumberOfPages } from '../../redux/post/post.selectors';
import './front-page.styles.scss';

class FrontPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            viewedCategory: 'general'
        }
    }

    componentDidMount() {
        this.props.getPosts({page: this.state.currentPage, category: this.state.viewedCategory});
    }

    render(){
        return(
            <div className="front-page">
                <div className="posts-container">
                        <button onClick={() => this.props.getPosts()}>Get Posts</button>
                {
                    !this.props.postsToDisplay ? null 
                        : 
                    this.props.postsToDisplay.map((data) => (
                        <Post key={ data.id } {...data} />
                    ))
                }
                </div>
                <Paginator getPage={ this.props.getPosts } 
                    numberOfPages={ this.props.numberOfPages } currentPage={ this.state.currentPage }
                    category={ this.state.viewedCategory }  />
            </div>
        )
    }
};

const mapStateToProps = state => (
    { 
        postsToDisplay: selectPostsToDisplay(state),
        numberOfPages: state.post.paginationNumber 
    }
)

export default connect(mapStateToProps, { getPosts })(FrontPage);