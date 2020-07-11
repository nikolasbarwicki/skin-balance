import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Navigation from "./Navigation";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
`;

const Logo = styled(Img)`
  margin: 3rem;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(width: 400, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Wrapper>
      <Link to="/">
        <Logo fixed={data.file.childImageSharp.fixed} alt="Skin Balance Logo" />
      </Link>
      <Navigation />
    </Wrapper>
  );
};

export default Header;
