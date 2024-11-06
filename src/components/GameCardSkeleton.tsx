import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonText } from "./ui/skeleton";

function GameCardSkeleton() {
  return (
    <Card.Root>
      <Skeleton height={"200px"} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}

export default GameCardSkeleton;
