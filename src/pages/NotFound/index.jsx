import React from 'react';
import './style.scss';
import {Typography} from '@material-ui/core';

export default function NotFound() {
    return (
        <div className="notFound">
            <Typography variant="h1">
                404
            </Typography>
            <Typography>
                Page not found
            </Typography>
        </div>
    )
}