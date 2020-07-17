import React, { useEffect } from 'react';
import { FormControl, CssBaseline } from '@material-ui/core';

const ContactUs = () => {
    return (
        <>
        <CssBaseline />
        <section className="contact_us">
            <div className="container">
                <h1 className="contact_us__heading">Contact Us</h1>
                <p className="contact_us__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <form className="contact_us__form">
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="lastName"  name="lastName"  placeholder="Last Name" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="email"     name="email"     
                        placeholder="Email (e.g. you@mail.com)" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="tel"       name="phone"     
                        placeholder="Phone (e.g. 7(666)228-13-37)" />
                    </div>
                    <div className="contact_us__form_input_container contact_us__form_input_container--textarea">
                        <textarea className="contact_us__form_input contact_us__form_input--textarea " 
                        id="message" name="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="contact_us__form_checkbox_container">
                        <input className="contact_us__form_checkbox" type="checkbox" id="newsletter" name="newsletter" value="newsletter" />
                        <label htmlFor="newsletter">subscribe to the newsletter</label>
                    </div>
                    <input className="contact_us__form_submit" type="submit" value="Send" />
                </form>
            </div>
        </section>
        </>
    )
}

export default ContactUs;