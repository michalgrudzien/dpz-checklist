export type ChecklistData = {
  sections: { label: string; id: string; ladies?: boolean }[];
  items: ChecklistItem[];
  tooltips: { [name: string]: string };
};

export type ChecklistProps = {
  data: ChecklistData;
  //TODO: extend
};

export type ChecklistItem = {
  label: string;
  section: string;
  tooltip?: string;
};

export type ChecklistSectionProps = {
  title: string;
  items: ChecklistItem[];
  ladies: boolean | undefined;
};
