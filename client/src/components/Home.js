import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Home extends Component {
    state = {
        error: '',
        cities: []
    }
    componentWillMount() {
        this.fetchCities();
    }

    fetchCities = async () => {
        try {
            const response = await axios.get('/api/cities');
            console.log('we have the response from the server and grabbed the data', response)
            await this.setState({ cities: response.data });
            return response.data;
        }
        catch (err) {
            console.log(err)
            await this.setState({ error: err.message })
            return err.message
        }
    }


    render() {
        if (this.state.error) {
            return <div>{this.state.error}</div>
        }
        return (
            <Background>
                <div>
                    <h1>Jeans Jams: Travel Edition</h1>
                    <h2>All Cities</h2>
                    {this.state.cities.map(city => (
                    <Link to={`/cities/${city.id}`}>
                        <div key={city.id} className="city-preview" >
                            <img src={city.photo_url} alt="picture of city" className="city-img" />
                            <div className="city-name" >{city.name}</div>
                        </div>
                    </Link>
                    ))}
                </div>
            </Background>
        )
    }
}

export default Home

const Background = styled.div`
  width: 100%;
  position: absolute;
  background: linear-gradient(270deg, #003366, #b27000, #06617d, #067370);
  background-size: 800% 800%;
  -webkit-animation: colors 30s ease infinite;
  -moz-animation: colors 30s ease infinite;
  animation: colors 30s ease infinite;

@-webkit-keyframes colors {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@-moz-keyframes colors {
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
@keyframes colors { 
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
}
`
