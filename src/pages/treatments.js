import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Accordion from "../components/Accordion";

const Header = styled.div`
  grid-column: 1 / span 2;
  justify-self: start;
`;

const TreatmentsPage = () => (
  <Layout>
    <div>hero</div>
    <Section>
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

export default TreatmentsPage;
