import React, { useState, useRef } from "react";
import styled from "styled-components";

const ItemWrapper = styled.li`
  grid-column: 2 / 3;
  cursor: pointer;
  background-color: white;
  padding: 1.5rem 4rem;
  border-bottom: 1px solid ${props => props.theme.colors.grayBorders};
  transition: text-shadow 0.3s;
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  text-shadow: ${props =>
    props.isActive ? null : "0 0 0.65px #333, 0 0 0.65px #333"};

  :hover {
    text-shadow: 0 0 0.65px #333, 0 0 0.65px #333;
    transition: text-shadow 0.3s;
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
