import React, { Component } from 'react'
import axios from 'axios'
import NewCity from './NewCity'
import SingleCity from './SingleCity';

class AdminCrud extends Component {
    state = {
        error: '',
        cities: [],
        isOpenAddForm: false
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

    toggleAddCityForm = () => {
        const isOpenAddForm = !this.state.isOpenAddForm
        this.setState({
            isOpenAddForm
        })
    }

    

    // resetForm = () => {

    // }

    addCity = (newCity) => {
        
        console.log('This is newCity from the main call: ', newCity)
        
        axios.post(`/api/cities`, {
            city: newCity
        }).then((res) => {
            
            const cities = [...this.state.cities]
            cities.push(res.data)
            this.setState({cities: cities, isOpenAddForm: false})
      })
    }

    updateCity = (updatedCity) => {
        console.log(updatedCity)
        console.log('This is the city id: ', updatedCity.id)
        const city_id = updatedCity.id
        axios.put(`/api/cities/${city_id}`, {
            city: updatedCity
        }).then(() => {
            // console.log('res.data: ', res.data)
            // this.setState({cities: res.data.city})
            this.componentWillMount()
        })
    }

    deleteCity = async (city) => {
        try {
            
            const response = await axios.delete(`/api/cities/${city}`)
            this.setState({
                cities: response.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }


    render() {
        return (
            <div className="admin-body" >
                
                <div className="admin-city-list-side" >
                {this.state.cities.map(city => (
                        <div key={city.id}  >
                            <SingleCity 
                            city={city}
                            name={city.name}
                            id={city.id}
                            deleteCity={this.deleteCity}
                            updateCity={this.updateCity}
                            // isOpenEditCity={this.state.isOpenEditCity}
                            // toggleEditCityForm={this.toggleEditCityForm}
                            />
                        </div>
                ))}
                </div>
                <div className="admin-new-city-side" >
                <button className="admin-page-button apb-n" onClick={this.toggleAddCityForm}>
                                    New City
                                </button>
                {
                    this.state.isOpenAddForm ?
                        <NewCity addCity={this.addCity} /> : null
                }
                </div>
            </div>
        )
    }
}

export default AdminCrud

