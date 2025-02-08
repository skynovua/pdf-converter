import { describe, it, expect, beforeEach } from "vitest";
import { saveToHistory, getHistory, updateHistory } from "@/utils/storage";
import { ConversionItem } from "@/types/types";

const HISTORY_KEY = "pdf_conversion_history";

describe("storage utils", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("saveToHistory", () => {
    it("should save a new item to history", () => {
      const item: ConversionItem = { id: "1", text: "Sample text", pdfUrl: "sample.pdf" };
      saveToHistory(item);

      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      expect(history).toHaveLength(1);
      expect(history[0]).toEqual(item);
    });

    it("should add a new item to the beginning of the history", () => {
      const item1: ConversionItem = { id: "1", text: "Sample text 1", pdfUrl: "sample1.pdf" };
      const item2: ConversionItem = { id: "2", text: "Sample text 2", pdfUrl: "sample2.pdf" };

      saveToHistory(item1);
      saveToHistory(item2);

      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      expect(history).toHaveLength(2);
      expect(history[0]).toEqual(item2);
      expect(history[1]).toEqual(item1);
    });
  });

  describe("getHistory", () => {
    it("should return an empty array if no history is found", () => {
      const history = getHistory();
      expect(history).toEqual([]);
    });

    it("should return the saved history", () => {
      const item: ConversionItem = { id: "1", text: "Sample text", pdfUrl: "sample.pdf" };
      localStorage.setItem(HISTORY_KEY, JSON.stringify([item]));

      const history = getHistory();
      expect(history).toHaveLength(1);
      expect(history[0]).toEqual(item);
    });
  });

  describe("updateHistory", () => {
    it("should update the history with the provided items", () => {
      const item1: ConversionItem = { id: "1", text: "Sample text 1", pdfUrl: "sample1.pdf" };
      const item2: ConversionItem = { id: "2", text: "Sample text 2", pdfUrl: "sample2.pdf" };

      updateHistory([item1, item2]);

      const history = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
      expect(history).toHaveLength(2);
      expect(history[0]).toEqual(item1);
      expect(history[1]).toEqual(item2);
    });
  });
});