import React from 'react';

const GetStarted = () => {
    return (
        <section className="get_started container">
            <div className="get_started__top_container">
                <h1 className="get_started__heading">
                    Easy & Useful
                </h1>
                <h2 className="get_started__sub_title">
                    Project Management Tool
                </h2>
                <p className="get_started__caption">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br />
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis <br />
                    nostrud 
                </p>
            </div>
            <ul className="get_started__card_list">
                <li className="get_started__card_item">
                    <div className="get_started__img_container">
                        <img src="img/get_started_icon_1.png" alt="" />
                    </div>
                    <h1 className="get_started__card_heading">
                        Title Goes Here
                    </h1>
                    <p className="get_started__card_text">Lorem ipsum dolor sit amet, consectetur<br />
                        adipisicing elit, sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.</p>
                </li>
                <li className="get_started__card_item get_started__card_item--lifted">
                    <div className="get_started__img_container">
                        <img src="img/get_started_icon_3.png" alt="" />
                    </div>
                    <h1 className="get_started__card_heading">
                        Title Goes Here
                    </h1>
                    <p className="get_started__card_text">Lorem ipsum dolor sit amet, consectetur<br />
                        adipisicing elit, sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.</p>
                </li>
                <li className="get_started__card_item">
                    <div className="get_started__img_container">
                        <img src="img/get_started_icon_2.png" alt="" />
                    </div>
                    <h1 className="get_started__card_heading">
                        Title Goes Here
                    </h1>
                    <p className="get_started__card_text">Lorem ipsum dolor sit amet, consectetur<br />
                        adipisicing elit, sed do eiusmod tempor incididunt<br />
                        ut labore et dolore magna aliqua.</p>
                </li>
            </ul>
            <button className="get_started__btn">Get started</button>
        </section>
    )
}

export default GetStarted;