const SendGridService = require("./sendGridService.js");
const isFormValid = require("./errorHandler");

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const formValid = isFormValid(req.body);

    if (formValid.valid) {
        const sendGridResponse = await SendGridService.sendTransactionalEmail({
            name: req.body.name,
            email: req.body.email,
            msg: req.body.msg
        });

        if (200 < sendGridResponse.status && sendGridResponse.status < 299) {
            context.res = {
                status: 200,
                body: "Thank you, your message has been received"
            };
        } else {
            context.res = {
                status: 400,
                body: `There was an error sending your message.`
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: `Please enter a valid ${formValid.invalidParams.join(", ")}`
        };
    }
};