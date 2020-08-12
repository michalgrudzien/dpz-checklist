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
import { useChecklist } from "components/localStorage";
import Progress from "components/Progress";

import { ChecklistItem, ChecklistSection } from "components/Checklist/types";

const getItemsCount = (
  sections: ChecklistSection[],
  items: ChecklistItem[],
  withLadies: boolean
) => {
  if (withLadies) return items.length;
  return items.filter(
    (item: ChecklistItem) =>
      !sections.find((section: ChecklistSection) => section.id === item.section)
        ?.ladies
  ).length;
};

const getCheckedItemsCount = (
  sections: ChecklistSection[],
  items: ChecklistItem[],
  checkedItems: any[],
  withLadies: boolean
) => {
  if (withLadies)
    return Object.values(checkedItems).filter((value) => !!value).length;
  return Object.entries(checkedItems).filter(([key, value]) => {
    if (!value) return false;

    const itemSection = items.find((item) => item.label === key)?.section;
    const isInLadiesSection = sections.find(
      (section: ChecklistSection) => section.id === itemSection
    )?.ladies;

    return !isInLadiesSection;
  }).length;
};

const Wrapper = styled.div`
  padding-bottom: 2em;
`;

//TODO: handle trip type
const TRIP_ID = process.env.REACT_APP_TRIP_ID || "0";

const App = () => {
  const {
    items,
    updateItem,
    clearItems,
    withLadies,
    setWithLadies,
  } = useChecklist(TRIP_ID);

  const { sections: allSections, items: allItems } = checklistData.INLAND;
  const itemsCount = getItemsCount(allSections, allItems, withLadies);
  const checkedItemsCount = getCheckedItemsCount(
    allSections,
    allItems,
    items,
    withLadies
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Progress itemsCount={itemsCount} checkedItemsCount={checkedItemsCount} />
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
            withLadies={withLadies}
            setWithLadies={setWithLadies}
          />
        </Container>
      </Wrapper>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
