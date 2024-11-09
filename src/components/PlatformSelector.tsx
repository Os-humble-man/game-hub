import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlateforms from "@/hooks/usePlateforms";
// import usePlateforms from "./service/usePlateforms";

export default function PlatformSelector() {
  const { data, error } = usePlateforms();

  if (error) return null;
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a plateform" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Plateforms</SelectLabel>
          {data.map((item) => (
            <SelectItem value={item.id.toString()} key={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
