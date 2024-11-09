import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="h-full px-8 space-x-3 flex flex-1 overflow-hidden">
        <GenreList selectedGenre={null} onSelecteGenre={() => {}} />
        <GameGrid selectedGenre={null} />
      </div>
    </div>
  );
}
