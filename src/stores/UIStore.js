import { decorate, observable, action, computed } from 'mobx';

class Store { 
    headerMenu_isToggled = false;
    headerMenu_toggle = () => {this.headerMenu_isToggled = !this.headerMenu_isToggled; }

    mobileCondition = () => window.innerWidth <= 860 ? true : false; 
    isMobileView = this.mobileCondition();
    setMobileView = () => this.isMobileView = this.mobileCondition();

    input = {
        firstName: {
            value: '',
            error: false
        },
        lastName: {
            value: '',
            error: false
        },
        email: {
            value: '',
            error: false
        },
        phone: {
            value: '',
            error: false
        },
        message: {
            value: '',
            error: false
        }
    }
    setInputProperty = (propertyName, value) => this.input[`${propertyName}`].value = value;
}  

const storeInstance = new Store()

decorate(storeInstance, {
    //global
    isMobileView: observable,
    setMobileView: action,

    // header
    headerMenu_isToggled: observable,
    headerMenu_toggle: action,
    
    // form
    input: observable,
    setInputProperty: action
})

export default storeInstance;