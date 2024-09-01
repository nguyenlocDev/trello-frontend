import { experimental_extendTheme as extendTheme } from "@mui/material/styles"; // Create a theme instance.
const theme = extendTheme({
  trelloThemes: {
    boardBar: "58px",
    boardHeader: "48px",
  },

  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: "#ff5252",
        // },
      },
    },
    dark: {
      palette: {
        // primary: {
        //   main: "#000",
        // },
      },
    },
  },
  // ...other properties
});
export default theme;
