import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import styled from "styled-components";
import AccordionItem from "./AccordionItem";

const AccordionWrapper = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr minmax(32rem, 130rem) 1fr;
  padding: 2rem;
  background-color: ${props => props.theme.colors.gray};

  li {
    :last-child {
      border: none;
    }
  }
`;

const Container = styled.div`
  grid-column: 2 / 3;
  background-color: white;
  padding: 2rem 8rem;
  margin: 1rem 0;
`;

const OuterWrapper = styled.section`
  margin-top: 6rem;
`;

const Accordion = () => {
  const data = useStaticQuery(graphql`
    {
      zabiegi: allMdx(
        filter: { fileAbsolutePath: { regex: "/zabiegi-pielegnacyjne/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
      kobido: allMdx(
        filter: { fileAbsolutePath: { regex: "/kobido/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
      terapie: allMdx(
        filter: { fileAbsolutePath: { regex: "/terapie/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
      icoone: allMdx(
        filter: { fileAbsolutePath: { regex: "/icoone/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
      dlonie: allMdx(
        filter: { fileAbsolutePath: { regex: "/dlonie/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
      oko: allMdx(
        filter: { fileAbsolutePath: { regex: "/oka/" } }
        sort: { order: ASC, fields: fileAbsolutePath }
      ) {
        nodes {
          frontmatter {
            duration
            price
            title
          }
          body
        }
      }
    }
  `);

  const parsedData = Object.values(data);
  const headings = [
    "Zabiegi pielęgnacyjne",
    "Kobido",
    "Terapie specjalistyczne",
    "ICOONE",
    "Dłonie i stopy",
    "Oprawa oka",
  ];

  return (
    <OuterWrapper>
      {parsedData.map((el, index) => (
        <AccordionWrapper>
          <Container>
            <h2>{headings[index]}</h2>
            <div>
              {el.nodes.map(item => (
                <AccordionItem
                  title={item.frontmatter.title}
                  price={item.frontmatter.price}
                  duration={item.frontmatter.duration}
                  body={<MDXRenderer>{item.body}</MDXRenderer>}
                />
              ))}
            </div>
          </Container>
        </AccordionWrapper>
      ))}
    </OuterWrapper>
  );
};

export default Accordion;
