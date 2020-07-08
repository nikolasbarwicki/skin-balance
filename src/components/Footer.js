import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.colors.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`;

const ListWrapper = styled.ul`
  list-style: none;
  text-align: center;
  width: 25rem;
  line-height: 2.2;
`;

const IconWrapper = styled(ListWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <ListWrapper>
        <li>
          <a href="tel:48603781326">603 781 326</a>
        </li>
        <li>
          <a href="mailto:info@skinbalance.pl">info@skinbalance.pl</a>
        </li>
      </ListWrapper>
      <ListWrapper>
        <li>Klasztorna 60/U1</li>
        <li>52-234 Wrocław</li>
      </ListWrapper>
      <IconWrapper>
        <a href="https://instagram.com/skinbalance.katarzynagierczyk">
          <FaInstagram
            size="3rem"
            style={{ verticalAlign: "middle", marginRight: "3rem" }}
          />
        </a>
        <a href="https://www.facebook.com/SkinBalanceKatarzynaGierczyk/">
          <FaFacebookSquare size="3rem" style={{ verticalAlign: "middle" }} />
        </a>
      </IconWrapper>
    </FooterWrapper>
  );
};

export default Footer;
