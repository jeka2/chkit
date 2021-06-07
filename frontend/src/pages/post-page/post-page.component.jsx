import React from 'react';
import FullPost from '../../components/full-post/full-post.component';
import { connect } from 'react-redux';
import { Footer } from '../../components/footer/footer.component';
import { modifyRating, getPost } from '../../redux/post/post.actions';
import { selectCurrentPostScore } from '../../redux/post/post.selectors';

import './post-page.styles.scss';

class PostPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getPost(this.props.match.params.id)
    }

    modifyRating = (type) => {
        this.props.modifyRating(this.props.postInfo.id, type)
    } 

    render() {
        return(
            <>
                { this.props.postInfo ? 
                <div className="post-container">
                    <FullPost postInfo={ this.props.postInfo } />
                    <Footer modifyRating={ this.modifyRating } score={ this.props.postInfo.score } />
                </div>
                    : null }
            </>
        )
    }
};

const mapStateToProps = state => {{
   return { 
       postInfo: state.post.onDisplay,
       updatedScore: selectCurrentPostScore(state)
    }
}}


export default connect(mapStateToProps, { getPost, modifyRating })(PostPage);