import Column from "../column";
import { Box, Button } from "@mui/material";
import ListCard from "./ListCard";
import AddCardIcon from "@mui/icons-material/AddCard";
import { mapOrder } from "~/utils/sort";

function ListColumn({ board }) {
  const oderedColumn = mapOrder(board?.columns, board?.columnOrderIds, "_id");
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
        alignItems: "inherit",
        overflowY: "hidden",
        width: "100%",
      }}
    >
      {oderedColumn.map((items) => (
        <Column key={items._id} columns={items}>
          <ListCard cards={items?.cards} columns={items} />
        </Column>
      ))}

      <CreateNewColumn></CreateNewColumn>
    </Box>
  );
}

//birthday it's lonly

export default ListColumn;

function CreateNewColumn() {
  return (
    <Box
      sx={{
        minWidth: "272px",
      }}
    >
      <Button
        sx={{
          backgroundColor: "primary.main",

          width: "100%",
          display: "flex",
          justifyContent: "flex-start",
          color: "primary.light",

          "&:hover": {
            backgroundColor: "#ffffff3d",
            opacity: 1.2,
          },
          "&:active": {
            backgroundColor: "transparent",
            opacity: 1.2,
          },
        }}
        startIcon={<AddCardIcon />}
      >
        Add new column
      </Button>
    </Box>
  );
}
