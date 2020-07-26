import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { LinearProgress } from "@material-ui/core";

import colors from "config/colors";
import { ProgressProps } from "./types";

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;

  ${({ value }) =>
    value === 100 &&
    `
    &.MuiLinearProgress-root{
        .MuiLinearProgress-barColorPrimary{
            background-color: ${colors.green}
        }
    }
  `}
`;

const Progress: FunctionComponent<ProgressProps> = ({
  itemsCount,
  checkedItemsCount,
}) => (
  <StyledLinearProgress
    variant="determinate"
    value={(checkedItemsCount / itemsCount) * 100}
  />
);

export default Progress;
