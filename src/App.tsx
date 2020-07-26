import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { ThemeProvider } from "@material-ui/styles";
import { Container, CssBaseline } from "@material-ui/core";

import Footer from "components/Footer";
import GradientBackground from "components/GradientBackground";

import theme from "config/muiTheme";
import Hero from "components/Hero";
import Checklist from "components/Checklist";

import checklistData from "items.json";
import {
  checkListActive,
  initStorage,
  getStorageState,
  useChecklist,
} from "components/localStorage";

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

//TODO: handle trip type

const TRIP_ID = process.env.REACT_APP_TRIP_ID || "0";

const App = () => {
  const { items, updateItem, clearItems } = useChecklist(TRIP_ID);

  const itemsCount = checklistData.INLAND.items.length;
  const checkedItemsCount = Object.values(items).filter((value) => !!value)
    .length;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Wrapper>
        <GradientBackground />
        <Container>
          <Hero
            itemsCount={itemsCount}
            checkedItemsCount={checkedItemsCount}
            clearItems={clearItems}
          />
          <Checklist
            data={checklistData.INLAND}
            checkedItems={items}
            updateItem={updateItem}
          />
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
