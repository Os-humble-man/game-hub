import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { Button } from "./ui/button";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import { useState } from "react";

interface Props {
  onSelecteGenre(genre: Genre): void;
  selectedGenre: Genre | null;
}

export default function GenreList({ selectedGenre, onSelecteGenre }: Props) {
  const { data, isLoading, error } = useGenres();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  if (error) return null;
  return (
    <div className="hidden md:hidden lg:block w-64 flex-shrink-0 overflow-y-auto transition-all duration-300 ease-in-out">
      <div className="">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mb-4 ml-auto"
          onClick={toggleSidebar}
          aria-label="Close sidebar"
        >
          <X className="h-6 w-6" />
        </Button>
        <nav>
          <h1 className="text-3xl font-bold py-2">Genres</h1>
          <ul className="space-y-2">
            {data.map((item) => (
              <li
                key={item.id}
                className={`flex items-center p-2 rounded-lg cursor-pointer ${
                  item.id === selectedGenre?.id ? "font-bold" : ""
                } hover:underline  transition-colors duration-200`}
                onClick={() => onSelecteGenre(item)}
              >
                <img
                  src={getCroppedImageUrl(item.image_background)}
                  className="mr-2 h-8 w-8 rounded-md object-cover"
                />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
