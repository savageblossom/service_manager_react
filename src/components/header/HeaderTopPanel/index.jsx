import React, {useContext} from 'react';

import LinksList from './LinksList';
import Logo from './Logo';
import ButtonBurger from './ButtonBurger';

import {UIStoreContext} from '../../../index';
import { withStyles } from '@material-ui/styles';

import Menu from '../Menu';

const styles = {

}

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

export default withStyles(styles)(HeaderTopPanel);