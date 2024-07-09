import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreSelector = ({ onSelectGenre, selectedGenre }: Props) => {
  const { genres, error } = useGenres();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedGenre?.name || "Genre"}
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem onClick={() => onSelectGenre(genre)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
