import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import Caption from "../components/Caption";

const Hero = styled(Img)`
  display: flex;
  width: 100%;
  height: 30rem;
  object-fit: cover;
  justify-content: center;
  margin: 4rem 0;
`;

const InnerWrapper = styled.div`
  margin-top: 5rem;
  width: 80%;
`;

const StyledImg = styled(Img)`
  height: auto;
  width: 100%;
  object-fit: cover;
`;

const AboutPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Hero
        fluid={data.file.childImageSharp.fluid}
        alt="Zdjęcie gabinetu Skin Balance"
      />

      <Section topAligned>
        <div>
          <h2>O nas</h2>
          <p>
            Moja praca jest moją pasją, dlatego nieustannie kształcę się i
            poszukuję nowych rozwiązań, łączących aktualną wiedzę z nabytym
            doświadczeniem w profesjonalnej pielęgnacji. Do problemów skóry
            podchodzę indywidualnie i holistycznie, dlatego personalizowane
            zabiegi opieram na aktualnym stanie skóry, wykorzystując najnowsze
            technologie, masaż manualny oraz użycie odpowiednich produktów.
          </p>
          <p>
            Pragnęłam stworzyć miejsce, w którym każdy będzie mógł odnaleźć coś
            dla siebie, gdzie znajdzie ukojenie dla swojej skóry, ciała i ducha,
            gdzie odnajdzie równowagę piękna.
          </p>
        </div>
        <InnerWrapper>
          <StyledImg
            fluid={data.about.childImageSharp.fluid}
            alt="Katarzyna Gierczyk - dyplomowany kosmetolog"
          />
          <Caption />
        </InnerWrapper>
      </Section>

      <Gallery />
    </Layout>
  );
};

export const query = graphql`
  {
    file(name: { eq: "about-1" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    about: file(name: { eq: "about-2" }) {
      childImageSharp {
        fluid(jpegQuality: 100, maxWidth: 465) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
