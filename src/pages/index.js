import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout>
    <section>Slider</section>
    <section>
      <div>
        <h4>Marka</h4>
        <h2>Piękna skóra jest sprawą wyboru, a nie przypadku</h2>
        <p>
          Pozwól wprowadzić się w świat najlepszych światowych marek łączących
          tradycyjną francuską szkołę ze współczesną technologią.
        </p>
        <button>dowiedz się więcej</button>
      </div>
      <div>3x logos</div>
    </section>

    <section>
      <div>img</div>
      <div>
        <a>
          <h4>Zabiegi pielęgnacyjne</h4>
          <span>
            Zabiegi aplikacyjne z masażami autorskimi Biologique Recherche.
          </span>
        </a>
        <a>
          <h4>Kobido</h4>
          <span>Masaż twarzy z naturalnym efektem liftingującym.</span>
        </a>
        <a>
          <h4>Terapie specjalistyczne</h4>
          <span>Procedury zabiegowe z wykorzystaniem maszyn.</span>
        </a>
        <a>
          <h4>ICOONE</h4>
          <span>Przełom w modelowaniu sylwetki.</span>
        </a>
      </div>
    </section>

    <section>
      <div>
        <h4>O nas</h4>
        <h2>Poznaj nasz zespół</h2>
        <div>
          <h2>Katarzyna Gierczyk</h2>
          <span>dyplomowany kosmetolog</span>
          <br />
          <p>
            Moja praca jest moją pasją, dlatego nieustannie kształcę się i
            poszukuję nowych rozwiązań, łączących aktualną wiedzę z nabytym
            doświadczeniem w profesjonalnej pielęgnacji.
          </p>
          <button>dowiedz się więcej</button>
        </div>
      </div>
      <div>kasia zdjecie</div>
    </section>

    <section>
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
        <button>dowiedz się więcej</button>
      </div>
      <div>2x img</div>
    </section>
  </Layout>
);

export default IndexPage;
