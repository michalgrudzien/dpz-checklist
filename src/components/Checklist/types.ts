export type ChecklistData = {
  sections: { label: string; id: string; ladies?: boolean }[];
  items: ChecklistItem[];
  tooltips: { [name: string]: string };
};

export type ChecklistProps = {
  data: ChecklistData;
  checkedItems: { [name: string]: string };
  updateItem: Function;
};

export type ChecklistItem = {
  label: string;
  section: string;
  tooltip?: string;
};

export type ChecklistItemProps = {
  label: string;
  value: boolean;
  id: string;
  onChange: Function;
};

export type ChecklistSectionProps = {
  title: string;
  items: ChecklistItem[];
  ladies: boolean | undefined;
  checkedItems: { [name: string]: string };
  updateItem: Function;
};

export type HeroProps = {
  itemsCount: number;
  checkedItemsCount: number;
  clearItems: Function;
};
