import React, {useContext} from 'react';
import {observer} from 'mobx-react';

import {UIStoreContext} from '../../../index';

import Menu from '../Menu';
import { useEffect } from 'react';

const LinksList = observer(() => {
    const { isMobileView, headerMenu_isToggled } = useContext(UIStoreContext);

    useEffect(() => {
    })

    return(
        <>
            <div 
               id="header__toggle_menu_target" 
               style={!isMobileView || headerMenu_isToggled ? {display: "flex"} : { display: "none"}} 
               className="header__nav_container"
            >
                <nav className="header__links_list">
                    {Menu.map((item, index) => (
                        <a 
                          className="header__links_item" 
                          href={item.pathname}
                          key={index}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a className="header__links_item header__sign_up_link" href="#">Sign Up</a>
                </nav>
                <button className="header__sign_up_btn">Sign up</button>
            </div>
        </>
    )
})

export default LinksList;