import { blueGrey } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles"; // Create a theme instance.
const theme = extendTheme({
  trelloThemes: {
    boardBar: "65px",
    boardHeader: "60px",
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: blueGrey[50],
          light: blueGrey[900],
          dark: blueGrey[600],
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: blueGrey[900],
          light: blueGrey[50],
        },
      },
    },
  },
  // ...other properties

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "4px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#999",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#999",
            borderRadius: "8px",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.light,
            fontSize: "0.875rem",
            "&.Mui-focused": {
              color: theme.palette.primary.light,
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.light,
              },
            },
          };
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.light,
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },

            "&.Mui-focused": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.light,
              },
            },
            "&.Mui-focused fieldset": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: `${theme.palette.primary.light} !important`,
              },
            },
          };
        },
      },
    },
  },
});
export default theme;
