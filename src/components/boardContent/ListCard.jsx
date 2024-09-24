import { Stack } from "@mui/material";
import Card from "../card";
import { mapOrder } from "~/utils/sort";

function ListCard({ cards, columns }) {
  const oderedCards = mapOrder(cards, columns?.cardOrderIds, "_id");

  return (
    <Stack
      direction="column"
      spacing={1}
      sx={{
        overflowY: "auto",
      }}
    >
      {oderedCards.map((items) => (
        <Card key={items._id} cards={items}></Card>
      ))}
    </Stack>
  );
}

export default ListCard;
