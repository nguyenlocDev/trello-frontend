import {
  Badge,
  Box,
  Button,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import SetModeThemes from "../themeMode";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import { ReactComponent as DogsNote } from "~/assets/dogsNote.svg";
import SvgIcon from "@mui/material/SvgIcon";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { listMenu } from "./menu/list";
import Temp from "./menu";
import ProfileSetting from "../profileSetting";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
export default function BoardHeader() {
  return (
    <Box
      sx={{
        width: "100%",
        height: (theme) => theme.trelloThemes.boardHeader,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflowX: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <AppRegistrationIcon
          sx={{ color: "primary.light" }}
          fontSize="large"
        ></AppRegistrationIcon>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SvgIcon
              component={DogsNote}
              inheritViewBox
              fontSize="large"
              sx={{ color: "primary.light" }}
            ></SvgIcon>
            <Typography
              variant="span"
              color="primary.light"
              fontWeight={500}
              fontSize="1.2rem"
            >
              DogsNote
            </Typography>
          </Box>
          <Box display={"flex"} gap={1}>
            {listMenu.map((items) => {
              const Com = items.Component;
              return (
                <Temp key={items.id} title={items.title} id={items.id}>
                  {<Com />}
                </Temp>
              );
            })}
          </Box>
          <Box>
            <Button
              sx={{
                color: "primary.light",
              }}
              variant="outlined"
              startIcon={<CreateNewFolderIcon />}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={2}
        sx={{ marginRight: "8px" }}
      >
        <Box minWidth={"150px"}>
          <TextField label="Search..." variant="outlined" size="small" />
        </Box>
        <SetModeThemes />
        <Tooltip title="Notification">
          <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>
        <Tooltip title="Helps">
          <HelpOutlineIcon sx={{ cursor: "pointer" }}></HelpOutlineIcon>
        </Tooltip>
        <ProfileSetting />
      </Box>
    </Box>
  );
}
