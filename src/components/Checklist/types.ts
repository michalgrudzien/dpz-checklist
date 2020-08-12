export type TooltipKey = "NOT_REQUIRED" | "MEDICINE" | "ONE_IS_ENOUGH";

export type ChecklistData = {
  sections: { label: string; id: string; ladies?: boolean }[];
  items: ChecklistItem[];
  tooltips: { [key in TooltipKey]: string };
};

export type ChecklistProps = {
  data: ChecklistData;
  checkedItems: { [name: string]: string };
  updateItem: Function;
  withLadies: boolean;
  setWithLadies: Function;
};

export type ChecklistItem = {
  label: string;
  section: string;
  tooltip?: any;
};

export type ChecklistSection = {
  label: string;
  id: string;
  ladies?: boolean;
};

export type ChecklistItemProps = {
  label: string;
  value: boolean;
  id: string;
  onChange: Function;
  tooltip?: TooltipKey;
};

export type ChecklistSectionProps = {
  title: string;
  items: ChecklistItem[];
  ladies?: boolean;
  checkedItems: { [name: string]: string };
  updateItem: Function;
};

export type TooltipProps = {
  type?: TooltipKey;
};

export type ChecklistSettingsProps = {
  withLadies: boolean;
  setWithLadies: Function;
};
