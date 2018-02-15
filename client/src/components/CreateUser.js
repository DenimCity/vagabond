import React, { Component } from "react";
import styled from 'styled-components'

export default class CreateUser extends Component {
  render() {
    return (
      <div>
      <FormContainer>
        <FormWrapper action="">
          <h2>Create User</h2>
          Name <input type="text" placeholder="Name" required />
          <hr/>
          Current City <input type="text" placeholder="Current City" required />
          <hr/>
          Default Photo <input type="text" placeholder="Photo Link" required />
          <hr/>
          Gender{" "}
          <select name="gender" id="">
            <option value="male">Male</option>
            <option value="Female">Female</option>
          </select>
          <hr/>
          Relationship status{" "}
          <select name="relationship_status" id="">
            <option value="status">Single</option>
            <option value="status">Married</option>
            <option value="status">Divorced</option>
          </select>
          <hr/>
          About Me{" "}
          <textarea
            type="textarea"
            placeholder="Tell us about yourself..."
            rows="10"
            cols="20"
            required
            maxlength="120"
          />
        </FormWrapper>
      </FormContainer>
      <ButtonWrapper>
          <a href="/">
            <CancelBtn type="button">Cancel</CancelBtn>
          </a>
          <a href="/">
            {" "}
            <SignUp>Create</SignUp>
          </a>
        </ButtonWrapper>
      </div>
    );
  }
}


const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 26rem;
  padding-top:2rem;
cl
input[type="text"] {
    border: 1px solid;
    padding: 1rem;
    text-align: center;
    margin: 1px;
    border-radius: 3px;
    background-color: #f1f1f1;
    cursor: pointer;
    &:hover{
        background-color:#DDCA7E;
    }
}
select {
    height: 2rem;
    font-size: 18px;
    cursor:pointer;
}
textarea {
    font-size: .9rem;
    cursor:pointer;  
    &:hover{
        background-color:#f1f1f1;
    }
}
`

const CancelBtn = styled.button`
  padding: 14px 20px;
  background-color: #f44336;
  color: white;
  opacity: 0.9;
  width: 18em;
  &:hover {
    cursor: pointer;
  }
`;

const SignUp = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  cursor: pointer;
  opacity: 0.9;
  width: 14rem;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormContainer = styled.div`
display:flex;
flex-direction: row;
justify-content:center;

`

