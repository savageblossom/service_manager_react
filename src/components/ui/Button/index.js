import React, { useEffect } from 'react';
import {Button as MUIButton, makeStyles}  from '@material-ui/core';



const Button = ({...props}) => {
    const {textcolor, background, width, innertext, margin} = props
    const useStyles = makeStyles({
        root: {
            color: textcolor,
            background: background,
            width: width,
            margin: margin || "0",
            fontFamily: "RalewayBold",
            fontSize: "15px",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "5px",
            height: "55px",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.2)",
            padding: 0,
            "&:hover": {
                background: textcolor,
                color: background
            }
        }
    });
    const classes = useStyles();

    return (
        <MUIButton className={classes.root} {...props}> {innertext} </MUIButton>
    )
        
}

export default Button;