import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import { device } from "../../assets/styles/device";

const SliderWrapper = styled.div`
  width: 100vw;
`;

const Slider = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { name: { regex: "/slider/" } }) {
        nodes {
          childImageSharp {
            fluid(maxHeight: 400, pngQuality: 10) {
              base64
              aspectRatio
              src
              srcSet
              srcSetWebp
              srcWebp
              sizes
            }
          }
        }
      }
    }
  `);

  console.log(data);

  return (
    <SliderWrapper>
      <Carousel
        autoPlay={5000}
        animationSpeed={1000}
        infinite
        centered
        draggable={false}
      >
        <img
          src={data.allFile.nodes[0].childImageSharp.fluid.src}
          srcSet={data.allFile.nodes[0].childImageSharp.fluid.srcSet}
          sizes={data.allFile.nodes[0].childImageSharp.fluid.sizes}
          base64={data.allFile.nodes[0].childImageSharp.fluid.base64}
          aspectRatio={data.allFile.nodes[0].childImageSharp.fluid.aspectRatio}
          srcSetWebp={data.allFile.nodes[0].childImageSharp.fluid.srcSetWebp}
          srcWebp={data.allFile.nodes[0].childImageSharp.fluid.srcWebp}
          alt="Butelki z kosmetykami"
        />
        <img
          src={data.allFile.nodes[1].childImageSharp.fluid.src}
          srcSet={data.allFile.nodes[1].childImageSharp.fluid.srcSet}
          sizes={data.allFile.nodes[1].childImageSharp.fluid.sizes}
          base64={data.allFile.nodes[1].childImageSharp.fluid.base64}
          aspectRatio={data.allFile.nodes[1].childImageSharp.fluid.aspectRatio}
          srcSetWebp={data.allFile.nodes[1].childImageSharp.fluid.srcSetWebp}
          srcWebp={data.allFile.nodes[1].childImageSharp.fluid.srcWebp}
          alt="Ampułki z preparatem"
        />
        <img
          src={data.allFile.nodes[2].childImageSharp.fluid.src}
          srcSet={data.allFile.nodes[2].childImageSharp.fluid.srcSet}
          sizes={data.allFile.nodes[2].childImageSharp.fluid.sizes}
          base64={data.allFile.nodes[2].childImageSharp.fluid.base64}
          aspectRatio={data.allFile.nodes[2].childImageSharp.fluid.aspectRatio}
          srcSetWebp={data.allFile.nodes[2].childImageSharp.fluid.srcSetWebp}
          srcWebp={data.allFile.nodes[2].childImageSharp.fluid.srcWebp}
          alt="Kobieca twarz podczas masażu"
        />
      </Carousel>
    </SliderWrapper>
  );
};

export default Slider;
