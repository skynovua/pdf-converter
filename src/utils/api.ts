import axios from "axios";

const API_URL = "http://95.217.134.12:4010/create-pdf";
const API_KEY = "78684310-850d-427a-8432-4a6487f6dbc4";

export const convertToPdf = async (text: string) => {
  return axios.post(
    API_URL,
    { text },
    {
      params: { apiKey: API_KEY },
      responseType: "blob",
    },
  );
};
