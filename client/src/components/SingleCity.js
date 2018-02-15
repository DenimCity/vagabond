import React, { Component } from 'react'

import EditCity from './EditCity'

class SingleCity extends Component {

    state = {
        isOpenEditCity: false
    }

    toggleEditCityForm = () => {
        const isOpenEditCity = !this.state.isOpenEditCity
        this.setState({
            isOpenEditCity
        })
    }

    handleClick = () => {
        if (window.confirm(`Are you sure you want to delete ${this.props.name}?`)) {
            this.props.deleteCity(this.props.id)
        }
    }
    render() {
    
    return(
        <div className="admin-city-block" >
            <div className="admin-city-name" >{this.props.name}</div>
            <button className="admin-page-button apb-e" type="submit" onClick={this.toggleEditCityForm}>Edit</button>
            <button className="admin-page-button apb-d" type="submit" onClick={this.handleClick}>Delete</button>
            {
                this.state.isOpenEditCity ?
                    <EditCity 
                    updateCity={this.props.updateCity}
                    toggleEditCityForm={this.toggleEditCityForm}
                    city={this.props.city}/>  : null
            }
        </div>
    )
}
    
}

export default SingleCity