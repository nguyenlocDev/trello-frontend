import { Paper, Typography } from "@mui/material";

function Card({ cards }) {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 1,
        cursor: "pointer",
        border: 1,
        borderColor: "primary.main",
      }}
    >
      <Typography variant="span" color="primaty.light">
        {cards?.title}
      </Typography>
    </Paper>
  );
}

export default Card;
