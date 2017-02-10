module.exports = {
    url: 'mongodb://localhost:3307/walker-page',
    options: {
        server: {
            auto_reconnect: true,
            poolSize: 5
        }
    }
};