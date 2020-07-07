import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "../assets/styles/GlobalStyles";
import theme from "../assets/themes/theme";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Header />
    {children}
    <Footer />
  </ThemeProvider>
);

export default MainLayout;
