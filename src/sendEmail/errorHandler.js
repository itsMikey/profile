function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isFormValid(params) {
    const isValidName = params.name && 2 <= params.name.length;
    const isValidEmail = validateEmail(params.email);
    const isValidMsg = params.msg && 5 <= params.msg.length;
    let formStatus = {
        valid: false,
        invalidParams: []
    }

    if (isValidEmail && isValidName && isValidMsg) {
        formStatus.valid = true;
        return formStatus;
    }

    if (!isValidName) {
        formStatus.invalidParams.push("name");
    }

    if (!isInvalidEmail) {
        formStatus.invalidParams.push("email");
    }

    if (!isValidMsg) {
        formStatus.invalidParams.push("msg");
    }
    return formStatus;
}

try {
    module.exports = isFormValid;
 } catch (e) {
 }