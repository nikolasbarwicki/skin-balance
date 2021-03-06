import React, { useState, useRef } from "react";
import styled from "styled-components";

import { device } from "../assets/styles/device";

const ItemWrapper = styled.li`
  grid-column: 2 / 3;
  cursor: pointer;
  background-color: white;
  padding: 1.5rem 4rem;
  border-bottom: 1px solid ${props => props.theme.colors.grayBorders};
  transition: text-shadow 0.3s;

  @media ${device.tablet} {
    padding: 1.5rem 3rem;
  }

  @media ${device.mobile} {
    padding: 1rem 2rem;
  }
`;

const Heading = styled.div`
  display: grid;
  grid: 1fr / auto 10rem;
  text-shadow: ${props =>
    props.isActive ? null : "0 0 0.65px #333, 0 0 0.65px #333"};

  :hover {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
    transition: text-shadow 0.3s;
  }

  @media ${device.mobile} {
    grid: 1fr / auto 5rem;
  }
`;

const Content = styled.div`
  transition: max-height 0.3s ease-out;
`;

const Desc = styled.p`
  margin: 1.5rem 6rem;

  ul {
    padding-left: 4rem;
  }

  li {
    list-style: disc;
  }
`;

const AccordionItem = ({ title, price, duration, body }) => {
  const [isActive, setIsActive] = useState(true);
  const [height, setHeight] = useState(0);

  const item = useRef(null);

  const itemToggle = () => {
    setIsActive(!isActive);

    setHeight(isActive ? item.current.scrollHeight : 0);

    console.log(item);
    console.log(height);
  };

  return (
    <ItemWrapper onClick={() => itemToggle()}>
      <Heading isActive={isActive}>
        <span style={{ textTransform: "uppercase" }}>- {title}</span>
        <span>
          {price ? `${price} zł ` : "więcej w opisie"}
          {duration ? `/ ${duration} h` : null}
        </span>
      </Heading>
      <Content
        ref={item}
        style={{ maxHeight: `${height}px`, overflow: "hidden" }}
      >
        <Desc>{body}</Desc>
      </Content>
    </ItemWrapper>
  );
};

export default AccordionItem;
