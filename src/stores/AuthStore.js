import { decorate, observable, action } from "mobx";

class Store { 
    auth = JSON.parse(localStorage.getItem("auth"));
    
    performAuth = () => {
        this.auth = "true";
        localStorage.setItem("auth", "true");
    }

    revertAuth = () => {
        this.auth = "false";
        localStorage.setItem("auth", "false");
    }
}

const storeInstance = new Store()

decorate(storeInstance, {
    auth: observable,
    performAuth: action
})
 
export default storeInstance;
