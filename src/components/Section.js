import React from "react";
import styled, { css } from "styled-components";

import { device } from "../assets/styles/device";

const SectionWrapper = styled.section`
  background-color: ${props =>
    props.grayBackground ? props.theme.colors.gray : "white"};
  padding: ${props => props.padding}rem 0;
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:
    [margin-start] 1fr [content-start] minmax(32rem, 114rem)
    [content-end] 1fr [margin-end];
`;

const Container = styled.div`
  display: grid;
  grid-gap: ${props => (props.fullWidth ? "0" : "2rem")};
  grid-template-columns: repeat(2, 1fr);
  padding: ${props => (props.fullWidth ? "0" : "0 4rem")};
  justify-items: center;
  align-items: ${props => (props.topAligned ? "start" : "center")};

  grid-column: ${props =>
    props.fullWidth
      ? "margin-start / margin-end"
      : "content-start / content-end"};

  @media ${device.tablet} {
    padding: ${props => (props.fullWidth ? "0" : "0 8rem")};
    grid-template-columns: auto;
  }

  @media ${device.mobile} {
    padding: ${props => (props.fullWidth ? "0" : "0 4rem")};
    grid-template-columns: auto;

    ${({ topHeader }) =>
      topHeader &&
      css`
        display: block;
      `}
  }
`;

const Section = ({
  children,
  fullWidth,
  grayBackground,
  padding,
  topAligned,
  topHeader,
}) => {
  return (
    <SectionWrapper grayBackground={grayBackground} padding={padding}>
      <Grid>
        <Container
          fullWidth={fullWidth}
          topAligned={topAligned}
          topHeader={topHeader}
        >
          {topHeader ? <h2>{topHeader}</h2> : null}
          {children}
        </Container>
      </Grid>
    </SectionWrapper>
  );
};

export default Section;
