const responseHandler = (statusCode, body) => {
    return {
        statusCode,
        body: statusCode === 500 ? JSON.stringify({ error: { ...body, statusCode } }) : JSON.stringify(body),
    };
};

module.exports = responseHandler;
