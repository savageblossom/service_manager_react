import React, {useState, useContext} from 'react';
import Button from '../../ui/Button';   
import { FormControl, 
         makeStyles,
         withStyles,
         TextField,
         FormControlLabel,
         Checkbox,
         Snackbar} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import {UIStoreContext} from '../../../index';
import {observer} from 'mobx-react'


export const Form = observer(props => {
    const {isMobileView, setInputProperty, input} = useContext(UIStoreContext);
    const {firstName, lastName, email, phone, message} = input;
    const [alertOpened, setAlertOpened] = useState(false);

;
    const useStyles = makeStyles((theme) => ({
        root : {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "25px",
            color: "#061e37",
            fontSize: "14px",
            maxWidth: "600px",
            "& Button": {
                margin: "30px 0"
            },
            "& .MuiTextField-root": {
                width: isMobileView ? "100%" : 280,
                marginBottom: 15,
                "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "3px solid #1de9b6",
                }
            }
        },
        textarea: {
            height: 150,
            width: "100% !important",
        },
        checkbox: {
            "& span":{
                fontFamily: "RalewayMedium",
                fontSize: 15,
            }
        }
    }));


    const validateInputs = () => {
        let errorCount = 0
        Object.keys(input).forEach(e => {
            if(e == 'email') {
                const regex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                if(!regex.test(input[e].value)) {
                    input[e].error = true;
                    errorCount++;
                }
                else { input[e].error = false; }
            }
            else if(Boolean(input[e].value)) { 
                input[e].error = false;
            }
            
            else {
                input[e].error = true; 
                errorCount++;
            }
        })
        console.log(errorCount)
        return !errorCount ? true : false
    }
    const submitForm = () => {
        if(validateInputs()) {
            setAlertOpened(true);
            Object.keys(input).forEach(e => {
                input[e].value = '';
            })
        }
    }


    const classes = useStyles();
    return (
        <>
            <Snackbar 
              open={alertOpened} 
              autoHideDuration={4000}
              onClose={e => setAlertOpened(false)}
            >
                <Alert variant='filled' severity="success">
                    Form has been submitted!
                </Alert>
            </Snackbar>
            <form className={classes.root}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        value={firstName.value} 
                        error={firstName.error}
                        onChange={e => setInputProperty('firstName', e.target.value)}
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        value={lastName.value} 
                        error={lastName.error}
                        onChange={e => setInputProperty('lastName', e.target.value)}
                    />
                    <TextField
                        label="E-mail"
                        variant="outlined"
                        value={email.value} 
                        error={email.error}
                        onChange={e => setInputProperty('email', e.target.value)}
                    />
                    <TextField
                        label="Phone"
                        variant="outlined"
                        value={phone.value} 
                        error={phone.error}
                        onChange={e => setInputProperty('phone', e.target.value)}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        rows="6"
                        multiline
                        className={classes.textarea}
                        value={message.value} 
                        error={message.error}
                        onChange={e => setInputProperty('message', e.target.value)}
                    />
                    <FormControlLabel
                        control={<Checkbox name="subscribe" />}
                        label="subscribe to the newsletter"
                        className={classes.checkbox}
                    />
                    <Button 
                        innertext={"Send"}
                        textcolor={'#fff'} 
                        background={"#1de9b6"} 
                        width={"130px"} 
                        margin={"0 30px 0 0"}
                        onClick={submitForm}
                    />
                
            </form>
        </>
    )

})