import React from 'react';

import Carousel from './Carousel';
import Button from '../ui/Button';
const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <div className="testimonials__left_container">
                    <div className="testimonials__text_container">
                        <h1 className="testimonials__title">What our customers<br />
                            have to say about us.</h1>
                        <p className="testimonials__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br />
                            tempor incididunt ut labore et dolore magna</p>
                    </div>
                    <div className="testimonials__btn_container">
                        {/* <button className="testimonials__get_started">Get Started</button> */}
                        <Button 
                            innertext={"Get Started"}
                            textcolor={'#fff'} 
                            background={"#061e37"} 
                            width={"150px"} 
                            margin={"0 30px 0 0"}
                        />
                    </div>
                </div>

                <Carousel />
                
            </div>
        </section>
    )
}

export default Testimonials;