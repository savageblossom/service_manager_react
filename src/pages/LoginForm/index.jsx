import React, { useState, useContext } from 'react';
import './login_form.scss';
import {TextField, makeStyles} from '@material-ui/core';
import {Button} from '@material-ui/core';
import {Typography, Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import {AuthStoreContext} from '../../index';

const useStyles = makeStyles({
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        "& > *": {
            marginTop: 20
        }
    }
})

const LoginForm = ({ history }) => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [alertOpened, setAlertOpened] = useState(false)
    const store = useContext(AuthStoreContext);
    const classes = useStyles();

    const validate = () => login && login === 'admin' && password && password === '666'

    const logging = e => {
        e.preventDefault();
        console.log(password)
        if(validate()) {
            store.performAuth()
            history.push("/home")
        }
        else {
            setAlertOpened(true)
        }
    }

    return (
        <div className="loginForm">
            <div className="container">
                    <Snackbar 
                      open={alertOpened} 
                      autoHideDuration={6000} 
                      onClose={e => setAlertOpened(false)}
                    >
                        <Alert variant='filled' severity="error">
                            Wrong credentials!
                        </Alert>
                    </Snackbar>
                <form id="formToLogin" className="loginForm__form" 
                        onSubmit={e => logging(e)}>
                    <Typography variant="h1">
                        Welcome!
                    </Typography>
                    <Typography>
                        Please log in to continue
                    </Typography>
                    <div 
                      className={classes.inputContainer}
                    >
                        <TextField
                          label="Username"
                          value={login}
                          onChange={e => setLogin(e.target.value)}
                          variant="outlined"
                        />
                        <TextField
                          label="Password"
                          value={password}
                          onChange={e => setPassword(e.target.value)}
                          variant="outlined"
                        />
                        <Button 
                          variant="outlined"
                          type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default LoginForm;