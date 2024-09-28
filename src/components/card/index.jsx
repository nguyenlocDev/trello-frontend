import { Hidden, Paper, Typography } from "@mui/material";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
function Card({ cards }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: cards._id, data: { ...cards } });

  const dndKitCards = {
    // touchAction: "none", co the fix but hen xui
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? "0.5" : "1",
  };
  return (
    <Paper
      ref={setNodeRef}
      style={dndKitCards}
      {...attributes}
      {...listeners}
      elevation={3}
      sx={{
        padding: 1,
        cursor: "pointer",
        border: 1,
        borderColor: "primary.main",
        overflow: "unset",
        opacity: cards.FE ? "0 !important" : 1,
        visibility: cards.FE ? "Hidden" : "visible",
      }}
    >
      <Typography variant="span" color="primaty.light">
        {cards?.title}
      </Typography>
    </Paper>
  );
}

export default Card;
