import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitcher from "./ColorModeSwitcher";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center" width="150px">
        <Image src={logo} boxSize="60px" />
        {/* {<Text whiteSpace="nowrap" as="h1" fontWeight="bold" fontSize="20px">
          Movie-Cave
        </Text>} */}
      </Box>
      <Box minWidth={100}>{<SearchInput onSearch={onSearch} />}</Box>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
