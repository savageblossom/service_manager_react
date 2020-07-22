import React, {useState} from 'react';
import { TextField } from '@material-ui/core';

export const Form = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const validateInput = () => {
        console.log()
    }

    return (
        <form className="contact_us__form">
            <TextField
                label="First Name"
                variant="outlined"
            />
        </form>
    )

}