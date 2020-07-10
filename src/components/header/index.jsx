import React, { useEffect } from 'react';
import $ from 'jquery';

const Header = () => {
    useEffect(() => {
        $('#header__toggle_menu').on('click', () => {
            let selectedBurgerTarget = $('#header__toggle_menu_target'),
                isToggled = true;

            if(selectedBurgerTarget.css('display') == 'none') isToggled = false;
            if(!isToggled)  selectedBurgerTarget.css('display', 'flex');
            else selectedBurgerTarget.css('display', 'none');
        })
    })


    return (
        <header className="header">
        <div className="container">
            <div className="header__top_panel">
                <a className="header__logo" href="">
                    <img src="/img/header__logo.png" alt="" width="180" height="30" />
                </a>
                <button id="header__toggle_menu" className="header__nav_burger">
                    <i className="fas fa-bars"></i>
                </button>
                <div id="header__toggle_menu_target" className="header__nav_container">
                    <nav className="header__links_list">
                        <a className="header__links_item" href="#">Home</a>
                        <a className="header__links_item" href="#">Service</a>
                        <a className="header__links_item" href="#">Extension</a>
                        <a className="header__links_item" href="#">Pricing</a>
                        <a className="header__links_item" href="#">Help</a>
                        <a className="header__links_item header__sign_up_link" href="#">Sign Up</a>
                    </nav>
                    <button className="header__sign_up_btn">Sign up</button>
                </div>
            </div>
            <div className="header__buy_now">
                <div className="header__text_container">
                    <h1 className="header__big_text">lorem Ipsum <br /> Dolor sit amet</h1>
                    <p className="header__small_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do <br /> 
                        eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad <br />
                        minim veniam, quis nostrud exercitation ullamc</p>
                    <div className="header__btns_container">
                        <button className="header__btn_buy_now">Buy now</button><button className="header__btn_try">
                            Try for free</button>
                    </div>
                </div>
                <div className="header__video_container">
                    <button className="header__video_play_btn"><i className="fa fa-play"></i></button>
                    <p className="header__watch_text">Watch the video</p>
                </div>
                 
            </div>
        </div>
    </header>
    )
}

export default Header;