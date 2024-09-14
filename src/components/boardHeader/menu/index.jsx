import { Box, Button, Menu } from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Temp(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id={`basic-button-${props.id}`}
        sx={{
          color: "primary.light",
        }}
        aria-controls={open ? `basic-menu-${props.id}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
      >
        {props.title}
      </Button>

      <Menu
        sx={{
          color: "primary.light",
        }}
        id={`basic-menu-${props.id}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": `basic-button-${props.id}`,
        }}
      >
        {props.children}
      </Menu>
    </Box>
  );
}
export default Temp;
