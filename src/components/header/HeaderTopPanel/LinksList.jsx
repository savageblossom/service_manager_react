import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {UIStoreContext} from '../../../index';
const LinksList = observer(() => {
    const { isMobileView, headerMenu_isToggled } = useContext(UIStoreContext);
    return(
        <>
            <div id="header__toggle_menu_target" style={!isMobileView || headerMenu_isToggled ? {display: "flex"} : { display: "none"}} className="header__nav_container">
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
        </>
    )
})

export default LinksList;