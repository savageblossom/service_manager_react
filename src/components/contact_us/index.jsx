import React, { useEffect } from 'react';
import { FormControl, CssBaseline } from '@material-ui/core';

import {Form} from './Form';

const ContactUs = () => {
    return (
        <>
        <CssBaseline />
        <section className="contact_us">
            <div className="container">
                <h1 className="contact_us__heading">Contact Us</h1>
                <p className="contact_us__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <Form />
            </div>
        </section>
        </>
    )
}

export default ContactUs;