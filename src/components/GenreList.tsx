import { Button, List, ListItem } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List marginTop={2}>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Button marginY="5px" paddingX="10px" width="120px">
            {genre.name}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
