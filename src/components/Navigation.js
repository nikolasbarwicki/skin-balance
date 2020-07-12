import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { device } from "../assets/styles/device";

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;

  @media ${device.mobile} {
    flex-direction: column;
    text-align: center;
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 2.2rem;
  margin: 0 4rem;
  text-transform: uppercase;
  transition: text-shadow 0.3s;

  :hover {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
  }

  @media ${device.mobile} {
    margin: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  padding: 2rem 0;
`;

const Navigation = () => {
  return (
    <nav>
      <ListWrapper>
        <ListItem>
          <StyledLink to="/brand">marka</StyledLink>
        </ListItem>

        <ListItem>
          <StyledLink to="/treatments">cennik</StyledLink>
        </ListItem>

        <ListItem>
          <StyledLink to="/about">o nas</StyledLink>
        </ListItem>

        <ListItem>
          <StyledLink to="/contact">kontakt</StyledLink>
        </ListItem>
      </ListWrapper>
    </nav>
  );
};

export default Navigation;
