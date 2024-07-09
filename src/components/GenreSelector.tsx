import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";

const GenreSelector = () => {
  const { genres, error } = useGenres();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Genres
      </MenuButton>
      <MenuList>
        {genres.map((genre) => (
          <MenuItem key={genre.id}>{genre.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
