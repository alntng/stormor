import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ol>
        <Link to="/login">Login</Link>
        <li>Austin</li>
        <li>Alan</li>
      </ol>
    </nav>
  );
}
