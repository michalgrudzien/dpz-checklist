const STORAGE_KEY = "dpz-checklist";

export const initStorage = () => setStorageState({ tripId: 12, items: {} });

export const getStorageState = () => {
  const state = localStorage.getItem(STORAGE_KEY);
  return state ? JSON.parse(state) : null;
};

export const setStorageState = (state: object) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

export const updateItem = (item: string, value: string) => {
  const currentState = getStorageState();

  setStorageState({
    ...currentState,
    items: {
      ...currentState.items,
      [item]: value,
    },
  });
};
