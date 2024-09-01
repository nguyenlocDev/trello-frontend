import { Box } from "@mui/material";
import React from "react";

export default function BoardContent() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) =>
          `calc(100% - ${theme.trelloThemes.boardBar} - ${theme.trelloThemes.boardHeader})`,
        display: "flex",
        alignItems: "center",
      }}
    >
      content
    </Box>
  );
}
