import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export default function SortSelector({ onSelectSortOrder, sortOrder }: Props) {
  const sortOrders = [
    { value: "relevance", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Select onValueChange={(value) => onSelectSortOrder(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={`Order by: ${currentSortOrder?.label || "Relevance"}`}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>
            Order by : {currentSortOrder?.label || "Relevance"}
          </SelectLabel>

          {sortOrders.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
