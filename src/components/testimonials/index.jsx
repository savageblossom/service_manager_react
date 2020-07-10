import React from 'react';

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
                        <button className="testimonials__get_started">Get Started</button>
                    </div>
                </div>

                <div id="myCarousel" className="testimonials__carousel carousel slide vert">

                    <ul className="testimonials__carousel_list carousel-inner">
                        <li className="testimonials__carousel_item carousel-item active">
                            <div className="testimonials__carousel_flex_container">
                                <div className="testimonials__carousel_card">
                                    <div className="testimonials__carousel_portrait">
                                        <img src="img/testimonials__por1.jpg" alt="portrait1" />
                                    </div>
                                    <div className="testimonials__carousel_text-field">
                                        <h1>
                                            Rotten Zombie
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonials__carousel_card">
                                    <div className="testimonials__carousel_portrait">
                                        <img src="img/testimonials__por2.jpg" alt="portrait1" />
                                    </div>
                                    <div className="testimonials__carousel_text-field">
                                        <h1>                          
                                            SsethTzeentach
                                        </h1>
                                        <p>
                                            Hey hey, people dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="testimonials__carousel_item carousel-item">
                            <div className="testimonials__carousel_flex_container">
                                <div className="testimonials__carousel_card">
                                    <div className="testimonials__carousel_portrait">
                                        <img src="img/testimonials__por2.jpg" alt="portrait1" />
                                    </div>
                                    <div className="testimonials__carousel_text-field">
                                        <h1>                          
                                            SsethTzeentach
                                        </h1>
                                        <p>
                                            Hey hey, people dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                        </p>
                                    </div>
                                </div>
                                <div className="testimonials__carousel_card">
                                    <div className="testimonials__carousel_portrait">
                                        <img src="img/testimonials__por1.jpg" alt="portrait1" />
                                    </div>
                                    <div className="testimonials__carousel_text-field">
                                        <h1>
                                            Rotten Zombie
                                        </h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                            exercitation ullamco laboris nisi ut aliquip ex ea
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <a className="testimonials__carousel_control testimonials__carousel_control--prev" href="#myCarousel" data-slide="prev"><i className="fas fa-angle-down"></i></a>
                    <a className="testimonials__carousel_control testimonials__carousel_control--next" href="#myCarousel" data-slide="next"><i className="fas fa-angle-up"></i></a>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;