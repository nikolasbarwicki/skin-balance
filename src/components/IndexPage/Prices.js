import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Button from "../Button";
import Section from "../Section";

import { device } from "../../assets/styles/device";

const StyledImg = styled(Img)`
  width: 100%;
  position: absolute;
  z-index: 9999;
  bottom: 3rem;
  right: -25%;
  margin-right: 2rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const Prices = () => {
  const data = useStaticQuery(graphql`
    {
      main3: file(name: { eq: "main-3" }) {
        childImageSharp {
          fixed(width: 350, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      main4: file(name: { eq: "main-4" }) {
        childImageSharp {
          fixed(width: 350, quality: 80) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section padding="8">
      <div>
        <h4>Cennik</h4>
        <h2>Poznaj naszą bogatą ofertę zabiegów na twarz i ciało</h2>
        <p>
          Nasze zabiegi są indywidualnie dostosowywane do stanu Twojej skóry w
          dniu zabiegu. Wierzymy w odbudowę skóry, a nie jej uszkadzanie.
          Podczas zabiegu omawiamy codzienną pielęgnację oraz cele jakie chcesz
          osiągnąć. Wspólnie decydujemy o idealnej drodze zabiegów
          pielęgnacyjnych dla Ciebie.
        </p>
        <Link to="/treatments">
          <Button>dowiedz się więcej</Button>
        </Link>
      </div>
      <ImageWrapper>
        <Img
          fixed={data.main3.childImageSharp.fixed}
          alt="Kobiece dłonie na tle liści"
        />

        <StyledImg
          fixed={data.main4.childImageSharp.fixed}
          alt="Szklane butelki z mydłem"
        />
      </ImageWrapper>
    </Section>
  );
};

export default Prices;
