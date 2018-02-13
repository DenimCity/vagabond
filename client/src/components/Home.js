import React, {Component} from 'react'
import axios from 'axios';
import styled from 'styled-components'
import {Link} from 'react-router-dom'

class Home extends Component {
    state = {
        error: '',
        cities: []
    }
    componentWillMount(){
        this.fetchCities();
    }

    fetchCities = async () => {
        try {
            const response = await axios.get('/api/cities');
            console.log('we have the response from the server and grabbed the data',response)
            await this.setState({cities: response.data});
            return response.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({error: err.message})
            return err.message
        }
    }



    render(){
        if(this.state.error){
            return <div>{this.state.error}</div>
        }
        return(
            
            <div>
                <h1>Jeans Jams: Travel Edition</h1>
                <h2>All Cities</h2>
                {this.state.cities.map(city => (
                    <div key={city.id}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                        <div><img width="200" src={city.photo_url} alt="picture of city"/></div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Home

