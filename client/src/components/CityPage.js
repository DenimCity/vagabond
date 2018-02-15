import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PostList from './PostList'
import NewPostForm from './NewPostForm'

export default class CityPage extends Component {
    state = {
        city: {},
        posts: [],
        post: {},
        newPostFormShowing: false
    }

    componentWillMount = () => {
        this.getCity()
    }

    getCity = async () => {
        try {
            const cityId = this.props.match.params.id
            const response = await axios.get(`/api/cities/${cityId}/posts`)
            this.setState({
                city: response.data.city,
                posts: response.data.posts
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    deletePost = async (post) => {
        try {
            const cityId = this.props.match.params.id
            const response = await axios.delete(`/api/cities/${cityId}/posts/${post.id}`)
            this.setState({
                posts: response.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    editPost = async (editedPost) => {
        const cityId = this.props.match.params.id
        const postId = editedPost.id
        const response = await axios.patch(`/api/cities/${cityId}/posts/${postId}`, {post: editedPost})        
        this.setState({
            posts: response.data
        })
    }

    deletePost = async (post) => {
        try {
            const cityId = this.props.match.params.id
            const response = await axios.delete(`/api/cities/${cityId}/posts/${post}`)
            this.setState({
                posts: response.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    
    toggleNewPostForm = () => {
        const newPostFormShowing = !this.state.newPostFormShowing
        this.setState({
            newPostFormShowing
        })
    }

    handlePostChange = (event) => {
        event.preventDefault()
        const post = { ...this.state.post }
        post[event.target.name] = event.target.value
        this.setState({ post: post })
    }

    handleEditPostChange = (event) => {
        console.log("POSTS ---", this.state.posts)
        const attribute = event.target.name
        const post = [...this.state.posts]
        // console.log(posts)
        post[attribute] = event.target.value
        this.setState({ post: post })
    }


    createNewPost = async (event) => {
        event.preventDefault()
        const cityId = this.props.match.params.id
        const payload = {
            title: this.state.post.title,
            body: this.state.post.body,
            city_id: cityId,
            post_photo: this.state.post.post_photo,
            user_id: '1'
        }
        console.log(payload)
        const blankForm = {}
        await axios.post(`/api/cities/${this.props.match.params.id}/posts`, payload)
        await this.getCity()
        this.setState({
            newPostFormShowing: false,
            post: blankForm
        })
    }

    render() {
        console.log("CITY PAGE POST", this.state.posts)
        return (
            <div className="container" >
                <div className="city-container" >
                    <div className="city-preview" >
                        <img className="city-img" src={this.state.city.photo_url} alt={this.state.city.name} />
                        
                        <div className="city-name" >{this.state.city.name}</div>
                    </div>
                    <div className="city-stats" >
                        <div className="city-stats-text" >
                            {this.state.city.nickname}
                        </div>
                        <div className="city-stats-text" >
                            Population: {this.state.city.population}
                        </div>
                        <div className="city-stats-text" >
                            Type: {this.state.city.city_type}
                        </div>
                        <div className="city-stats-text" >
                            Summary: {this.state.city.summary}
                        </div>
                        <div>
                            <Link to="/"><button className="city-button">Back to Cities</button></Link>
                        </div>

                        <div>
                            <div>
                                <button className="city-button-2" onClick={this.toggleNewPostForm}>
                                    Add New Post
                                </button>
                            </div>
                            <div>
                                {
                                    this.state.newPostFormShowing ?
                                        <div>
                                            <NewPostForm
                                                handlePostChange={this.handlePostChange}
                                                post={this.state.post}
                                                createNewPost={this.createNewPost}
                                            />
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <PostList
                    handleEditPostChange={this.handleEditPostChange}
                    posts={this.state.posts}
                    deletePost={this.deletePost}
                    editPost={this.editPost}
                    />

            </div>
        )
    }
}

