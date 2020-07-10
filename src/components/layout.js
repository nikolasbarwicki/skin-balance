import React from "react";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import GlobalStyles from "../assets/styles/GlobalStyles";
import theme from "../assets/themes/theme";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SEO />
    <Wrapper>
      <div>
        <Header />
        {children}
      </div>

      <Footer />
    </Wrapper>
  </ThemeProvider>
);

export default MainLayout;
