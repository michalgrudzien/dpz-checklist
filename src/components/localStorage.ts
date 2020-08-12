import { useState, useEffect } from "react";

const STORAGE_KEY = "dpz-checklist";

export const initStorage = (tripId: string, withLadies: boolean = false) =>
  setStorageState({ tripId, withLadies, items: {} });

export const checkListActive = (tripId: string) => {
  const currentState = getStorageState();

  if (!currentState) return false;

  return (
    currentState.hasOwnProperty("tripId") && currentState.tripId === tripId
  );
};

export const getStorageState = () => {
  const state = localStorage.getItem(STORAGE_KEY);
  return state ? JSON.parse(state) : null;
};

export const setStorageState = (state: object) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

export const useChecklist = (tripId: string, withLadies?: boolean) => {
  const initialState = () => {
    if (!checkListActive(tripId)) initStorage(tripId, withLadies);
    return getStorageState();
  };

  const [state, setState] = useState(initialState);

  const setWithLadies = (value: boolean) =>
    setState({ ...state, withLadies: value });

  const updateItem = (item: string, value: string) =>
    setState({
      ...state,
      items: {
        ...state.items,
        [item]: value,
      },
    });

  const clearItems = () =>
    setState({
      ...state,
      items: {},
    });

  useEffect(() => setStorageState(state), [state]);

  return {
    items: state.items,
    withLadies: state.withLadies,
    updateItem,
    clearItems,
    setWithLadies,
  };
};
