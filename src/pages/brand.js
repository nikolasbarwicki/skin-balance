import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import styled from "styled-components";
import Section from "../components/Section";
import Layout from "../components/Layout";

const Hero = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 4rem;
`;

const BrandPage = ({ data }) => {
  console.log(data);

  return (
    <Layout>
      <Hero>
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="Logo Biologique Recherche"
        />
      </Hero>

      <Section padding="3">
        <Img
          fixed={data.brand1.childImageSharp.fixed}
          alt="Zarząd Biologique Recherche"
        />
        <div>
          <h2>40 lat pasji w pielęgnacji urody...</h2>
          <p>
            Biologique Recherche to istniejąca od ponad 40 lat francuska marka
            kosmetyków biologicznych i autorskich zabiegów haute couture, którą
            wyróżnia innowacyjne podejście do pielęgnacji urody. Jej twórcy i
            założyciele, Yvan, Josette i Philippe Allouche, biolog,
            fizjoterapeuta i lekarz, połączyli swoją wiedzę oraz pasję w
            stworzeniu nowatorskiej i wizjonerskiej filozofii dbania o piękno
            skóry, zapisując własną kartę w historii kosmetologii.
          </p>
        </div>
      </Section>

      <Section padding="3">
        <div>
          <h2>Holistyczne i innowacyjne podejście do piękna</h2>
          <p>
            Biologique Recherche jest ceniona przede wszystkim za potwierdzoną
            skuteczność, opartą na klinicznych metodach pielęgnacji skóry, oraz
            świetne rezultaty terapeutyczne, osiągane w krótkim czasie. Jej
            produkty słyną z wykorzystania aktywnych składników, o najwyższych
            stężeniach, stosowanych w kosmetologii. Laboratoria Biologique
            Recherche od lat tworzą innowacyjne produkty do zastosowań
            profesjonalnych oraz do pielęgnacji domowej, słynące z wysokiej
            skuteczności terapeutycznej. Ich unikatowe formuły zawierają silnie
            skoncentrowane substancje aktywne, pochodzenia biologicznego. Marka
            jest znana również z wyjątkowych technik zabiegowych oraz autorskich
            masaży twarzy i ciała.
          </p>
        </div>
        <Img
          fixed={data.brand2.childImageSharp.fixed}
          alt="Twarz kobiety podczas zabiegu"
        />
      </Section>

      <Section padding="3">
        <Img
          fixed={data.brand3.childImageSharp.fixed}
          alt="Ampułki preparatów"
        />
        <div>
          <h2>Naturalne składniki i harmonia</h2>
          <p>
            Kosmetyki i produkty Biologique Recherche wyróżniają się przede
            wszystkim: - wykorzystaniem unikatowych formuł, opartych na
            składnikach aktywnych wysokiej jakości, pochodzenia roślinnego,
            morskiego i biologicznego; - zastosowaniem najwyższych stężeń
            składników aktywnych, wykorzystywanych w kosmetologii (od 23% do
            ponad 60%); - stosowaniem wyłącznie naturalnych substancji
            zapachowych; - wykorzystaniem metod pozwalających na zachowanie
            oryginalnych struktur składników aktywnych.
          </p>
        </div>
      </Section>

      <Section padding="3">
        <div>
          <h2>Marka doceniona w Polsce i na świecie</h2>
          <p>
            Biologique Recherche doceniają kobiety na całym świecie. Uwielbiają
            je również światowe gwiazdy, słynące z urody, m.in. Angelina Jolie,
            Brad Pitt, Salma Hayek,Jennifer Lopez, Madonna, Linda Evangelista,
            czy Galliano, a także guru pielęgnacji urody, najsłynniejsze
            kosmetyczki i kosmetolodzy. Marka jest dziś obecna w najlepszych
            salonach kosmetycznych i spa oraz prestiżowych hotelach w ponad 75
            krajach na całym świecie. Wzorcowy i najsłynniejszy salon marki,
            Ambasada Urody, mieści się przy Polach Elizejskich w Paryżu.
          </p>
        </div>
        <Img fixed={data.brand4.childImageSharp.fixed} alt="Zarys budynku" />
      </Section>

      <Section padding="3">
        <Img
          fixed={data.brand5.childImageSharp.fixed}
          alt="Nagrody przyznane Biologique Recherche"
        />

        <div>
          <h2>Nasze nagrody</h2>
          <p>
            Co roku Biologique Recherche zbiera nagrody na całym świecie oraz
            pojawia się w zestawieniach topowych kosmetyków profesjonalnych i w
            rankingach na najlepsze zabiegi kosmetyczne. Kosmetyki marki
            określane są jako kultowe produkty wszech czasów, m.in. wielokrotnie
            nagradzany Lotion P50 — najlepszy kosmetyk wszech czasów w rankingu
            redakcyjnym „ELLE US utytułowany również w Polsce nagrodą „Glammies
            2015” miesięcznika „Glamour” oraz wyróżnieniem „Wybór Roku” magazynu
            LNE. Marka zdobyła również uznanie za swoje unikatowe zabiegi
            profesjonalne, m.in. tytuły „Best Non-Surgical Face Lifting”
            amerykańskiego miesięcznika „New York Magazine” dla zabiegu
            modelowania twarzy Remodeling Face oraz „Beauty Premium” polskiego
            wydania Beauty Forum dla autorskiej Mezoterapii mikroigłowej.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  {
    logo: file(name: { eq: "01-biologique-logo" }) {
      childImageSharp {
        fixed(width: 450, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    brand1: file(name: { eq: "section-brand-1" }) {
      childImageSharp {
        fixed(width: 400, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    brand2: file(name: { eq: "section-brand-2" }) {
      childImageSharp {
        fixed(width: 400, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    brand3: file(name: { eq: "section-brand-3" }) {
      childImageSharp {
        fixed(width: 400, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    brand4: file(name: { eq: "section-brand-4" }) {
      childImageSharp {
        fixed(width: 400, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    brand5: file(name: { eq: "section-brand-5" }) {
      childImageSharp {
        fixed(width: 400, quality: 80) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

export default BrandPage;
