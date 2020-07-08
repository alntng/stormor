import React from "react";
import styled from "styled-components";
import FeaturePreview from "./FeaturePreview";

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

// const featureCardTemplate = (num) => {
//   return new Array(num).fill({
//     imgUrl: "",
//     featureName: "",
//     summary: "",
//   });
// };

const featureCardData = [
  {
    imageUrl: "https://www.storedge.com/images/home/software.png",
    featureName: "MANAGEMENT SOFTWARE",
    summary:
      "Our software is our pride and joy. It’s bold, brilliant, beautiful, and 100% cloud-based, so you can access it anywhere in the world, making it perfect for remote property management.",
  },
  {
    imageUrl: "https://www.storedge.com/images/home/website.png",
    featureName: "MARKETING WEBSITES",
    summary:
      "We design our search engine optimized self storage websites in-house, handcrafted by our web development experts to help you convert more leads into paying customers.",
  },
  {
    imageUrl: "https://www.storedge.com/images/home/rental-center.png",
    featureName: "RENTAL CENTER™",
    summary:
      "Our online customer portal completely transforms the rental process. Customers can rent a unit, pay their bill, or update their account, all from their smartphone or an on-site kiosk.",
  },
];

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
        <Row>
          {featureCardData.map((card) => {
            return (
              <Col key={card.featureName} size={1}>
                <FeaturePreview
                  imgUrl={card.imageUrl}
                  featureName={card.featureName}
                  summary={card.summary}
                />
              </Col>
            );
          })}
        </Row>
      </Grid>
    </div>
  );
};

export default Homepage;
