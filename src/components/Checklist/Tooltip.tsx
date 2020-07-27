import React, { FunctionComponent } from "react";

import { Tooltip as MuiTooltip } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

import checklistData from "items.json";
import { TooltipProps } from "./types";

//TODO: trip type
const { tooltips } = checklistData.INLAND;

const Tooltip: FunctionComponent<TooltipProps> = ({ type }) => {
  if (!type) return null;

  return (
    <MuiTooltip
      title={tooltips[type]}
      arrow
      enterDelay={0}
      enterTouchDelay={0}
    >
      <InfoOutlinedIcon fontSize="small" color="primary" />
    </MuiTooltip>
  );
};

export default Tooltip;
