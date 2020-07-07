import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import Navigation from "./Navigation";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledLogo = styled.img`
  margin: 3rem;
`;

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            src
            srcSet
            sizes
          }
        }
      }
    }
  `);
  console.log(data);
  return (
    <HeaderWrapper>
      <Link to="/">
        <StyledLogo
          src={data.file.childImageSharp.fluid.src}
          srcSet={data.file.childImageSharp.fluid.srcSet}
          sizes={data.file.childImageSharp.fluid.sizes}
        />
      </Link>

      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;
