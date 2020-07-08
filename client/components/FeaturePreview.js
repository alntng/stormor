import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Image = styled.img.attrs((props) => ({
  src: props.src || "",
}))`
  width: 100%;
  height: 100%;
`;

export default function FeaturePreview(props) {
  return (
    <div>
      <Image src={props.imgUrl} />
      <h1>{props.featureName}</h1>
      <p>{props.summary}</p>
    </div>
  );
}
