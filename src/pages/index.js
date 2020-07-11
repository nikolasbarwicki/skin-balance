import React from "react";
import Layout from "../components/Layout";
import Slider from "../components/IndexPage/Slider";
import Brand from "../components/IndexPage/Brand";
import Prices from "../components/IndexPage/Prices";
import About from "../components/IndexPage/About";
import Treatments from "../components/IndexPage/Treatments";

const IndexPage = () => {
  return (
    <Layout>
      <Slider />

      <Brand />

      <Treatments />

      <About />

      <Prices />
    </Layout>
  );
};

export default IndexPage;
