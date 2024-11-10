import { Game } from "@/hooks/useGames";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import PlateformIconList from "./PlateformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  return (
    <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex flex-col cursor-pointer shadow-md rounded-lg">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={getCroppedImageUrl(game.background_image)}
          className="object-cover pointer-events-none w-full"
          alt={`${game.name} image`}
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center py-2">
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
        <CardTitle className="text-lg md:text-xl font-semibold tracking-wide">
          {game.name}
        </CardTitle>
      </CardContent>
    </Card>
  );
}
