import React from "react";
import { Box, Container, Typography } from "@mui/material";
import SetModeThemes from "~/components/themeMode";
import BoardBar from "~/components/boardBar";
import BoardContent from "~/components/boardContent";
export default function Board() {
  return (
    <Container
      disableGutters
      maxWidth="false"
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <SetModeThemes></SetModeThemes>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </Container>
  );
}
