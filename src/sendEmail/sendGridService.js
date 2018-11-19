const httpClient = require('./httpClient.js');

const SendGridService = {
    baseURL: 'https://api.sendgrid.com/v3',
    SEND_GRID_ENV: JSON.parse(process.env.SENDGRID),

    sendTransactionalEmail(substitutions) {
        const headers = {
            Authorization: `Bearer ${this.SEND_GRID_ENV.apiKey}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

        return httpClient.doPost(
            `${this.baseURL}/mail/send`, {
                from: this.SEND_GRID_ENV.from,
                template_id: this.SEND_GRID_ENV.templateId,
                personalizations: [{
                    to: [this.SEND_GRID_ENV.to],
                    dynamic_template_data: substitutions
                }]
            }, {
                headers: headers
            }
        );
    }
};
module.exports = SendGridService;
