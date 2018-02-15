import React, { Component } from 'react';

class NewCity extends Component {
    state = {
        newCity: {}
    }


    handleNewCityChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const newCity = {...this.state.newCity}

        newCity[attributeName] = attributeValue

        this.setState({newCity})
    }

    addNewCity = (event) => {
        event.preventDefault()
        const blankCity = {}
        this.props.addCity(this.state.newCity)
        this.setState({newCity: blankCity})
    }


    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.addNewCity}>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Name: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="name" value={this.state.newCity.name} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Nickname: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="nickname" value={this.state.newCity.nickname} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Photo URL: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="photo_url" value={this.state.newCity.photo_url} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Summary: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="summary" value={this.state.newCity.summary} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >State: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="state" value={this.state.newCity.state} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Country: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="country" value={this.state.newCity.country} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Population: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="population" value={this.state.newCity.population} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >City Type: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="city_type" value={this.state.newCity.city_type} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Latitude: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="latitude" value={this.state.newCity.latitude} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Longitude: </label>
                        <input className="admin-input" onChange={this.handleNewCityChange} name="longitude" value={this.state.newCity.longitude} />
                    </div>

                    <div>
                        <input className="admin-page-button apb-s" type="submit" value="Submit" />
                    </div>

                </form>
            </div>
                
            </div>
        );
    }
}

export default NewCity