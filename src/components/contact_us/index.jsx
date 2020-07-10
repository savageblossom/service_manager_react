import React, { useEffect } from 'react';

import { validateEmail, validatePhone } from './validators';

import $ from 'jquery';

const ContactUs = () => {

    const printError = (errClassName, message, element) => {
        if(($(element).prev().hasClass(errClassName))) { $(element).prev().remove() }
        if(!($(element).prev().hasClass(errClassName))) {
            $(element).before($(`<div class="${ errClassName }">${ message }</div>`))
        }
    }

    useEffect(() => {
        $('#contactForm').on('submit', () => {
            // Take certain inputs
            const formInputList = $('#firstName, #lastName, #tel, #email, #message');
        
            // Check inputs
            for(const [k, v] of Object.entries(formInputList)) {
                let inputId = '#'+v.id;

                // Check every input in form for emptiness
                if(v.value == '') printError('contact_us__error', 'Please fill in the blank field', inputId)

                // Validate e-mail input
                else if(inputId == '#email' && !validateEmail(v.value)) printError('contact_us__error', 'Please type e-mail correctly', inputId)

                // Validate phone input
                else if(inputId == '#tel' && !validatePhone(v.value)) printError('contact_us__error', 'Please type phone number correctly', inputId)
                else {
                    $(inputId).prev().remove()
                }
            }
            
            if($('.contact_us__error').length == 0) {
                alert('Письмо отправлено успешно!');
                console.log(formInputList)
            }
        })
    })

    return (
        <section className="contact_us">
            <div className="container">
                <h1 className="contact_us__heading">Contact Us</h1>
                <p className="contact_us__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                <form id="contactForm" className="contact_us__form" action="#" onSubmit={e => {e.preventDefault();}}>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="firstName" name="firstName" placeholder="First Name" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="lastName"  name="lastName"  placeholder="Last Name" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="email"     name="email"     placeholder="Email" />
                    </div>
                    <div className="contact_us__form_input_container">
                        <input type="text" className="contact_us__form_input" id="tel"       name="phone"     placeholder="Phone" />
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
    )
}

export default ContactUs;