import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import TypoGraphy from '@material-ui/core/Typography'
import { Home, Book, AccountBox } from '@material-ui/icons'
import {Box, Drawer, Toolbar, Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import React, {Component, useState} from 'react';
import LoginDrawer from "./login";
import LoginMenu from "./LoginMenu";





class NavBar extends React.Component{
    constructor(props) {
        super(props);
    }






    render() {

        return (
            <AppBar color="primary" position="static">
                <Toolbar>
                    <Typography
                        variant="title"
                        color={"inherit"}
                    >
                        My header
                    </Typography>
                    <List component="nav">
                        <ListItem component="div">
                            <ListItemButton component={"a"} onClick={() => this.props.onClick("home")}>
                                <ListItemText inset>
                                    <TypoGraphy color="inherit" variant="title">
                                        Home <Home />
                                    </TypoGraphy>
                                </ListItemText>
                            </ListItemButton>



                            <ListItemButton component={"a"} onClick={() => this.props.onClick("posts")}>
                                <ListItemText inset>
                                    <TypoGraphy color="inherit" variant="title">
                                        Posts <Book />
                                    </TypoGraphy>
                                </ListItemText>
                            </ListItemButton>

                            <Box display="flex" justifyContent="space-between" mx={70}>
                            </Box>
                            <LoginDrawer></LoginDrawer>
                            <LoginMenu></LoginMenu>
                        </ListItem >

                    </List>

                </Toolbar>
            </AppBar>

        )
    }


}


export default NavBar;