import React, { FunctionComponent } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";

type ChecklistItemProps = {
  label: string;
  value: boolean;
  id: string;
  onChange: Function;
};

const ChecklistItem: FunctionComponent<ChecklistItemProps> = ({
  label,
  value,
  id,
  onChange,
}) => (
  <FormControl component="fieldset" fullWidth>
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            onChange={(event) => {
              onChange(event.target.checked);
              event.currentTarget.blur();
            }}
            checked={value}
            color="default"
          />
        }
        label={label}
      />
    </FormGroup>
  </FormControl>
);

export default ChecklistItem;
