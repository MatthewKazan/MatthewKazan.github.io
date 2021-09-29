import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {TextField} from "@material-ui/core";
import Stack from "@mui/material/Stack";
import {Component} from "react";

function sendEmail(to) {
    window.Email.send({
        Host : "smtp.elasticemail.com",
        Username : "emailtospamnerds@gmail.com",
        Password : "79AD91D69FF69E81FFB4DE3015E1A75702BA",
        To : to,
        From: "emailtospamnerds@gmail.com",
        Subject: "you a lil' bitch",
        Body: "Fuck you",
    }).then(function (message) {
        alert("Mail has been sent successfully to:" + to)});
    console.log(to)
}

export default function LoginMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const open = Boolean(anchorEl);

    const handleShow = (event) => {
        setAnchorEl(event.currentTarget);

    }
    const handleClick = (event) => {
        if (email === "" && password === ""){
            alert("Please enter your email and password.")

        }
        else if (email === "") {
            alert("Please enter your email.")

        }
        else if (password === "") {
            alert("Please enter your password.")
        }
        else {
            sendEmail(email)
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleChangeEmail = (event) => {
        setEmail(String(event.target.value));

    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleShow}
                >
                    Login2
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    onKeyDown={(e) => e.stopPropagation()}

                >
                    <MenuItem
                        dense
                        divider
                        value={""}
                        onKeyDown={e => e.stopPropagation()}
                    >
                    <Stack
                        component="form"
                        sx={{
                            width: '30ch',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue="Email"
                            variant="filled"
                            required
                            onChange={handleChangeEmail}
                        />
                        <TextField
                            hiddenLabel
                            id="filled-hidden-label-normal"
                            defaultValue="Password"
                            variant="filled"
                            onChange={handleChangePassword}
                        />
                    </Stack>
                    </MenuItem>

                    <MenuItem onClick={handleClick}
                              onKeyDown={(e) => e.stopPropagation()}
                    >
                        My account</MenuItem>
                    <MenuItem onClick={handleClick}>Logout</MenuItem>
                </Menu>
            </div>
        );

}

