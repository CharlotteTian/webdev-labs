import React from 'react';
import Post from './Post';
import {getHeaders} from './utils';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.getPostsFromServer();
        // initialization code here
    }

    getPostsFromServer() {
        fetch('/api/posts', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            // console.log('getPostsFromServer', data);
            this.setState({
                posts: data
            })
        })
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    render () {
        return (
            <div id="posts">
                {
                    this.state.posts.map(post => {
                        console.log(post);
                        return (
                            <Post
                                key = {'post_' + post.id}
                                model = {post} />
                        )
                    })
                }
                {/* Posts */}
            </div>
        )

    }
}

export default Posts;