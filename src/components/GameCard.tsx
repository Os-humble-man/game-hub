import { Game } from "@/hooks/useGames";
import { Box, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}
export default function GameCard({ game }: Props) {
  return (
    <Card.Root cursor={"pointer"} borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card.Root>
  );
}
