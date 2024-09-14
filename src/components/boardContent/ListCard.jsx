import { Stack } from "@mui/material";
import Card from "../card";

function ListCard() {
  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        overflowY: "auto",
      }}
    >
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Stack>
  );
}

export default ListCard;
