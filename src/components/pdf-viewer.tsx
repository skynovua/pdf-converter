import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

interface PdfViewerProps {
  pdfUrl: string;
}

export const PdfViewer = ({ pdfUrl }: PdfViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [open, setOpen] = useState(false);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const changePage = (offset: number) => {
    setPageNumber((prevPageNumber) =>
      Math.min(Math.max(prevPageNumber + offset, 1), numPages || 1)
    );
  };

  return (
    <div className="flex flex-col items-center" data-testid="pdf-viewer">
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        className="max-h-[500px] overflow-auto border rounded-lg shadow-lg cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <Page pageNumber={pageNumber} width={200} />
      </Document>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>PDF Viewer</DialogTitle>
          </DialogHeader>
          <div className="flex justify-center p-4">
            <Document
              file={pdfUrl}
              onLoadSuccess={onDocumentLoadSuccess}
              className="border shadow-lg"
            >
              <Page pageNumber={pageNumber}  />
            </Document>
          </div>
          <DialogFooter>
            <div className="flex items-center justify-between w-full mt-4">
              <div className="space-x-2">
                <Button
                  onClick={() => changePage(-1)}
                  disabled={pageNumber <= 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  onClick={() => changePage(1)}
                  disabled={pageNumber >= (numPages || 1)}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm">
                Page {pageNumber} of {numPages}
              </p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
