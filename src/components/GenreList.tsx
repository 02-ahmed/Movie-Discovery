import { Button, List, ListItem, Skeleton } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  if (isLoading)
    return genreSkeleton.map((skeleton) => (
      <Button key={skeleton} marginY="5px" paddingX="10px" width="120px">
        <Skeleton />
      </Button>
    ));
  return (
    <List marginTop={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Button
            colorScheme={genre.id === selectedGenre?.id ? "green" : "blue"}
            onClick={() => onSelectGenre(genre)}
            marginY="5px"
            paddingX="10px"
            width="120px"
          >
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
