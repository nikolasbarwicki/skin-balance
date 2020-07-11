import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import { device } from "../../assets/styles/device";

import Button from "../Button";
import Section from "../Section";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 2rem;

  @media ${device.mobile} {
    margin-top: 5rem;
  }
`;

const Brand = () => {
  const data = useStaticQuery(graphql`
    {
      biologiqueLogo: file(name: { eq: "01-biologique-logo" }) {
        childImageSharp {
          fixed(width: 200, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      mesoesteticLogo: file(name: { eq: "02-mesoestetic-logo" }) {
        childImageSharp {
          fixed(width: 200, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      icooneLogo: file(name: { eq: "03-icoone-logo" }) {
        childImageSharp {
          fixed(width: 200, quality: 95) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section padding="8">
      <div>
        <h4>Marka</h4>
        <h2>Piękna skóra jest sprawą wyboru, a nie przypadku</h2>
        <p>
          Pozwól wprowadzić się w świat najlepszych światowych marek łączących
          tradycyjną francuską szkołę ze współczesną technologią.
        </p>
        <Button>dowiedz się więcej</Button>
      </div>
      <Wrapper>
        <Img
          fixed={data.biologiqueLogo.childImageSharp.fixed}
          alt="Logo Biologique Recherche"
        />
        <Img
          fixed={data.mesoesteticLogo.childImageSharp.fixed}
          alt="Logo Mesoestetic Recherche"
        />
        <Img
          fixed={data.icooneLogo.childImageSharp.fixed}
          alt="Logo Icoone Recherche"
        />
      </Wrapper>
    </Section>
  );
};

export default Brand;
