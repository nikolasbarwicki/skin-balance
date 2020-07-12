import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Navigation from "./Navigation";

import { device } from "../assets/styles/device";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const Logo = styled(Img)`
  margin: 3rem;
  width: 40rem;

  @media ${device.mobile} {
    width: 80vw;
  }
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 400, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Link to="/">
        <Logo fluid={data.file.childImageSharp.fluid} alt="Skin Balance Logo" />
      </Link>
      <Navigation />
    </Wrapper>
  );
};

export default Header;
