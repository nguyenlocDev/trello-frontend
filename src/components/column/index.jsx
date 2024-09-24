import FeedIcon from "@mui/icons-material/Feed";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Paper, Typography, IconButton } from "@mui/material";
import MenuEditColunm from "./menu";

function Column({ children, columns }) {
  return (
    <Box
      sx={{
        display: " flex",
        height: "100%",
        alignItems: "baseline",
        paddingBottom: 2,
      }}
    >
      <Paper
        sx={{
          padding: 1,
          minWidth: "272px",
          borderRadius: 3,
          maxHeight: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 0.5,

          overflow: "hidden",
        }}
        elevation={12}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="span"
            color="primary.light"
            fontSize={16}
            fontWeight={500}
          >
            {columns?.title}
          </Typography>
          <Box>
            <MenuEditColunm></MenuEditColunm>
          </Box>
        </Box>
        {children}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Button
            sx={{
              color: "primary.light",
              flex: "1",
              display: "flex",
              justifyContent: "start",
            }}
            startIcon={<AddIcon />}
            variant="text"
          >
            Add card
          </Button>
          <IconButton sx={{ borderRadius: 2 }}>
            <FeedIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  );
}

export default Column;
