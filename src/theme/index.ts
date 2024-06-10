import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root": {
        high: "100%",
        backgroundColor: "#000000",
      },
    },
  },
});
