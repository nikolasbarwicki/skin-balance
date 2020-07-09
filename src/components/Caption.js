import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  margin: 0;
`;

const Span = styled.span`
  font-family: "Montserrat", sans-serif;
  font-size: 1.6rem;
  font-style: italic;
`;

const Caption = () => {
  return (
    <div>
      <Heading>Katarzyna Gierczyk</Heading>
      <Span>dyplomowany kosmetolog</Span>
    </div>
  );
};

export default Caption;
