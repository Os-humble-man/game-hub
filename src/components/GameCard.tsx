import { Game } from "@/hooks/useGames";
import { Box, Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import React from "react";
import PlateformIconList from "./PlateformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <Card.Root
      cursor={"pointer"}
      borderRadius={10}
      overflow={"hidden"}
      width={"300px"}
    >
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
    </Card.Root>
  );
}
