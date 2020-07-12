import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Accordion from "../components/Accordion";

const Header = styled.div`
  grid-column: 1 / span 2;
  justify-self: start;
`;

const Hero = styled(Img)`
  display: flex;
  width: 100%;
  height: 30rem;
  object-fit: cover;
  justify-content: center;
  margin: 4rem 0;
`;

const TreatmentsPage = ({ data }) => (
  <Layout>
    <Hero
      fluid={data.file.childImageSharp.fluid}
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
    file(name: { eq: "prices-1" }) {
      childImageSharp {
        fluid(maxHeight: 300, pngQuality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default TreatmentsPage;
