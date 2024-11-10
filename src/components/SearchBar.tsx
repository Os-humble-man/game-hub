import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRef } from "react";

interface Props {
  onSearchGame: (searchText: string) => void;
}

export default function SearchBar({ onSearchGame }: Props) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ref.current && onSearchGame(ref.current.value);
      }}
      className="flex items-center w-full max-w-7xl space-x-2 rounded-full border border-gray-300 bg-gray-50 dark:bg-gray-950 px-3.5 py-2"
    >
      <Search className="h-4 w-4" />
      <Input
        type="search"
        placeholder="Search games"
        className="w-full border-0 h-8 font-semibold outline-none"
        ref={ref}
      />
    </form>
  );
}
