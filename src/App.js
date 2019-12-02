import React from "react";
import { theme, ThemeProvider, ColorModeProvider } from "@chakra-ui/core";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure
} from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac"
    }
  }
};

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <ThemeProvider them={theme}>
      <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
        Open
      </Button>
      <ColorModeProvider>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Open</DrawerHeader>
            <DrawerBody>
              <input placeholder="Type" />
            </DrawerBody>
            <DrawerFooter>
              <Button mr={3} colors="blue" onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ColorModeProvider>
    </ThemeProvider>
  );
};

export default App;
