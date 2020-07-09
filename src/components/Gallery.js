import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Img from "gatsby-image";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
  width: min-content;
  margin: 0 auto;

  grid-template-areas:
    "area-1 area-2 area-3 area-4"
    "area-5 area-5 area-6 area-6";
`;

const Wrapper = styled.div`
  margin-top: 6rem;
  background-color: ${props => props.theme.colors.gray};
`;

const StyledImg = styled.img`
  grid-area: ${props => props.gridArea};
`;

const HeaderWrapper = styled.div`
  display: grid;
  width: 100vw;
  padding: 4rem 0 2rem;
  grid-template-columns:
    [margin-start] 1fr [content-start] minmax(32rem, 114rem)
    [content-end] 1fr [margin-end];
`;

const Heading = styled.h2`
  grid-column: 2 / 3;
`;

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { name: { regex: "/gallery/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
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
        {data.allFile.edges.map(({ node }, index) => (
          <StyledImg
            src={node.childImageSharp.fluid.src}
            gridArea={`area-${index + 1}`}
          />
        ))}
        {/* <StyledImg
          fluid={data.allFile.edges[0].node.childImageSharp.fluid}
          gridArea="0"
        />
        <StyledImg
          fluid={data.allFile.edges[1].node.childImageSharp.fluid}
          gridArea="1"
        />
        <StyledImg
          fluid={data.allFile.edges[2].node.childImageSharp.fluid}
          gridArea="2"
        />
        <StyledImg
          fluid={data.allFile.edges[3].node.childImageSharp.fluid}
          gridArea="3"
        />
        <StyledImg
          fluid={data.allFile.edges[4].node.childImageSharp.fluid}
          gridArea="4"
        />
        <StyledImg
          fluid={data.allFile.edges[5].node.childImageSharp.fluid}
          gridArea="5"
        /> */}
      </Grid>
    </Wrapper>
  );
};

export default Gallery;
