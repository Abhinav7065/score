import React, { useEffect, useState } from 'react';
import {AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, makeStyles} from '@material-ui/core';
import { 
    BrowserRouter as Router,
     Switch,
    Route,
    Link } from "react-router-dom";
import Home from '../container/home';
import About from '../pages/about';
import Profile from '../pages/profile';
import Customer from '../screens/Customer';
import {AccountCircle} from '@material-ui/icons';

const NavBar = (props) => {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        localStorage.removeItem('user');
        props.setUserState();
        setAnchorEl(null);
    }

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    return (
        <>
        <Router>
            
        <div className={classes.root}>
         
     
             
             
            <AppBar position="static" className={classes.menubackgroud}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Sathyabama Institute of Science and Technology
                    </Typography>
                    {auth && (
                    <div>
                        <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                        <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={open}
                        onClose={handleClose}
                        >
                       
                        <MenuItem>Profile</MenuItem>
                        
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    )}
                </Toolbar>
            </AppBar>
            <Switch>
            <Route exact path="/">
                <Home/>
                </Route>
        <Route path="/" >
            <About />
            </Route>
        <Route path="/profile">
            <Profile/>
        </Route>
        
        <Route path= "/Customer">
            <Customer/>
            </Route>
        
            </Switch>
        </div>
        </Router>
        </>
    );
}
    
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menubackgroud: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }, 
    title: {
        flexGrow: 1
    }
}));

export default NavBar;