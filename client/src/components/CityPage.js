import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Post from './Post'
import PostList from './PostList'


export default class CityPage extends Component {
    state = {
        city: {},
        posts: []
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

    // getAllPosts = () => {
    // }


    render() {



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
                            <Link to="/"><button>Back to Cities</button></Link>
                        </div>
                    </div>
                </div>
                <PostList posts={this.state.posts}/> 
            </div>
        )
    }
}

