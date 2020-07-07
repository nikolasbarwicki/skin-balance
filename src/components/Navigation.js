import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const ListWrapper = styled.ul`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 37.5em) {
    .navigation__list {
      flex-direction: column;
      text-align: center;
    }
  }
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 2.2rem;
  margin: 0 5rem;
  text-transform: uppercase;
  transition: text-shadow 0.3s;

  @media only screen and (max-width: 37.5em) {
    .navigation__item {
      margin: 0.5rem 2rem;
    }
  }

  :hover {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
  }
`;

//
//
//
//      }
//     @media only screen and (max-width: 37.5em) {
//       .navigation__item {
//         margin: 0.5rem 2rem; } }
//   .navigation__link {
//     text-decoration: none;
//     color: #000;
//     font-family: "Montserrat", sans-serif;
//     transition: text-shadow .3s; }
//   .navigation__link:hover {
//     text-shadow: 0 0 .65px #333, 0 0 .65px #333; }

const Navigation = () => {
  return (
    <nav>
      <ListWrapper>
        <Link to="/brand">
          <ListItem>marka</ListItem>
        </Link>
        <Link to="/treatments">
          <ListItem>cennik</ListItem>
        </Link>
        <Link to="/about">
          <ListItem>o nas</ListItem>
        </Link>
        <Link to="/contact">
          <ListItem>kontakt</ListItem>
        </Link>
      </ListWrapper>
    </nav>
  );
};

export default Navigation;
