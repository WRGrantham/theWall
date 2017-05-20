import React, {Component} from 'react';

class PostItem extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.post._author.username} | {new Date(this.props.post.createdAt).toLocaleDateString()}</h1>
                <p>{this.props.post.post}  </p>
            </div>
        )
    }
}
export default PostItem;