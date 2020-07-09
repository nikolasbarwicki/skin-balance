import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ListWrapper = styled.ul`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContactPage = () => (
  <Layout>
    <div class="map">
      <iframe
        width="100%"
        height="450"
        frameborder="0"
        language="pl"
        zoom="20"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvW8_7SNjlOqAmHpqn_WG1-j75XvjibP4
    &q=Skin+Balance,Wroclaw+Poland&zoom=15&language=pl"
        allowfullscreen
      ></iframe>
    </div>
    <Section>
      <div>
        <h2>Kontakt</h2>
        <p>
          Aby uzyskać najnowsze informacje na temat urody i dobrego samopoczucia
          odwiedź salon osobiście, znajdujemy sie na Wojszycach południwej
          części Wrocławia. Ponadto, polub Skin Balance na Facebooku i śledź
          codziennie na Instagramie wszystkie najnowsze wydarzenia. Do
          zobaczenia.
        </p>
      </div>
      <div>
        <ListWrapper>
          <li>
            <FaPhoneAlt
              size="3rem"
              style={{ verticalAlign: "middle", marginRight: "1.5rem" }}
            />
            <a href="tel:48603781326">603 781 326</a>
          </li>
          <li>
            <FaEnvelope
              size="3rem"
              style={{ verticalAlign: "middle", marginRight: "1.5rem" }}
            />
            <a href="mailto:info@skinbalance.pl">info@skinbalance.pl</a>
          </li>
        </ListWrapper>
      </div>
    </Section>
  </Layout>
);

export default ContactPage;
