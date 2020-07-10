import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import Caption from "../components/Caption";

const Hero = styled.img`
  display: flex;
  width: 100vw;
  height: 30rem;
  object-fit: cover;
  justify-content: center;
  margin: 4rem 0;
`;

const AboutPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Hero
        src={data.hero.nodes[0].childImageSharp.fluid.src}
        srcSet={data.hero.nodes[0].childImageSharp.fluid.srcSet}
        sizes={data.hero.nodes[0].childImageSharp.fluid.sizes}
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
        <div>
          <img
            src={data.about.nodes[0].childImageSharp.fluid.src}
            srcSet={data.about.nodes[0].childImageSharp.fluid.srcSet}
            sizes={data.about.nodes[0].childImageSharp.fluid.sizes}
            alt="Katarzyna Gierczyk - dyplomowany kosmetolog"
          />
          <Caption />
        </div>
      </Section>

      <Gallery />
    </Layout>
  );
};

export const query = graphql`
  {
    hero: allFile(filter: { name: { eq: "about-1" } }) {
      nodes {
        childImageSharp {
          fluid(jpegQuality: 90, maxHeight: 300) {
            sizes
            src
            srcSet
          }
        }
      }
    }
    about: allFile(filter: { name: { eq: "about-2" } }) {
      nodes {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 465) {
            sizes
            src
            srcSet
          }
        }
      }
    }
    gallery: allFile(filter: { name: { regex: "/gallery/" } }) {
      nodes {
        childImageSharp {
          fluid(jpegQuality: 100, maxWidth: 465) {
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`;

export default AboutPage;
