import { ConversionItem } from "@/types/types";

const HISTORY_KEY = "pdf_conversion_history";

export const saveToHistory = (item: ConversionItem) => {
  const history = getHistory();
  localStorage.setItem(HISTORY_KEY, JSON.stringify([item, ...history]));
};

export const getHistory = (): ConversionItem[] => {
  const history = localStorage.getItem(HISTORY_KEY);
  return history ? JSON.parse(history) : [];
};

export const updateHistory = (history: ConversionItem[]) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};
