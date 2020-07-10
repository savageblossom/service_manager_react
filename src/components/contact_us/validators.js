export const validateEmail = (emailString) => {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          matchThem = regex.test(emailString);

    if(matchThem === true) return true
    else return false;
}

export const validatePhone = (phoneString) => {
    const regex = /((8|\+7)-?)?\(?\d{3,5}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}((-?\d{1})?-?\d{1})?/,
          matchThem = regex.test(phoneString);

    if(matchThem === true) return true
    else return false;
}