import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import Caption from "../components/Caption";
import Button from "../components/Button";
import Section from "../components/Section";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { device } from "../assets/styles/device";

const LogosWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-gap: 2rem;

  @media ${device.mobile} {
    margin-top: 5rem;
  }
`;

const StyledImage = styled.img`
  width: 50vw;
  min-height: 100%;
  object-fit: cover;

  @media ${device.tablet} {
    width: 100vw;
    height: 30vh;
  }
`;

const TreatmentsGrid = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  grid-gap: 1px;
  background-color: ${props => props.theme.colors.grayBorders};
  align-items: stretch;
  justify-items: stretch;

  @media ${device.desktop} {
  }
  @media ${device.laptop} {
  }
  @media ${device.tablet} {
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  a {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    -webkit-transition: background-color 0.2s ease-out;
    -moz-transition: background-color 0.2s ease-out;
    -o-transition: background-color 0.2s ease-out;
    transition: background-color 0.2s ease-out;

    @media ${device.tablet} {
      padding: 4rem;
    }

    :hover {
      background-color: #f8f8f8;
    }

    h3 {
      position: relative;
    }

    h3::before {
      content: "";
      position: absolute;
      left: calc(50% - 5rem);
      width: 10rem;
      height: 3px;
      bottom: -1rem;
      background-color: ${props => props.theme.colors.primary};
    }

    span {
      font-size: 1.4rem;
      width: 50%;
      padding-top: 3rem;
      line-height: 1.6;
      margin: 0 auto;
    }
  }
`;

const Header = styled.div`
  grid-column: 1 / span 2;
  justify-self: start;
`;

const AboutSectionWrapper = styled.div`
  background-color: white;
  padding: 8rem;
  margin: 1rem;

  @media ${device.laptop} {
    padding: 4rem;
  }

  @media ${device.mobile} {
    padding: 4rem;
  }
`;

const StyledBr = styled.hr`
  color: ${props => props.theme.colors.grayBorders};
  margin: 2rem 0;
`;

const StyledNestedImage = styled.img`
  position: absolute;
  z-index: 999;
  bottom: 3rem;
  right: 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  padding-left: 4rem;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const SliderWrapper = styled.div`
  width: 100vw;
