import React, { Component } from 'react'


export default class SinglePost extends Component {

    state = {
        editedUser: {}
    }

    handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${this.props.title}?`)) {
            this.props.deletePost(this.props.post.id)
        }
    }

    render() {
        return (

            <div >
                <img width="200" src={this.props.post_photo} alt="" />
                <div>{this.props.title}</div>
                <div>{this.props.body}</div>
                <button type="submit" onClick={this.handleClick}>Delete</button>
            </div>

        )
    }
}

// export default SinglePost
