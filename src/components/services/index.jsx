import React, { useEffect } from 'react';

const Services = () => {
    return (
        <section className="services container">
            <h1 className="services__heading">Services</h1>
            <p className="services__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br />
                    incididunt ut labore et dheaolore magna</p>

            <div className="services__accordion" id="accordionExample">

                <div className="services__card">
                    <div className="services__card_header" id="headingOne">
                        <div className="services__card_clickable" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="services__accordion_icon"><i className="fas fa-chart-line"></i></span> 
                                <p className="services__accordion_caption">Statistics</p>
                                <span className="services__accordio_collapse-icon"><i className="fas fa-angle-down"></i></span>
                        </div>
                        
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="services__card_body">
                            <img className="services__accordion_img" src="img/collapse_image.png" alt="Statistics" />
                            <p className="services__accordion_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services__card">
                    <div className="services__card_header" id="headingTwo">
                        <div className="services__card_clickable" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                <span className="services__accordion_icon"><i className="fas fa-chart-line"></i></span> 
                                <p className="services__accordion_caption">Inbox</p>
                                <span className="services__accordio_collapse-icon"><i className="fas fa-angle-down"></i></span>
                        </div>
                        
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="services__card_body">
                            <img className="services__accordion_img" src="img/collapse_image.png" alt="Statistics" />
                            <p className="services__accordion_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services__card">
                    <div className="services__card_header" id="headingTwo">
                        <div className="services__card_clickable" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                                <span className="services__accordion_icon"><i className="fas fa-chart-line"></i></span> 
                                <p className="services__accordion_caption">Team</p>
                                <span className="services__accordio_collapse-icon"><i className="fas fa-angle-down"></i></span>
                        </div>
                        
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="services__card_body">
                            <img className="services__accordion_img" src="img/collapse_image.png" alt="Statistics" />
                            <p className="services__accordion_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="services__card">
                    <div className="services__card_header" id="headingFour">
                        <div className="services__card_clickable" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                                <span className="services__accordion_icon"><i className="fas fa-chart-line"></i></span> 
                                <p className="services__accordion_caption">Settings</p>
                                <span className="services__accordio_collapse-icon"><i className="fas fa-angle-down"></i></span>
                        </div>
                        
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="services__card_body">
                            <img className="services__accordion_img" src="img/collapse_image.png" alt="Statistics" />
                            <p className="services__accordion_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="services__card">
                    <div className="services__card_header" id="headingFive">
                        <div className="services__card_clickable" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                                <span className="services__accordion_icon"><i className="fas fa-chart-line"></i></span> 
                                <p className="services__accordion_caption">Feed</p>
                                <span className="services__accordio_collapse-icon"><i className="fas fa-angle-down"></i></span>
                        </div>
                        
                    </div>
                    <div id="collapseFive" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="services__card_body">
                            <img className="services__accordion_img" src="img/collapse_image.png" alt="Statistics" />
                            <p className="services__accordion_text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br /><br />
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;