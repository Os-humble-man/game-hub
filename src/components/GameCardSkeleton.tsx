import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";

function GameCardSkeleton() {
  return (
    <Card.Root width={"300px"} overflow={"hidden"} borderRadius={10}>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
