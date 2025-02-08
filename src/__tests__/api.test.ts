import axios from "axios";
import { describe, expect, it, vi } from "vitest";

import { convertToPdf } from "@/utils/api";

vi.mock("axios");
const mockedAxios = vi.mocked(axios, true);

describe("convertToPdf", () => {
  it("should call axios.post with correct parameters", async () => {
    const text = "Sample text";
    const response = { data: new Blob() };
    mockedAxios.post.mockResolvedValue(response);

    const result = await convertToPdf(text);

    expect(axios.post).toHaveBeenCalledWith(
      "http://95.217.134.12:4010/create-pdf",
      { text },
      {
        params: { apiKey: "78684310-850d-427a-8432-4a6487f6dbc4" },
        responseType: "blob",
      },
    );
    expect(result).toBe(response);
  });

  it("should handle errors correctly", async () => {
    const text = "Sample text";
    const errorMessage = "Network Error";
    mockedAxios.post.mockRejectedValue(new Error(errorMessage));

    await expect(convertToPdf(text)).rejects.toThrow(errorMessage);
  });
});
