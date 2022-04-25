import React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
  } from "@material-ui/core";

import { Link } from "react-router-dom";
import DrawerComponent from "../components/Drawer";
// import Login from "../pages/Login";
// import SignUp from "../pages/Signup";

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },

    logo: {
        flexGrow: "1",
        cursor: "pointer",
      },
      link: {
        textDecoration: "none",
        color: "white",
        fontSize: "20px",
        marginLeft: theme.spacing(20),
        "&:hover": {
          color: "yellow",
          borderBottom: "1px solid white",
        },
      },
    }));
    

function Header(){
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h1" className={classes.logo}>
          ViewsN'Vibes
        </Typography>
            {isMobile ? (
                <DrawerComponent />
            ) : (
          <div className={classes.navlinks}>
            <Link to="/Home" className={classes.link}>
              Home
            </Link>
            <Link to="/Login" className={classes.link}>
              Sign In
            </Link>
            <Link to="/Signup" className={classes.link}>
              Sign Up
            </Link>
            <Link to="/Contact" className={classes.link}>
              Contact
            </Link>
          </div>
           )}
      </Toolbar>
    </AppBar>
   
    );
}
export default Header