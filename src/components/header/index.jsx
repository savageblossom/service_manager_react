import React, {useContext} from 'react';

import {UIStoreContext} from '../../index';

import HeaderTopPanel from './HeaderTopPanel';
import BuyNow from './BuyNow';

const Header = () => {
    const uiStore = useContext(UIStoreContext);

    return (
        <header className="header">
        <div className="container">
            <HeaderTopPanel uiStore={uiStore} />
            <BuyNow />
        </div>
    </header>
    )
}

export default Header;