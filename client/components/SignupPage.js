import React from "react";
import styled from "styled-components";

import SignupForm from "./SignupForm";

const SignupPage = () => {
  return (
    <div>
      <ContentContainer>
        <SignupHeader>Buy Storage plz</SignupHeader>
        <SignupBlurb>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          consequat lectus quis facilisis efficitur. Nam id dapibus nunc. Duis
          sit amet augue enim. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Cras porttitor ultricies
          venenatis. Morbi feugiat velit sed lacus gravida consequat nec et
          risus. Nam sit amet volutpat est. Phasellus fermentum diam sed arcu
          pharetra, sed mollis erat blandit. Nam sed nibh consequat, elementum
          nibh vitae, interdum elit. Aenean volutpat sagittis interdum.
          Suspendisse vel justo nec est posuere sollicitudin. Donec quis commodo
          lorem. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Ut nec erat at justo iaculis
          fringilla id vel nibh. Aenean pretium rhoncus ullamcorper. Morbi
          sapien ante, congue sit amet elit sed, aliquet convallis neque.
          Praesent et pulvinar mi. Duis feugiat, leo et consequat tempor, turpis
          sem egestas magna, nec sagittis magna lorem nec purus. Vivamus turpis
          sem, dapibus eu bibendum et, bibendum nec massa. Maecenas at elit
          faucibus, pulvinar magna ut, facilisis dolor. Fusce hendrerit, diam et
          lacinia iaculis, magna felis mattis leo, non posuere nulla nibh id
          neque. Suspendisse sagittis ex arcu, id placerat ligula finibus quis.
          Aliquam erat volutpat. Sed lacinia lacus eget mollis imperdiet.
          Phasellus a enim mauris. Donec fermentum tincidunt dolor, a molestie
          lorem molestie eu. Pellentesque sit amet lacus nisi. Praesent
          malesuada nisl a porttitor consequat. Nunc egestas pulvinar mi id
          semper. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Pellentesque vulputate blandit arcu
          id laoreet. Curabitur porta lorem a neque facilisis dignissim.
          Vestibulum semper tortor non enim pretium commodo. Quisque nec
          pellentesque diam. Nam mattis ex purus, et pellentesque tortor blandit
          quis. Sed ut metus vitae nisi ornare fermentum.
        </SignupBlurb>
      </ContentContainer>
      <SignupForm />
    </div>
  );
};

const ContentContainer = styled.section`
  background: linear-gradient(to bottom right, #88bb41, #27a7df);
  margin: auto;
  width: 100%;
  outline: 1px solid blue;
`;

const SignupHeader = styled.h1`
  margin: 0 auto;
  color: white;
  width: 50%;
  text-align: center;
  line-height: 2.5em;
`;

const SignupBlurb = styled.p`
  text-align: center;
  color: white;
`;

export default SignupPage;
