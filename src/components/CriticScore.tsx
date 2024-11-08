// import { Badge } from "@chakra-ui/react";
import { Badge } from "@/components/ui/badge";

interface Props {
  score: number;
}

export const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return <Badge color={color}>{score}</Badge>;
};
