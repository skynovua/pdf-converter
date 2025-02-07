import { ConversionItem } from "@/types/item";
import { Button } from "@/components/ui/button";

interface ConversionHistoryProps {
  history: ConversionItem[];
  onSelect: (pdfUrl: string) => void;
}

export function ConversionHistory({
  history,
  onSelect,
}: ConversionHistoryProps) {
  return (
    <div className="space-y-2">
      {history.map((item) => (
        <Button
          key={item.id}
          variant="outline"
          className="w-full justify-start overflow-hidden"
          onClick={() => onSelect(item.pdfUrl)}
        >
          <span className="truncate">{item.text}</span>
        </Button>
      ))}
    </div>
  );
}
