import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { ChecklistSettingsProps } from "./types";
import { FormControlLabel, Switch } from "@material-ui/core";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ChecklistSettings: FunctionComponent<ChecklistSettingsProps> = ({
  withLadies,
  setWithLadies,
}) => (
  <Wrapper>
    <FormControlLabel
      control={
        <Switch
          color="primary"
          checked={!!withLadies}
          onChange={(event) => setWithLadies(!!event.target.checked)}
          name="withLadies"
        />
      }
      label="Uwzględniaj część damską"
    />
  </Wrapper>
);

export default ChecklistSettings;
