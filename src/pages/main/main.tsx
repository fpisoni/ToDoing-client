import { Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import './main.css';

const Main = () => {

    return (
        <div className="app">
            <Typography className='app__title' variant='subtitle2' fontSize='large' fontFamily=''>
            ToDoing!
            </Typography>
            <Outlet />
        </div>
    )
}

export default Main;