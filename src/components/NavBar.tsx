import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text as="h1" fontWeight="bold" fontSize="20px">
        Movie-Cave
      </Text>
    </HStack>
  );
};

export default NavBar;
