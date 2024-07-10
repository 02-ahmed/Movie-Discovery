import { HStack, Link, Text } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack justifyContent="center" marginTop={5} fontSize="15px">
      <Text>Built by Ahmed</Text>
      <Link href="https://github.com/02-ahmed">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/ahmed-boabae-334a11256/">
        <FaLinkedin />
      </Link>
      <Link href="https://x.com/_02ahmed">
        <FaTwitter />
      </Link>
    </HStack>
  );
};

export default Footer;
