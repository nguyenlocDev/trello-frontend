import { Avatar, AvatarGroup, Box, Button, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import FilterListIcon from "@mui/icons-material/FilterList";
import BoltIcon from "@mui/icons-material/Bolt";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import PublicIcon from "@mui/icons-material/Public";
import DashboardIcon from "@mui/icons-material/Dashboard";
import avatar from "~/assets/avatar.jpg";

export default function BoardBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: "100%",
        height: (theme) => theme.trelloThemes.boardBar,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        gap: 2,
        color: "white",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          minWidth: "50%",
          display: "flex",
          alignItems: "center",
          gap: 2,
          color: "white",
          flexShrink: 0,
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <DashboardIcon></DashboardIcon>
          <Typography variant="span">Name Board</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <PublicIcon></PublicIcon>
          <Typography variant="span">Public and private board</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <AddToDriveIcon></AddToDriveIcon>
          <Typography variant="span">Add to drive</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <BoltIcon></BoltIcon>
          <Typography variant="span">Automation</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          sx={{ cursor: "pointer" }}
        >
          <FilterListIcon></FilterListIcon>
          <Typography variant="span">Filter</Typography>
        </Box>
      </Box>

      <Box marginLeft={"auto"} display={"flex"} alignItems={"center"} gap={2}>
        <Box>
          <Button
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
            startIcon={<PersonAddIcon />}
          >
            Invite
          </Button>
        </Box>
        <Box>
          <AvatarGroup total={24}>
            <Avatar alt="Remy Sharp" src={avatar} />
            <Avatar alt="Travis Howard" src={avatar} />
            <Avatar alt="Agnes Walker" src={avatar} />
            <Avatar alt="Trevor Henderson" src={avatar} />
          </AvatarGroup>
        </Box>
      </Box>
    </Box>
  );
}
