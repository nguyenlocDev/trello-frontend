import { Container } from "@mui/material";
import { mockData } from "~/api/mockdata";
import BoardBar from "~/components/boardBar";
import BoardContent from "~/components/boardContent";
import BoardHeader from "~/components/boardHeader";

export default function Board() {
  return (
    <Container disableGutters maxWidth="false" sx={{ height: "100vh" }}>
      <BoardHeader></BoardHeader>
      <BoardBar board={mockData?.board}></BoardBar>
      <BoardContent board={mockData?.board}></BoardContent>
    </Container>
  );
}
