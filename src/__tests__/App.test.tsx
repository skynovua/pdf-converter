import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "../App";

describe("App component functionality", () => {
  it("converts text to PDF", async () => {
    render(<App />);
    const textAreaElement = screen.getByRole("textbox");
    const convertButton = screen.getByRole("button", { name: /Convert to PDF/i });

    await userEvent.type(textAreaElement, "Sample text for PDF conversion");
    await userEvent.click(convertButton);

    const pdfViewerElement = await screen.findByTestId("pdf-viewer");
    expect(pdfViewerElement).toBeInTheDocument();
  });

  it("adds new conversion to history", async () => {
    render(<App />);
    const textAreaElement = screen.getByRole("textbox");
    const convertButton = screen.getByRole("button", { name: /Convert to PDF/i });

    await userEvent.type(textAreaElement, "Sample text for PDF conversion");
    await userEvent.click(convertButton);

    const historyItem = await screen.findByText(/Sample text for PDF conversion/i, {
      selector: "span",
    });
    expect(historyItem).toBeInTheDocument();
  });

  it("removes item from history", async () => {
    render(<App />);
    const textAreaElement = screen.getByRole("textbox");
    const convertButton = screen.getByRole("button", { name: /Convert to PDF/i });

    await userEvent.type(textAreaElement, "Sample text for PDF conversion");
    await userEvent.click(convertButton);

    const removeButton = await screen.findByTitle("Remove");
    await userEvent.click(removeButton);

    const historyItem = screen.queryByText(/Sample text for PDF conversion/i, { selector: "span" });
    expect(historyItem).not.toBeInTheDocument();
  });
});
