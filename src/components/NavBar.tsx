import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitcher from "./ColorModeSwitcher";

const NavBar = () => {
  return (
    <HStack display="flex" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Image src={logo} boxSize="60px" />
        <Text as="h1" fontWeight="bold" fontSize="20px">
          Movie-Cave
        </Text>
      </Box>
      <ColorModeSwitcher />
    </HStack>
  );
};

export default NavBar;
