import React, { FunctionComponent } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { ChecklistItemProps } from "./types";
import Tooltip from "./Tooltip";

const ChecklistItem: FunctionComponent<ChecklistItemProps> = ({
  label,
  value,
  id,
  onChange,
  tooltip,
}) => (
  <FormControl component="fieldset" fullWidth>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => {
              onChange(id, event.target.checked);
              event.currentTarget.blur();
            }}
            checked={value}
            color="default"
          />
        }
        label={
          <>
            {label}
            {tooltip && <Tooltip type={tooltip} />}
          </>
        }
      />
    </FormGroup>
  </FormControl>
);

export default ChecklistItem;
