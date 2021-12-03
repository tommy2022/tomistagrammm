import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
  // gray: {
  //   50: "#F5F5F5",
  // },
};

// #FFFAFA

const theme = extendTheme({ config });
export default theme;
