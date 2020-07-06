import React from "react";
import GlobalStyles from "../assets/styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
