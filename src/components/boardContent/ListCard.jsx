import { Stack } from "@mui/material";
import Card from "../card";
import { mapOrder } from "~/utils/sort";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function ListCard({ cards, columns }) {
  const oderedCards = mapOrder(cards, columns?.cardOrderIds, "_id");

  return (
    <SortableContext
      items={oderedCards?.map((i) => i._id)}
      strategy={verticalListSortingStrategy}
    >
      <Stack
        direction="column"
        spacing={1}
        sx={{
          overflowY: "scroll",
        }}
      >
        {oderedCards.map((items) => (
          <Card key={items._id} cards={items}></Card>
        ))}
      </Stack>
    </SortableContext>
  );
}

export default ListCard;
