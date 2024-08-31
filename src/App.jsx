import Button from "@mui/material/Button";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import { Typography } from "@mui/material";
import SetModeThemes from "./components/themeMode";
function App() {
  return (
    <>
      <SetModeThemes></SetModeThemes>
      <AccessAlarmIcon></AccessAlarmIcon>
      <ThreeDRotation></ThreeDRotation>
      <svg data-testid="DeleteIcon"></svg>
      <Button variant="text" color="success">
        Text
      </Button>
      <Button variant="contained" color="success">
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
      <Typography variant="body2" component="h2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi
        deserunt aperiam est alias fugiat culpa cumque quis assumenda vero, cum
        rerum fugit neque nostrum unde error impedit quisquam nemo.
      </Typography>
    </>
  );
}

export default App;
