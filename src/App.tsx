import React from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";

import Footer from "components/Footer";
import GradientBackground from "components/GradientBackground";

import theme from "config/muiTheme";
import Hero from "components/Hero";
import Checklist from "components/Checklist";

import checklistData from "items.json";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

//TODO: handle trip type

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          <Hero />
          <Checklist data={checklistData.INLAND} />
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
