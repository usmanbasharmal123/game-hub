import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImagerUrl from "../services/image-url";
interface Props {
  onSelcetGener: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelcetGener, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImagerUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelcetGener(genre)}
                fontSize="lg"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
