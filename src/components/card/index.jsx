import { Paper, Typography } from "@mui/material";

function Card() {
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
        succes
      </Typography>
    </Paper>
  );
}

export default Card;
