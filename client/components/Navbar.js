import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  text-align: center;
`;

export default function Navbar() {
  return (
    <NavBar className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="signup">Sign Up</Link>
      <Link to="/overview">Overview</Link>
    </NavBar>
  );
}
