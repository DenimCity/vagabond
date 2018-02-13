import React, { Component } from 'react'
import styled from 'styled-components'

class NavBar extends Component {

    render(){

        return(
            <NavBarStyle>
                <h1 className="header-title" >Jeans Jams: Travel Edition</h1>
            </NavBarStyle>
        )
    }
}

export default NavBar

const NavBarStyle = styled.div`
    width: 100vw;
    height: 8vh;
    background-color: #FFC476;
    display: flex;
    align-items: center;
    /* color: #CBF3F0; */
`