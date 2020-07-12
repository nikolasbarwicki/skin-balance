import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Caption from "../Caption";
import Button from "../Button";
import Section from "../Section";

import { device } from "../../assets/styles/device";

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
    padding: 3rem;
  }
`;

const StyledBr = styled.hr`
  color: ${props => props.theme.colors.grayBorders};
  margin: 2rem 0;
`;

const StyledImg = styled(Img)`
  width: 100%;

  @media ${device.laptop} {
    height: auto;
    width: 100%;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "main-2" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
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
        <Link to="/treatments">
          <Button>dowiedz się więcej</Button>
        </Link>
      </AboutSectionWrapper>

      <StyledImg
        fluid={data.file.childImageSharp.fluid}
        alt="Katarzyna Gierczyk - dylomowany kosmetolog"
      />
    </Section>
  );
};

export default About;
