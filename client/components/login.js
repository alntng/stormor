import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // console.log(`User is ${user}`);
    // console.log(`Password is ${password}`);
    // console.log("===ITS GETTING LOGGED===");
    try {
      const userTest = await axios.post("/auth/login", {
        email: userEmail,
        password,
      });
      console.log("is there a user", userTest);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContainerDiv>
      <Link to="/">
        <LoginHeader>STORE DEEZ</LoginHeader>
      </Link>
      <LoginFormContainer onSubmit={handleSubmit}>
        <FormInputContainer>
          <input
            aria-label="email"
            type="text"
            name="email"
            placeholder="Email"
            value={userEmail}
            onChange={(evt) => setUserEmail(evt.target.value)}
            onBlur={(evt) => setUserEmail(evt.target.value)}
          />
        </FormInputContainer>
        <FormInputContainer>
          <input
            aria-label="password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            onBlur={(evt) => setPassword(evt.target.value)}
          />
        </FormInputContainer>
        <FormButtonContainer>
          <LoginSubmitButton type="submit">Login</LoginSubmitButton>
        </FormButtonContainer>
      </LoginFormContainer>
    </ContainerDiv>
  );
}

const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  outline: 1px solid blue;
  height: 90%;
  background: grey;
`;

const FormInputContainer = styled.div`
  margin: 1.5em auto;
  display: flex;
  justify-content: center;
  outline: 1px solid blue;
  background: lightgrey;
`;

const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginSubmitButton = styled.button`
  background: #27a9e1;
  border: 1px solid #c7c7c7;
  font-size: 1em;
  text-transform: uppercase;
  color: white;
  width: auto;
  margin: auto;
`;

const LoginHeader = styled.h1`
  margin: 0 auto;
  width: 50%;
  text-align: center;
  line-height: 2.5em;
`;

const ContainerDiv = styled.div`
  height: 30em;
  background: red;
`;
