import { Game } from "@/hooks/useGames";
// import { Box, Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";
import PlateformIconList from "./PlateformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <Card className="w-full max-w-xs flex flex-col cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <img
          src={getCroppedImageUrl(game.background_image)}
          width={400}
          height={300}
          className="object-cover pointer-events-none"
          style={{ aspectRatio: "400/400", objectFit: "cover" }}
          alt={`${game.name} image`}
        />
      </div>
      <CardContent className="p-4 flex-1 flex flex-col">
        <CardTitle className="text-xl font-semibold tracking-wide">
          {game.name}
        </CardTitle>
        <div className="flex justify-between items-center py-2">
          <PlateformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </div>
      </CardContent>
      {/* <Card.Root cursor={"pointer"}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <PlateformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card.Root> */}
    </Card>
  );
}
