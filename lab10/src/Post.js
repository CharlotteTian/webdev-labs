import React from 'react';
import LikeButton from './LikeButton';
import BookmarkButton from './BookmarkButton';
import { getHeaders } from './utils';

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            post: props.model
        }
        this.refreshPostData = this.refreshPostData.bind(this);
    }

    componentDidMount() {
        // fetch posts and then set the state...
    }

    refreshPostData () {
        const url = '/api/posts/' + this.state.post.id;
        fetch(url, {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                post: data

            })
        })
    }

    render () {
        const post = this.state.post;

        return (
            <section
                className = "card"
                key = {'post_' + post.id}>
                <img src={post.image_url} />
                <LikeButton
                    likeId={post.current_user_like_id}
                    postId={post.id}
                    refreshPost={this.refreshPostData}/>

                <BookmarkButton
                    bookmarkId={post.current_user_bookmark_id}
                    postId={post.id}
                    refreshPost={this.refreshPostData}/>
                <p>{post.caption}</p>

            </section>
        )

    }
}

export default Post;