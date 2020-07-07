import React from "react";

const Homepage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>The new standard in self storage technology</h1>
            <p>
              Welcome to storEDGE®. We’re the industry’s most integrated
              technology solution, with user-friendly software, websites, and
              online rentals. Our modern, all-in-one technology platform allows
              you to manage your business seamlessly from anywhere in the world.
            </p>
          </div>
        </div>
        <div className="double-column">
          <div>
            <img
              className="graphic"
              src="https://www.storedge.com/images/home/hero.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
