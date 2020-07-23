import React, {useState, useContext} from 'react';
import Button from '../../ui/Button';   
import { OutlinedInput, 
         FormControl, 
         InputLabel, 
         makeStyles,
         withStyles,
         TextField} from '@material-ui/core';
import { CheckBoxOutlineBlankIcon, CheckBoxIcon  } from '@material-ui/icons';
import {UIStoreContext} from '../../../index';
import { useEffect } from 'react';
import {observer} from 'mobx-react'


export const Form = observer(props => {
    const {isMobileView, firstName, setFirstName} = useContext(UIStoreContext);

    const CssFormControl = withStyles({
        root: {
            width: isMobileView ? "100%" : "280px",
            '& label.Mui-focused': {
            color: '#1de9b6',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
            },
            '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '& fieldset': {
                borderColor: '#000',
                },
                '&.Mui-focused fieldset': {
                borderColor: '#1de9b6',
                },
            },
        },
      })(FormControl);

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
            
            "& label": {
                fontSize: 14,
                color: "#000",
                transform: "translate(15px, 18px) scale(1)",
                fontFamily: "RalewayMedium",
            },
            "& Button": {
                margin: "30px 0"
            }
        },
        input: {
            width: isMobileView ? "100%" : "280px",
            height: "50px",
            alignItems: "center",
            marginBottom: "20px",
            fontFamily: "RalewayMedium",
            
        },
        textarea: {
            height: 150,
            width: "100%",
        },
        checkbox: {
            "& span":{
                fontFamily: "RalewayMedium",
                fontSize: 15,
                
            }
            
        }
        
    }));

    useEffect(() => {

    }, [])
    // const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const classes = useStyles();

    const validateInput = () => {
        
    }
    const submitForm = () => {

    }

    return (

        <>
            <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            <TextField
                required
                id="filled-required"
                label="Required"
                variant="filled"
                value={firstName} 
                onChange={e => setFirstName(e.target.value)}
            />
            <TextField
                required
                id="filled-required"
                label="Required"
                variant="filled"
                value={firstName} 
                onChange={e => setFirstName(e.target.value)}
            />
        </>

        // <form className={classes.root}>
            // <CssFormControl variant="outlined">
            //     <InputLabel htmlFor="first_name">First Name</InputLabel>
            //     <OutlinedInput 
            //       id="first_name"
            //       label="First Name"
            //       className={classes.input}
            //       value={firstName}
            //       onChange={e => setFirstName(e.target.value)}
            //     />
        //     </CssFormControl>
        //     <CssFormControl variant="outlined">
        //         <InputLabel htmlFor="last_name">Last Name</InputLabel>
        //         <OutlinedInput 
        //           id="last_name" 
        //           label="Last Name" 
        //           className={classes.input}
        //           value={lastName}
        //           onChange={e => setLastName(e.target.value)}
        //         />
        //     </CssFormControl>
        //     <CssFormControl variant="outlined">
        //         <InputLabel htmlFor="email">Email</InputLabel>
        //         <OutlinedInput 
        //           id="email" 
        //           label="Email" 
        //           className={classes.input}
        //           value={email}
        //           onChange={e => setEmail(e.target.value)}
        //         />
        //     </CssFormControl>
        //     <CssFormControl variant="outlined">
        //         <InputLabel htmlFor="phone">Phone</InputLabel>
        //         <OutlinedInput 
        //           id="phone" 
        //           label="Phone" 
        //           className={classes.input}
        //           value={phone}
        //           onChange={e => setPhone(e.target.value)}
        //         />
        //     </CssFormControl>
        //     <CssFormControl className={classes.textarea} variant="outlined">
        //         <InputLabel htmlFor="phone">Message</InputLabel>
        //         <OutlinedInput 
        //           id="phone" 
        //           label="Phone" 
        //           rows="6"
        //           multiline
        //         />
        //     </CssFormControl>
        //     <FormControlLabel
        //         control={<Checkbox name="subscribe" />}
        //         label="subscribe to the newsletter"
        //         className={classes.checkbox}
        //     />
        //     <Button 
        //         innertext={"Send"}
        //         textcolor={'#fff'} 
        //         background={"#1de9b6"} 
        //         width={"130px"} 
        //         margin={"0 30px 0 0"}
        //         onClick={submitForm()}
        //     />
        // </form>
    )

})