import React, { FunctionComponent } from "react";
import groupBy from "lodash.groupby";

import { Card, CardContent, Divider } from "@material-ui/core";

import ChecklistSection from "./ChecklistSection";
import ChecklistSettings from "./ChecklistSettings";

import { ChecklistProps, ChecklistItem } from "./types";

const Checklist: FunctionComponent<ChecklistProps> = ({
  data,
  checkedItems,
  updateItem,
  withLadies,
  setWithLadies,
}) => {
  const { sections, items } = data;

  const filteredSections = withLadies
    ? sections
    : sections.filter((section) => !section.ladies);
  const groupedItems = groupBy(items, (item: ChecklistItem) => item.section);

  return (
    <Card>
      <CardContent>
        <ChecklistSettings
          withLadies={withLadies}
          setWithLadies={setWithLadies}
        />
      </CardContent>
      <Divider />
      <CardContent>
        {filteredSections.map((section) => (
          <ChecklistSection
            key={section.id}
            title={section.label}
            items={groupedItems[section.id]}
            ladies={section.ladies}
            checkedItems={checkedItems}
            updateItem={updateItem}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Checklist;
