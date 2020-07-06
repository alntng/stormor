import React, { useState } from "react";
import axios from "axios";

export default function login() {
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={userEmail}
            onChange={(evt) => setUserEmail(evt.target.value)}
            onBlur={(evt) => setUserEmail(evt.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            onBlur={(evt) => setPassword(evt.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
