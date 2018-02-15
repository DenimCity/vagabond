import React, { Component } from "react";
import styled from "styled-components";

export default class NavBar extends Component {
  render() {
    return (
      <NavBarStyle>
        <Title>Jeans Jams: Travel Edition</Title>
        <ButtonContainer>
          <a href="/signin">
            <StyledButton>Sign In</StyledButton>
          </a>
          <a href="/createuser">
          <CreateButton>Create User</CreateButton>
          </a>
        </ButtonContainer>
      </NavBarStyle>
    );
  }
}

const Title = styled.div`
  font-size: 25px;
  margin-left: 40px;
  font-family: 'Pacifico', cursive;


`
const NavBarStyle = styled.div`
  width: 100vw;
  height: 8vh;
  background-color: #ffc476;
  display: flex;
  flex-direction: row;
`;

const ButtonContainer = styled.div`



`;

const StyledButton = styled.button`
    border: 1px solid black;
    border-radius: 15px;
    align-items: center;
    max-width: 80px;
    height: 25px;
    transition: all 0.25s ease;
    background: #669999;
    margin-top: 10px;
    margin-left: 30px;
     cursor:pointer;
     &:hover{
    background-color:gold;
`
const CreateButton = styled.button`
    margin-top: 10px;
    margin-left 30px;
    border: 1px solid black;
    max-width: 80px;
    height: 25px;
    border-radius: 15px;
    justify-content: center;
    transition: all 0.25s ease;
    background: #669999;
     cursor:pointer;
    &:hover{
    background-color:gold;
`
