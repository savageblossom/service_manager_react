import React, {useContext} from 'react';

import LinksList from './LinksList';
import Logo from './Logo';
import ButtonBurger from './ButtonBurger';

import {UIStoreContext} from '../../../index';

const HeaderTopPanel = () => {
    const { isMobileView } = useContext(UIStoreContext);
    return (
        <div className="header__top_panel">
        <Logo />
        { isMobileView ? <ButtonBurger /> : null }
        <LinksList />
    </div>
    )
}

export default HeaderTopPanel;