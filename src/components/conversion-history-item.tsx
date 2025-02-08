import { Button } from "@/components/ui/button";
import { ConversionItem } from "@/types/types";
import { downloadPdf } from "@/utils/file";
import { Download, Loader2, XIcon } from "lucide-react";
import { useTransition } from "react";

interface ConversionHistoryItemProps {
  item: ConversionItem;
  onSelect: (item: string) => void;
  onRemove: (id: string) => void;
}

export const ConversionHistoryItem = ({
  item,
  onSelect,
  onRemove,
}: ConversionHistoryItemProps) => {
  const [isPending, startTransition] = useTransition();

  const onDownload = async (pdfUrl: string, pdfName: string) => {
    startTransition(() => {
      downloadPdf(pdfUrl, pdfName);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        className="flex-1 justify-start overflow-hidden"
        onClick={() => onSelect(item.pdfUrl)}
      >
        <span className="truncate">{item.text}</span>
      </Button>
      <Button onClick={() => onDownload(item.pdfUrl, 'converted')} title="Download">
        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download />}
      </Button>
      <Button variant="destructive" onClick={() => onRemove(item.id)} title="Remove">
        <XIcon />
      </Button>
    </div>
  );
};
