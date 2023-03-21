import { IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import './errorPage.css'

const ErrorPage = () => {
    return (
        <div className="error__page">
            <div className="error__titles-container">
                <Typography variant="h2" className="error__title">
                    Oops
                </Typography>
                <Typography variant="h6">
                    The page you were looking for doesn't exist
                </Typography>
            </div>
            <Link to={'/'}>
                <IconButton>
                    <HomeIcon />
                </IconButton>
            </Link>
        </div>
    )
}

export default ErrorPage