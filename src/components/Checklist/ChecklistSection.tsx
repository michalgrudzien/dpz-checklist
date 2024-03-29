import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Typography, Grid } from "@material-ui/core";

import colors from "config/colors";
import { ChecklistSectionProps } from "./types";
import ChecklistItem from "./ChecklistItem";

const Wrapper = styled.section<{ ladies: boolean }>`
  ${({ ladies }) =>
    ladies &&
    `
        color: ${colors.ladiesRed};
    `}
`;

const ChecklistSection: FunctionComponent<ChecklistSectionProps> = ({
  title,
  items = [],
  ladies = false,
  checkedItems,
  updateItem,
}) => {
  return (
    <Wrapper ladies={ladies}>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h4" color="inherit">
            {title}
          </Typography>
          {items.map((item) => (
            <ChecklistItem
              label={item.label}
              value={!!checkedItems[item.label]}
              id={item.label}
              onChange={updateItem}
              key={item.label}
              tooltip={item.tooltip}
            />
          ))}
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default ChecklistSection;
