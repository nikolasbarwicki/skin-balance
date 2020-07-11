import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Accordion from "../components/Accordion";

const Header = styled.div`
  grid-column: 1 / span 2;
  justify-self: start;
`;

const Hero = styled.img`
  display: flex;
  width: 100vw;
  height: 30rem;
  object-fit: cover;
  justify-content: center;
  margin: 4rem 0;
`;

const ContentWrapper = styled.div``;

const TreatmentsPage = ({ data }) => (
  <Layout>
    <Hero
      src={data.allFile.nodes[0].childImageSharp.fluid.src}
      srcSet={data.allFile.nodes[0].childImageSharp.fluid.srcSet}
      sizes={data.allFile.nodes[0].childImageSharp.fluid.sizes}
      alt="Twarz kobiety masowana dłońmi"
    />
    <Section topHeader>
      <Header>
        <h2>Zabiegi</h2>
      </Header>

      <p>
        Nasze zabiegi są, w dniu wizyty, indywidualnie dostosowywane do stanu
        Twojej skóry. Ideą gabinetu jest odbudowa skóry, którą rozpoczynamy,
        omawiając codzienną pielęgnację oraz cele, jakie chcesz osiągnąć. Po
        zaproponowaniu zabiegów wspólnie decydujemy o idealnej drodze dla
        Ciebie.
      </p>
      <p style={{ alignSelf: "start" }}>
        Wykorzystujemy najbardziej skuteczne, nieinwazyjne technologie, terapie
        LED, ultradźwięki i mikroprądy. Masaż twarzy, terapeutyczny i
        relaksacyjny, jest wykonywany podczas każdego zabiegu pielęgnacyjnego.
      </p>
    </Section>

    <Accordion />
  </Layout>
);

export const query = graphql`
  {
    allFile(filter: { name: { eq: "prices-1" } }) {
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
  }
`;

export default TreatmentsPage;
