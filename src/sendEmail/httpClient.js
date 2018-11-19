const axios = require('axios');

const httpClient = {

    doGet(url, params) {
        return axios.get(url, params);
    },

    doPost(url, params = {}, options = {}) {
        return axios({
            method: 'POST',
            url: url,
            headers: options.headers || {'Content-Type': 'application/json'},
            data: JSON.stringify(params),
          });
    }
};

module.exports = httpClient;