import {useState} from "react";
import {Drawer} from "@material-ui/core";
import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


export default function LoginDrawer() {
    const [loggedin, setIsOpen] = React.useState(false);
    const login = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(open);
        console.log(loggedin)
    };

    return (
        <div>
            <React.Fragment key={"right"}>
                <Button onClick={() => setIsOpen(true)}>{"Login"}</Button>
                <Drawer
                    anchor={"right"}
                    open={loggedin}
                    onClose={() => setIsOpen(false)}
                >
                    <Stack
                        component="form"
                        sx={{
                            width: '25ch',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-small"
                            defaultValue="Small"
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue="Normal"
                            variant="filled"
                        />
                    </Stack>
                </Drawer>
            </React.Fragment>
        </div>
    )
}

