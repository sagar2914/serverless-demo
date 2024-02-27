const responseHandler = require('../services/responseHandler');

module.exports.handler = async (event) => {
    try {
        console.log('Incoming event', JSON.stringify(event));

        const response = {
            message: 'Hello World'
        }
        return responseHandler(200, response);
    } catch (error) {
        console.log('User circle info error', error)
        return responseHandler(500, { message: error.message });
    }
};
