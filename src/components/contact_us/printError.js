import $ from 'jquery';

const printError = (errClassName, message, element) => {
    if(($(element).prev().hasClass(errClassName))) { $(element).prev().remove() }
    if(!($(element).prev().hasClass(errClassName))) {
        $(element).before($(`<div class="${ errClassName }">${ message }</div>`))
    }
}

export default printError;