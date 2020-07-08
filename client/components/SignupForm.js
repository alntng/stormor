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
        <input
          type="text"
          name="username"
          aria-label="username"
          placeholder="Username"
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
          onBlur={(evt) => setUsername(evt.target.value)}
        />
      </GridItemDiv>
      <GridItemDiv>
        <input
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
        <input
          type="password"
          name="password"
          aria-label="password"
          placeholder="Password"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
          onBlur={(evt) => setPassword(evt.target.value)}
        />
      </GridItemDiv>
      <GridItemDiv>
        <input
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
        <input
          type="radio"
          name="ownership"
          onChange={() => setIsOwner(true)}
          onBlur={() => setIsOwner(true)}
        />
        <label htmlFor="ownership">Yes</label>
        <input
          type="radio"
          name="ownership"
          onChange={() => setIsOwner(false)}
          onBlur={() => setIsOwner(false)}
        />
        <label htmlFor="ownership">No</label>
      </GridItemDiv>
      <GridItemDiv>
        <SignupSubmitButton type="submit">Submit</SignupSubmitButton>
      </GridItemDiv>
    </StyledSignup>
  );
}

const StyledSignup = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
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
  padding: 1.5rem;
  border-radius: 1rem;
`;
