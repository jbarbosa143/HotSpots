import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // const user = useSelector((state) => state.user);
  return (
    <AppBar position="static" sx={{ backgroundColor: "tan" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/home">Hot Spots</Link>
        </Typography>
        <Typography variant="p" sx={{ flexGrow: 0.5 }}>
          <Link to="/favorites">
            <Button color="inherit">Favorites</Button>
          </Link>
        </Typography>
        <Typography variant="p" sx={{ flexGrow: 0.5 }}>
          <Link to="/edit-profile">
            <Button color="inherit">Edit Profile</Button>
          </Link>
        </Typography>
        <Typography variant="p" sx={{ flexGrow: 0.5 }}>
          <Button color="inherit">Sign Out</Button>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

{
  /* {user ? (
          <Typography component="p" sx={{ flexGrow: 1 }}>
            Hi {user.name}!
          </Typography>
        ) : (
          <Link to="login">
            <Button color="inherit">Login</Button>
          </Link>
        )} */
}

export default Header;
