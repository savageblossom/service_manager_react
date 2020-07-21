import { decorate, observable, action, computed } from 'mobx';

class Store { 
    headerMenu_isToggled = false;
    headerMenu_toggle = () => {this.headerMenu_isToggled = !this.headerMenu_isToggled; }

    isMobileView = window.innerWidth <= 860 ? true : false; 
    setMobileView = () => {
        this.isMobileView = window.innerWidth <= 860 ? true : false;
        console.log(this.isMobileView)
    }
}

const storeInstance = new Store()

decorate(storeInstance, {
    headerMenu_isToggled: observable,
    headerMenu_toggle: action,
    isMobileView: observable,
    setMobileView: action
})

export default storeInstance;