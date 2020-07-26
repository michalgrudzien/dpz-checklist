import React, { FunctionComponent } from "react";
import groupBy from "lodash.groupby";

import { Card, CardContent } from "@material-ui/core";

import ChecklistSection from "./ChecklistSection";

import { ChecklistProps, ChecklistItem } from "./types";

const Checklist: FunctionComponent<ChecklistProps> = ({
  data,
  checkedItems,
  updateItem,
}) => {
  const { sections, items } = data;

  const groupedItems = groupBy(items, (item: ChecklistItem) => item.section);

  return (
    <Card>
      <CardContent>
        {sections.map((section) => (
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
