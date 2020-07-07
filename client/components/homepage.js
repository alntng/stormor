import React from "react";
import styled from "styled-components";

const Grid = styled.div``;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;

const Image = styled.img.attrs({
  src: "https://www.storedge.com/images/home/hero.png",
})`
  width: 100%;
  height: 100%;
`;

const Homepage = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Grid>
        <Row>
          <Col size={1}>
            <h1>The new standard in self storage technology</h1>
            <p>
              Welcome to storMor. We’re the industry’s most integrated
              technology solution, with user-friendly software, websites, and
              online rentals. Our modern, all-in-one technology platform allows
              you to manage your business seamlessly from anywhere in the world.
            </p>
          </Col>
          <Col size={2}>
            <Image />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Homepage;
