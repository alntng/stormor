import React from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

const Homepage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Grid>
        <Row>
          <Col size={1}>The new standard in self storage technology</Col>
          <Col size={2}>
            Welcome to storEDGE®. We’re the industry’s most integrated
            technology solution, with user-friendly software, websites, and
            online rentals. Our modern, all-in-one technology platform allows
            you to manage your business seamlessly from anywhere in the world.
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Homepage;
