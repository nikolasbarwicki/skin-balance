import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryFonts};
  padding: 2rem 3rem;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.6rem;
  border: none;
  transition: color 0.5s ease;
  transition: background-color 0.5s ease;
  outline: none;
  margin: 2.5rem 0;

  /* margin-top: 2.5rem; */

  :hover {
    background-color: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.grayFonts};
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
