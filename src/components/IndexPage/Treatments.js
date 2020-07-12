import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Section from "../Section";

import { device } from "../../assets/styles/device";

const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  grid-gap: 1px;
  background-color: ${props => props.theme.colors.grayBorders};
  align-items: stretch;
  justify-items: stretch;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  a {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;

    @media ${device.tablet} {
      padding: 4rem;
    }

    @media ${device.tablet} {
      padding: 2rem;
    }

    :hover {
      background-color: #f8f8f8;
    }

    h3 {
      position: relative;
    }

    h3::before {
      content: "";
      position: absolute;
      left: calc(50% - 5rem);
      width: 10rem;
      height: 3px;
      bottom: -1rem;
      background-color: ${props => props.theme.colors.primary};
    }

    span {
      font-size: 1.4rem;
      width: 50%;
      padding-top: 3rem;
      line-height: 1.6;
      margin: 0 auto;
    }
  }
`;

const StyledLink = styled(Link)`
  @media ${device.mobile} {
    padding: 4rem 0;
  }
`;

const StyledImg = styled(Img)`
  height: 100%;
  width: 100%;
`;

const Treatments = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "main-1" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section fullWidth padding="0">
      <StyledImg
        fluid={data.file.childImageSharp.fluid}
        alt="Kobieta z maseczką na twarzy podczas zabiegu"
      />

      <Grid>
        <StyledLink to="/treatments#zabiegi-pielegnacyjne">
          <h3>Zabiegi pielęgnacyjne</h3>
          <span>
            Zabiegi aplikacyjne z masażami autorskimi Biologique Recherche.
          </span>
        </StyledLink>
        <StyledLink to="/treatments#kobido">
          <h3>Kobido</h3>
          <span>Masaż twarzy z naturalnym efektem liftingującym.</span>
        </StyledLink>
        <StyledLink to="/treatments#terapie-specjalistyczne">
          <h3>Terapie specjalistyczne</h3>
          <span>Procedury zabiegowe z wykorzystaniem maszyn.</span>
        </StyledLink>
        <StyledLink to="/treatments#icoone">
          <h3>ICOONE</h3>
          <span>Przełom w modelowaniu sylwetki.</span>
        </StyledLink>
      </Grid>
    </Section>
  );
};

export default Treatments;
