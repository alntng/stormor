import React from "react";
import styled, { css } from "styled-components";

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
      width: 30%;
    `}
`;

const Button = styled.button`
  margin: 0.5em;
  background: #636b61;
  border: 1px solid #636b61;
  border-radius: 2px;
  font-size: 15px;
  color: #fff;
`;

export default function Overview() {
  return (
    <div>
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
        <img src="https://candysdirt.com/wp-content/uploads/garage-full-of-possessions2-1.jpg" />
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
        <img src="https://homebusinessmag.com/wp-content/uploads/2018/04/Depositphotos_151249562_m-2015.jpg" />
      </OverviewPanel>
    </div>
  );
}
