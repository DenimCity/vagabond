import React, { Component } from 'react';

class EditCity extends Component {
    state = {
        updatedCity: {}
    }

    componentWillMount() {
        const updatedCity = {
            ...this.state.updatedCity
        }

        updatedCity.id = this.props.city.id
        updatedCity.name = this.props.city.name
        updatedCity.nickname = this.props.city.nickname
        updatedCity.photo_url = this.props.city.photo_url
        updatedCity.summary = this.props.city.summary
        updatedCity.state = this.props.city.state
        updatedCity.country = this.props.city.country
        updatedCity.population = this.props.city.population
        updatedCity.city_type = this.props.city.city_type
        updatedCity.latitude = this.props.city.latitude
        updatedCity.longitude = this.props.city.longitude

        this.setState({updatedCity})
    }

    handleEditCityChange = (event) => {
        event.preventDefault()
        const attributeName = event.target.name
        const attributeValue = event.target.value
        const updatedCity = {...this.state.updatedCity}

        updatedCity[attributeName] = attributeValue

        this.setState({updatedCity})
    }

    editCity = (event) => {
        event.preventDefault()
        this.props.updateCity(this.state.updatedCity)
        this.props.toggleEditCityForm()
    }


    render() {
        return (
            <div>
                <div>
                <form onSubmit={this.editCity}>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Name: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="name" value={this.state.updatedCity.name} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Nickname: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="nickname" value={this.state.updatedCity.nickname} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Photo URL: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="photo_url" value={this.state.updatedCity.photo_url} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Summary: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="summary" value={this.state.updatedCity.summary} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >State: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="state" value={this.state.updatedCity.state} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Country: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="country" value={this.state.updatedCity.country} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Population: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="population" value={this.state.updatedCity.population} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >City Type: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="city_type" value={this.state.updatedCity.city_type} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Latitude: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="latitude" value={this.state.updatedCity.latitude} />
                    </div>
                    <div className="admin-form-input-container" >
                        <label className="admin-form-label" >Longitude: </label>
                        <input className="admin-input" onChange={this.handleEditCityChange} name="longitude" value={this.state.updatedCity.longitude} />
                    </div>

                    <div className="admin-form-input-container" >
                        <input className="admin-submit-button admin-page-button apb-s" type="submit" value="Submit" />
                    </div>

                </form>
            </div>
                
            </div>
        );
    }
}

export default EditCity