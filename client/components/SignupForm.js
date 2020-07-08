import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [isOwner, setIsOwner] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/auth/signup", {
        username,
        pasword,
        mailAddress,
        email,
        isOwner,
      });
    } catch (err) {
      console.error(err);
    }
  };

  console.log(
    "username",
    username,
    "password",
    password,
    "mailAddress",
    mailAddress,
    "email",
    email,
    "isOwner",
    isOwner
  );

  return (
    <StyledSignup
      onSubmit={(evt) => {
        evt.preventDefault();
        console.log("austin");
      }}
    >
      <GridItemDiv>
        <SignupInput
          type="text"
          name="username"
          aria-label="username"
          placeholder="Username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          onBlur={(evt) => setUsername(evt.target.value)}
        />

        <SignupInput
          type="text"
          name="email"
          aria-label="email"
          placeholder="Email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          onBlur={(evt) => setEmail(evt.target.value)}
        />
      </GridItemDiv>
      <GridItemDiv>
        <SignupInput
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          onBlur={(evt) => setPassword(evt.target.value)}
        />

        <SignupInput
          type="text"
          name="mailing-address"
          aria-label="mailing-address"
          placeholder="Mailing Address"
          value={mailAddress}
          onChange={(evt) => setMailAddress(evt.target.value)}
          onBlur={(evt) => setMailAddress(evt.target.value)}
        />
      </GridItemDiv>
      <GridItemDiv>
        <h2>Would you like to sign up as an owner?</h2>
        <SignupInput
          type="radio"
          name="ownership"
          onChange={() => setIsOwner(true)}
          onBlur={() => setIsOwner(true)}
        />
        <label htmlFor="ownership">Yes</label>
        <SignupInput
          type="radio"
          name="ownership"
          onChange={() => setIsOwner(false)}
          onBlur={() => setIsOwner(false)}
        />
        <label htmlFor="ownership">No</label>
      </GridItemDiv>
      <SignupSubmitButton type="submit">Submit</SignupSubmitButton>
    </StyledSignup>
  );
}

const StyledSignup = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

const SignupSubmitButton = styled.button`
  width: 5%;
  height: 15%;
  background: green;
  width: auto;
  margin: auto;
`;

const GridItemDiv = styled.div`
  outline: 1px solid blue;
  background: #ede7f6;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
`;

const SignupInput = styled.input`
  margin: 15px;
  padding: 12px 20px;
`;
