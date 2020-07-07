import React from "react";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout>
    <div>GOOGLE MAPS</div>
    <section>
      <div>
        <h4>Kontakt</h4>
        <p>
          Aby uzyskać najnowsze informacje na temat urody i dobrego samopoczucia
          odwiedź salon osobiście, znajdujemy sie na Wojszycach południwej
          części Wrocławia. Ponadto, polub Skin Balance na Facebooku i śledź
          codziennie na Instagramie wszystkie najnowsze wydarzenia. Do
          zobaczenia.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <i />
            <a href="tel:48603781326">603 781 326</a>
          </li>
          <li>
            <i />
            <a href="mailto:info@skinbalance.pl">info@skinbalance.pl</a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
