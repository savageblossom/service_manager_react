import React from 'react';

import Button from "../../ui/Button";
import { withStyles } from '@material-ui/styles';

const styles = {
    header__btn_buy_now : {
        backgroundColor: "red"
    }
}

const BuyNow = props => {
    const {classes} = props;
    return (
    <div className="header__buy_now">
        <div className="header__text_container">
            <h1 className="header__big_text">lorem Ipsum <br /> Dolor sit amet</h1>
            <p className="header__small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> 
                eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad <br />
                minim veniam, quis nostrud exercitation ullamc</p>
            <div className="header__btns_container">
                <Button 
                  innertext={"Buy Now"}
                  textcolor={'#fff'} 
                  background={"#061e37"} 
                  width={"150px"} 
                  margin={"0 30px 0 0"}
                  disableElevation
                />
                <Button 
                  innertext={"Try for free"}
                  textcolor={'#061e37'} 
                  background={"#fff"} 
                  width={"150px"} 
                  disableElevation
            />
            </div>
        </div>
        <div className="header__video_container">
            <button className="header__video_play_btn"><i className="fa fa-play"></i></button>
            
            <p className="header__watch_text">Watch the video</p>
        </div>
    </div>
    )
}

export default withStyles(styles)(BuyNow);