import React, {useContext} from 'react';
import {UIStoreContext} from '../../../index';
const ButtonBurger = () => {
    const { headerMenu_toggle } = useContext(UIStoreContext);
    return (
        <button id="header__toggle_menu" className="header__nav_burger" onClick={e => { headerMenu_toggle(); }}>
            <i className="fas fa-bars"></i>
        </button>
    )
}
    

export default ButtonBurger;