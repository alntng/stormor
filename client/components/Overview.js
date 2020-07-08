import React from "react";
import styled, { css } from "styled-components";

const OverviewDiv = styled.div`
  font-family: Georgia, serif;
`;

const OverviewLanding = styled.div`
  text-align: center;
  padding: 100px;
  background: #afa2ff;
`;

const OverviewPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0px 0px;

  ${(props) =>
    props.subpanel &&
    css`
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: #e3d7ff;
      padding: 3em;
      width: 30%;
    `}
`;

const FeaturePanel = styled.div`
  font-family: Franklin Gothic Medium, Franklin Gothic, ITC Franklin Gothic,
    Arial, sans-serif;
  background: #7a89c2;
  color: #fff;
  margin: 10em 0px 50px;
  padding: 20px;
  text-align: center;

  ${(props) =>
    props.subfeatures &&
    css`
      margin: 0px;
      display: grid;
      grid-template-columns: auto auto auto;
      grid-column-gap: 50px;
    `}
`;

const FeatureCard = styled.div`
  padding: 30px;
  background: #afa2ff;
  color: #fff;
`;

const Img = styled.img`
  width: 20%;
  height: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Button = styled.button`
  margin: 0.5em;
  background: #636b61;
  border: 1px solid #636b61;
  padding: 5px 10px 5px;
  border-radius: 5px;
  font-size: 15px;
  color: #fff;

  &:hover {
    background: black;
  }

  ${(props) =>
    props.learnMore &&
    css`
      background: #636b61;
      border: 1px solid #636b61;
      color: #fff;
    `}
`;

export default function Overview() {
  return (
    <OverviewDiv>
      <OverviewLanding>
        <h1>Software to make storage unit management easy</h1>
        <h3>
          Owners shouldn't sweat the small stuff. Let Stormor take care of that.
        </h3>
        <Button primary>Overview</Button>
        <Button primary>Tour</Button>
        <Button primary>FAQ</Button>
      </OverviewLanding>

      <OverviewPanel>
        <Img src="https://candysdirt.com/wp-content/uploads/garage-full-of-possessions2-1.jpg" />
        <OverviewPanel subpanel>
          <h2>Do you feel your storage warehouse looks like this?</h2>
          <p>
            Managing an entire warehouse of storage units is difficult. Too many
            customers, too many units to keep track of, and sometimes they miss
            payments. How can any one person manage all this on their own?
          </p>
        </OverviewPanel>
      </OverviewPanel>

      <OverviewPanel>
        <OverviewPanel subpanel>
          <h2>Our software and team can help out in every step</h2>
          <p>
            Our team works around the clock ensuring stability and reliability
            for the software you rely on. We promise to do our part in providing
            you the best service, so you can do your part in running your
            business for the community.
          </p>
        </OverviewPanel>
        <Img src="https://homebusinessmag.com/wp-content/uploads/2018/04/Depositphotos_151249562_m-2015.jpg" />
      </OverviewPanel>

      <FeaturePanel>
        <h1>Features</h1>
        <FeaturePanel subfeatures>
          <FeatureCard>
            <i className="material-icons" style={{ fontSize: "60px" }}>
              contact_support
            </i>
            <h2>24/7 Customer Support</h2>
            <p>
              Our support team works around the clock to ensure that your
              business operates the way it should, and can tackle any problem
              that comes up.
            </p>
            <Button learnMore>Learn More</Button>
          </FeatureCard>
          <FeatureCard>
            <i className="material-icons" style={{ fontSize: "60px" }}>
              https
            </i>
            <h2>Advanced Cybersecurity</h2>
            <p>
              With safeguards endorsed by the President himself, you and your
              customers can rest easy knowing your private data is safe and
              sound.
            </p>
            <Button learnMore>Learn More</Button>
          </FeatureCard>
          <FeatureCard>
            <i className="material-icons" style={{ fontSize: "60px" }}>
              people
            </i>
            <h2>Accessible User Interface</h2>
            <p>
              Our world-class team of designers, UX developers, and specialists
              have worked hard to ensure the most smooth user experience
              possible.
            </p>
            <Button learnMore>Learn More</Button>
          </FeatureCard>
        </FeaturePanel>
      </FeaturePanel>
    </OverviewDiv>
  );
}
