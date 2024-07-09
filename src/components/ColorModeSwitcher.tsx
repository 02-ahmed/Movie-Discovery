import { Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      colorScheme="green"
      isChecked={colorMode === "dark"}
      onChange={toggleColorMode}
    >
      Dark Mode
    </Switch>
  );
};

export default ColorModeSwitcher;