`;

const StyledImg = styled.img`
  @media ${device.laptop} {
    height: auto;
    width: 100%;
  }

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const GridItem = styled(Link)`
  @media ${device.mobile} {
    padding: 4rem 0;
  }
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SliderWrapper>
        <Carousel
          autoPlay={5000}
          animationSpeed={1000}
          infinite
          centered
          draggable={false}
        >
          <img
            src={data.slider.nodes[0].childImageSharp.fluid.src}
            srcSet={data.slider.nodes[0].childImageSharp.fluid.srcSet}
            sizes={data.slider.nodes[0].childImageSharp.fluid.sizes}
            alt="Butelki z kosmetykami"
          />
          <img
            src={data.slider.nodes[1].childImageSharp.fluid.src}
            srcSet={data.slider.nodes[1].childImageSharp.fluid.srcSet}
            sizes={data.slider.nodes[1].childImageSharp.fluid.sizes}
            alt="Ampułki z preparatem"
          />
          <img
            src={data.slider.nodes[2].childImageSharp.fluid.src}
            srcSet={data.slider.nodes[2].childImageSharp.fluid.srcSet}
            sizes={data.slider.nodes[2].childImageSharp.fluid.sizes}
            alt="Kobieca twarz podczas masażu"
          />
        </Carousel>
      </SliderWrapper>
      <Section padding="8">
        <div>
          <h4>Marka</h4>
          <h2>Piękna skóra jest sprawą wyboru, a nie przypadku</h2>
          <p>
            Pozwól wprowadzić się w świat najlepszych światowych marek łączących
            tradycyjną francuską szkołę ze współczesną technologią.
          </p>
          <Button>dowiedz się więcej</Button>
        </div>
        <LogosWrapper>
          {data.allFile.edges.map(img => (
            <img
              src={img.node.childImageSharp.fluid.src}
              srcSet={img.node.childImageSharp.fluid.srcSet}
              sizes={img.node.childImageSharp.fluid.sizes}
              key={img.node.childImageSharp.fluid.src}
              alt="Logo firmowe"
            />
          ))}
        </LogosWrapper>
      </Section>

      <Section fullWidth padding="0">
        <StyledImage
          src={data.img.nodes[0].childImageSharp.fluid.src}
          srcSet={data.img.nodes[0].childImageSharp.fluid.srcSet}
          sizes={data.img.nodes[0].childImageSharp.fluid.sizes}
          alt="Kobieta z maseczką na twarzy podczas zabiegu"
        />

        <TreatmentsGrid>
          <GridItem to="/treatments#zabiegi-pielegnacyjne">
            <h3>Zabiegi pielęgnacyjne</h3>
            <span>
              Zabiegi aplikacyjne z masażami autorskimi Biologique Recherche.
            </span>
          </GridItem>
          <GridItem to="/treatments#kobido">
            <h3>Kobido</h3>
            <span>Masaż twarzy z naturalnym efektem liftingującym.</span>
          </GridItem>
          <GridItem to="/treatments#terapie-specjalistyczne">
            <h3>Terapie specjalistyczne</h3>
            <span>Procedury zabiegowe z wykorzystaniem maszyn.</span>
          </GridItem>
          <GridItem to="/treatments#icoone">
            <h3>ICOONE</h3>
            <span>Przełom w modelowaniu sylwetki.</span>
          </GridItem>
        </TreatmentsGrid>
      </Section>

      <Section grayBackground padding="8">
        <Header>
          <h4>O nas</h4>
          <h2>Poznaj nasz zespół</h2>
        </Header>

        <AboutSectionWrapper>
          <Caption />
          <StyledBr />
          <p>
            Moja praca jest moją pasją, dlatego nieustannie kształcę się i
            poszukuję nowych rozwiązań, łączących aktualną wiedzę z nabytym
            doświadczeniem w profesjonalnej pielęgnacji.
          </p>
          <Button>dowiedz się więcej</Button>
        </AboutSectionWrapper>

        <StyledImg
          mobileHide
          src={data.img.nodes[3].childImageSharp.fluid.src}
          srcSet={data.img.nodes[3].childImageSharp.fluid.srcSet}
          sizes={data.img.nodes[3].childImageSharp.fluid.sizes}
          alt="Katarzyna Gierczyk - dylomowany kosmetolog"
        />
      </Section>

      <Section padding="8">
        <div>
          <h4>Cennik</h4>
          <h2>Poznaj naszą bogatą ofertę zabiegów na twarz i ciało</h2>
          <p>
            Nasze zabiegi są indywidualnie dostosowywane do stanu Twojej skóry w
            dniu zabiegu. Wierzymy w odbudowę skóry, a nie jej uszkadzanie.
            Podczas zabiegu omawiamy codzienną pielęgnację oraz cele jakie
            chcesz osiągnąć. Wspólnie decydujemy o idealnej drodze zabiegów
            pielęgnacyjnych dla Ciebie.
          </p>
          <Button>dowiedz się więcej</Button>
        </div>
        <ImageWrapper>
          <img
            src={data.img.nodes[1].childImageSharp.fluid.src}
            srcSet={data.img.nodes[1].childImageSharp.fluid.srcSet}
            sizes={data.img.nodes[1].childImageSharp.fluid.sizes}
            alt="Kobiece dłonie na tle liści"
          />
          <StyledNestedImage
            src={data.img.nodes[2].childImageSharp.fluid.src}
            srcSet={data.img.nodes[2].childImageSharp.fluid.srcSet}
            sizes={data.img.nodes[2].childImageSharp.fluid.sizes}
            alt="Szklane butelki z mydłem"
          />
        </ImageWrapper>
      </Section>
    </Layout>
  );
};

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/logos/" } }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 200, jpegQuality: 100) {
              sizes
              src
              srcSet
            }
          }
        }
      }
    }
    img: allFile(filter: { name: { regex: "/main-/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1200, jpegQuality: 90) {
            sizes
            src
            srcSet
          }
        }
      }
    }
    slider: allFile(filter: { name: { regex: "/slider-/" } }) {
      nodes {
        childImageSharp {
          fluid(maxHeight: 800, jpegQuality: 90) {
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`;

export default IndexPage;
