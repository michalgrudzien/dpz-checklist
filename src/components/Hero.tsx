import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography, Grid, CardContent } from "@material-ui/core";

import Logo from "components/Logo";
import colors from "config/colors";

const MainTextWrapper = styled.div`
  color: ${colors.white};
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  padding-bottom: 2em;
`;

const Hero: FunctionComponent = () => (
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
              do niej później.
            </Typography>
          </Grid>
        </Grid>
      </MainTextWrapper>
    </CardContent>
  </>
);

export default Hero;
