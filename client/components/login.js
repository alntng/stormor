import React, { useState } from "react";

export default function login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`User is ${user}`);
    console.log(`Password is ${password}`);
    console.log("===ITS GETTING LOGGED===");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="name"
            value={user}
            onChange={(evt) => setUser(evt.target.value)}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
