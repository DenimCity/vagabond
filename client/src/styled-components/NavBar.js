import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyle>
        <div>Jeans Jams: Travel Edition</div>
        <ButtonContainer>
          <a href="/signin">
            <button>Sign In</button>
          </a>
          <a href="/createuser">
          <button>Create User</button>
          </a>
        </ButtonContainer>
      </NavBarStyle>
    );
  }
}

const NavBarStyle = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #ffc476;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`



`;
