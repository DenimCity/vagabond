import React, { Component } from 'react'
import styled from 'styled-components'

class SinglePost extends Component {

    state = {
        postToChange: {

        },
        pageNotReady: true,
        editPostFormShowing: false
    }

    toggleEditPostForm = () => {
        const editPostFormShowing = !this.state.editPostFormShowing
        this.setState({
            editPostFormShowing
        })
    }

    componentWillMount = () => {
        console.log(this.props.post)
        this.setState({ postToChange: this.props.post, pageNotReady: false })
    }

    handleEditPostChange = (event) => {
        console.log(this.state.postToChange)

        const newPost = { ...this.state.postToChange }
        newPost[event.target.name] = event.target.value

        this.setState({ postToChange: newPost })
    }
    updatePost = (event) => {
        event.preventDefault()
        this.props.editPost(this.state.postToChange)
    }

    handleClick = () => {

        if (window.confirm(`Are you sure you want to delete ${this.props.title}?`)) {
            this.props.deletePost(this.props.post.id)
        }
    }

    render() {

        return (
            <div>
                {this.state.pageNotReady ?
                <div>test true </div> :
                <div >
                    <img className="ImagePost" width="300" src={this.props.post_photo} alt="" />
                    <div className="post-title">{this.props.title}</div>
                    <div className="post-text">{this.props.body}</div>
                    <button className="delete" type="submit" onClick={this.handleClick}>Delete</button>
                    <div className="edit-form-container">
                    <button onClick={this.toggleEditPostForm}>
                            Edit New Post
                    </button>
                    { this.state.editPostFormShowing ?
                        <form onSubmit={this.updatePost}>

                            <div>
                                <label htmlFor="title">Title: </label>
                                <input onChange={this.handleEditPostChange} name="title" type="text" value={this.state.postToChange.title}/>
                            </div>

                            <div>
                                <label htmlFor="body">Description: </label>
                                <input onChange={this.handleEditPostChange} name="body" type="text" value={this.state.postToChange.body} />
                            </div>
                            <div>
                                <label htmlFor="body">Photo URL:</label>
                                <input onChange={this.handleEditPostChange} name="post_photo" type="text" value={this.state.postToChange.post_photo} />
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
                            </div>

                        </form>
                        : null
                    }
                    </div>
                </div>}
            </div>

        )
    }
}

export default SinglePost;
