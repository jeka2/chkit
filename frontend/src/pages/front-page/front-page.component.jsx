import React from 'react';

import { Post } from '../../components/post/post.component';

class FrontPage extends React.Component{
    constructor() {
        super();
    }

    render(){
        return(
            <div className="front-page">
                <Post />
            </div>
        )
    }
}

export default FrontPage;