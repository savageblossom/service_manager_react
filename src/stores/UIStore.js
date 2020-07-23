import { decorate, observable, action, computed } from 'mobx';

class Store { 
    headerMenu_isToggled = false;
    headerMenu_toggle = () => {this.headerMenu_isToggled = !this.headerMenu_isToggled; }

    isMobileView = window.innerWidth <= 860 ? true : false; 
    setMobileView = () => {
        this.isMobileView = window.innerWidth <= 860 ? true : false;
    }

    input = {
        firstName = '',
        lastName = '',
        email = '',
        phone = '',
        message = ''
    }
    setInputProperty = (propertyName, value) => {
        this.input[`${firstName}`] = value
    }
}

const storeInstance = new Store()

decorate(storeInstance, {
    headerMenu_isToggled: observable,
    headerMenu_toggle: action,
    isMobileView: observable,
    setMobileView: action,
    // form
    firstName: observable,
    setFirstName: action
})

export default storeInstance;