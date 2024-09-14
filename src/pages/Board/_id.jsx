import { Container } from "@mui/material";
import BoardBar from "~/components/boardBar";
import BoardContent from "~/components/boardContent";
import BoardHeader from "~/components/boardHeader";
export default function Board() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: "100vh" }}>
      <BoardHeader></BoardHeader>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </Container>
  );
}
