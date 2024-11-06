import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import { HStack, List, Text, ListItem, Image } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

export default function GenreList() {
  const { data, isLoading, error } = useGenres();
  const skeleton = [0, 1, 2, 3, 4];
  if (error) return null;
  return (
    <List.Root listStyleType="none">
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          {isLoading &&
            skeleton.map((skeleton) => (
              <SkeletonText key={skeleton} paddingY={2} />
            ))}
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}
