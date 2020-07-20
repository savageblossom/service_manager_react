import React from 'react';

import {Button} from "../../ui/Button";
const BuyNow = () => (
    <div className="header__buy_now">
        <div className="header__text_container">
            <h1 className="header__big_text">lorem Ipsum <br /> Dolor sit amet</h1>
            <p className="header__small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> 
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad <br />
                minim veniam, quis nostrud exercitation ullamc</p>
            <div className="header__btns_container">
                {/* <button className="header__btn_buy_now">Buy now</button><button className="header__btn_try">
                    Try for free</button> */}
                <Button variant="contained" className="header__btn_buy_now" disableElevation>Try for free</Button>
                <Button variant="contained" className="header__btn_try" disableElevation>Try for free</Button>
            </div>
        </div>
        <div className="header__video_container">
            <button className="header__video_play_btn"><i className="fa fa-play"></i></button>
            
            <p className="header__watch_text">Watch the video</p>
        </div>
    </div>
)

export default BuyNow;