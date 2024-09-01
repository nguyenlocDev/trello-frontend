import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Box, useColorScheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
export default function SetModeThemes() {
  const { mode, setMode } = useColorScheme();
  const handleChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        width: "100%",
        height: (theme) => theme.trelloThemes.boardHeader,
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="dark-light-sys">{mode}</InputLabel>
        <Select
          labelId="dark-light-sys"
          id="select-small"
          value={mode}
          label={mode}
          onChange={handleChange}
        >
          <MenuItem value={"light"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <LightModeIcon fontSize="small"></LightModeIcon>
              Light
            </Box>
          </MenuItem>
          <MenuItem value={"dark"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <DarkModeIcon fontSize="small"></DarkModeIcon>
              Dark
            </Box>
          </MenuItem>
          <MenuItem value={"system"}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <SettingsBrightnessIcon fontSize="small"></SettingsBrightnessIcon>
              System
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
