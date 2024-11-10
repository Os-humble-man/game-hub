import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import usePlateforms, { Platform } from "@/hooks/usePlateforms";

interface Props {
  onSelectedPlatform(plateform: Platform): void;
}

export default function PlatformSelector({ onSelectedPlatform }: Props) {
  const { data, error } = usePlateforms();

  if (error) return null;

  const handleValueChange = (value: string) => {
    const selectedPlatform = data.find((item) => item.id.toString() === value);
    if (selectedPlatform) {
      onSelectedPlatform(selectedPlatform);
    }
  };

  return (
    <Select onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a platform" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
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
