import React, { Component } from 'react'

class SinglePost extends Component {

    state = {
        postToChange: {

        },
        pageNotReady: true
    }

    componentWillMount = () => {
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
                    <img width="200" src={this.props.post_photo} alt="" />
                    <div>{this.props.title}</div>
                    <div>{this.props.body}</div>
                    <button type="submit" onClick={this.handleClick}>Delete</button>
                    <div className="edit-form-container">
                        <form onSubmit={this.updatePost}>

                            {/* STILL NEED TO PUT EDIT FORM FUNCTION IN ACTION */}

                            <div>
                                <label htmlFor="title">Title: </label>
                                <input onChange={this.handleEditPostChange} name="title" type="text"/>
                            </div>

                            <div>
                                <label htmlFor="body">Description: </label>
                                <input onChange={this.handleEditPostChange} name="body" type="text"  />
                            </div>
                            <div>
                                <input type="submit" value="Submit" />
                            </div>

                        </form>
                    </div>
                </div>}
            </div>

        )
    }
}

export default SinglePost
