import { Box } from "@mui/material";
import ListColumn from "./ListColumn";

export default function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) =>
          `calc(100% - ${theme.trelloThemes.boardBar} - ${theme.trelloThemes.boardHeader})`,
        display: "flex",
        padding: "20px",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      <ListColumn />
    </Box>
  );
}
