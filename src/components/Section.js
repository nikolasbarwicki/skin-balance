import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: ${props =>
    props.grayBackground ? props.theme.colors.gray : "white"};

  padding: ${props => props.padding}rem 0;
`;

const Grid = styled.div`
  display: grid;
  width: 100vw;
  grid-template-columns:
    [margin-start] 1fr [content-start] minmax(32rem, 114rem)
    [content-end] 1fr [margin-end];
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  grid-column: ${props =>
    props.fullWidth
      ? "margin-start / margin-end"
      : "content-start / content-end"};
`;

const Section = ({ children, fullWidth, grayBackground, padding }) => {
  return (
    <StyledSection
      fullWidth={fullWidth}
      grayBackground={grayBackground}
      padding={padding}
    >
      <Grid>
        <Container fullWidth={fullWidth}>{children}</Container>
      </Grid>
    </StyledSection>
  );
};

export default Section;
