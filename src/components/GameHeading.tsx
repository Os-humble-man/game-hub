import { GameQuery } from "@/pages/Home";

interface Props {
  gameQuery: GameQuery;
}

export default function GameHeading({ gameQuery }: Props) {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return <h1 className="text-3xl font-bold ">{heading}</h1>;
}
