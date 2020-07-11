import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { device } from "../assets/styles/device";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-gap: 2rem;
  width: 80vw;
  margin: 0 auto;

  grid-template-areas:
    "area-1 area-2 area-3 area-4"
    "area-5 area-5 area-6 area-6";

  @media ${device.tablet} {
    grid-template-areas:
      "area-1 area-2"
      "area-5 area-5"
      "area-3 area-4"
      "area-6 area-6";
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GalleryItem = styled.figure`
  grid-area: ${props => props.gridArea};
`;

const Wrapper = styled.div`
  margin-top: 6rem;
  background-color: ${props => props.theme.colors.gray};
`;

const StyledImg = styled(Img)`
  height: auto;
  width: 100%;
  object-fit: cover;
`;

const HeaderWrapper = styled.div`
  display: grid;
  width: 100vw;
  padding: 4rem 0 2rem;
  grid-template-columns:
    [margin-start] minmax(6rem, 1fr) [content-start] minmax(32rem, 114rem)
    [content-end] minmax(6rem, 1fr) [margin-end];
`;

const Heading = styled.h2`
  grid-column: 2 / 3;
`;

const Gallery = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/gallery/" } }) {
        nodes {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <Wrapper>
      <HeaderWrapper>
        <Heading>Galeria</Heading>
      </HeaderWrapper>

      <Grid>
        {data.allFile.nodes.map(({ childImageSharp }, index) => (
          <GalleryItem gridArea={`area-${index + 1}`}>
            <StyledImg
              fluid={childImageSharp.fluid}
              alt="Zdjęcie wnętrza gabinetu"
              key={childImageSharp.base}
            />
          </GalleryItem>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Gallery;
