import React, { FunctionComponent } from "react";
import styled from "styled-components";

import {
  Typography,
  Grid,
  CardContent,
  Fade,
  Button,
  Box,
  Link,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

import Logo from "components/Logo";
import colors from "config/colors";
import { HeroProps } from "./types";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

//TODO: link to sea checklist based on trip

const Hero: FunctionComponent<HeroProps> = ({
  itemsCount,
  checkedItemsCount,
  clearItems,
}) => (
  <>
    <CardContent>
      <MainTextWrapper>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={12}>
            <Logo />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography color="inherit" variant="body1">
              Cześć! Udostępniamy naszą checklistę mającą wspomóc jakże żmudny,
              acz radosny czas pakowania się na rejs!
            </Typography>
            <Typography color="inherit" variant="body1">
              Możesz (z nieukrywaną satysfakcją!) odhaczać kolejne pozycje,
              a&nbsp;stan checklisty pozostanie na twoim urządzeniu, gdy wrócisz
              do niej później. Checklista w PDFie jest do pobrania{" "}
              <Link
                href="https://static.depezet.com/documents/checklista_dpz_rejs_srodladowy.pdf"
                target="_blank"
              >
                tutaj
              </Link>
              .
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} alignItems="center">
            <Typography variant="h2" color="inherit" align="center">
              {checkedItemsCount}/{itemsCount}
            </Typography>
            <Box textAlign="center">
              <Fade in={!!checkedItemsCount}>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => clearItems()}
                  startIcon={<ClearIcon />}
                >
                  Wyczyść mie to
                </Button>
              </Fade>
            </Box>
          </Grid>
        </Grid>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default Hero;
