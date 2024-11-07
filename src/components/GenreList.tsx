import useGenres, { Genre } from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  List,
  Text,
  ListItem,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

interface Props {
  onSelecteGenre(genre: Genre): void;
}

export default function GenreList({ onSelecteGenre }: Props) {
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
            <Link fontSize={"lg"} onClick={() => onSelecteGenre(genre)}>
              {genre.name}
            </Link>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
}
