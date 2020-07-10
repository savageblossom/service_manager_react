import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__bottom_panel">
                    <a className="footer__logo" href="">
                        <img src="img/header__logo.png" alt="" width="180" height="30" />
                    </a>
                    <ul className="footer__links_main_list">
                        <li><a className="footer__links_item" href="#">Home</a></li>
                        <li><a className="footer__links_item" href="#">Service</a></li>
                        <li><a className="footer__links_item" href="#">Extension</a></li>
                        <li><a className="footer__links_item" href="#">Pricing</a></li>
                        <li><a className="footer__links_item" href="#">Help</a></li>
                    </ul>
                </div>
                <div className="footer__links_panel">
                    <div className="footer__links_secondary_list_container">
                        <ul className="footer__links_secondary_list">
                            <li><a className="footer__links_item" href="#">Privacy Policy</a></li>
                            <li className="footer__mobile_hidden"><span><i className="fas fa-circle"></i></span></li>
                            <li><a className="footer__links_item" href="#">About us</a></li>
                            <li className="footer__mobile_hidden"><span><i className="fas fa-circle"></i></span></li>
                            <li><a className="footer__links_item" href="#">About us</a></li>
                        </ul>
                    </div>
                    <div className="footer__links_socials_container">
                        <ul className="footer__links_socials">
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-square"></i></a></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}

export default Footer;