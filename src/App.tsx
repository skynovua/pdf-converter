import type React from "react";
import { useState, useEffect } from "react";
import { CreatePdfForm } from "@/components/create-pdf-form";
import { PdfViewer } from "@/components/pdf-viewer";
import { ConversionHistory } from "@/components/conversion-history";
import { convertToPdf } from "@/utils/api";
import { saveToHistory, getHistory } from "@/utils/storage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blobToBase64 } from "@/utils/file";
import { ConversionItem } from "@/types/item";



const App: React.FC = () => {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [history, setHistory] = useState<ConversionItem[]>([]);

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  const handleConvert = async (text: string) => {
    try {
      const response = await convertToPdf(text);

      if (!response.data) throw new Error("PDF not found");

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });
      const base64Data = await blobToBase64(pdfBlob);      

      setPdfUrl(base64Data);

      const newItem: ConversionItem = {
        id: crypto.randomUUID(),
        text,
        pdfUrl: base64Data,
      };

      saveToHistory(newItem);
      setHistory((prevHistory) => [newItem, ...prevHistory]);
    } catch (error) {
      console.error("Error converting to PDF:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">PDF Converter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Convert Text to PDF</CardTitle>
          </CardHeader>
          <CardContent>
            <CreatePdfForm onConvert={handleConvert} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>PDF Preview</CardTitle>
          </CardHeader>
          <CardContent>
            {pdfUrl ? (
              <PdfViewer pdfUrl={pdfUrl} />
            ) : (
              <p className="text-center text-gray-500">No PDF to display</p>
            )}
          </CardContent>
        </Card>
      </div>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Conversion History</CardTitle>
        </CardHeader>
        <CardContent>
          <ConversionHistory history={history} onSelect={setPdfUrl} />
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
