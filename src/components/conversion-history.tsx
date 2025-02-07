import { ConversionItem } from "@/types/types";
import { ConversionHistoryItem } from "@/components/conversion-history-item";

interface ConversionHistoryProps {
  history: ConversionItem[];
  onSelect: (pdfUrl: string) => void;
  onRemove: (id: string) => void;
}

export const ConversionHistory = ({
  history,
  ...props
}: ConversionHistoryProps) => {

  if (!history.length) {
    return <p className="text-center text-gray-500">No history to display</p>;
  }

  return (
    <div className="space-y-2">
      {history.map((item) => (
        <ConversionHistoryItem key={item.id} item={item} {...props} />
      ))}
    </div>
  );
};
