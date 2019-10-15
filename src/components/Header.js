import React from "react";
import styled from "styled-components";

const Title = styled.div.attrs({
  className: 'header'
})`
  width=100%;
`;

export default function Header() {
  return (
    <Title className="header ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Title>
  );
}
