var http = require('http');
var path = require('path');
var debug = require('debug')('walker-page:server');

var app = require('../app.js');

var server = http.createServer(app);
var port = process.env.port || 8080;
//app.set('port',port);
server.listen(port);
server.on('error',errorHandler);
server.on('listen',listenHandler);

//  处理错误
function errorHandler(error){
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
};

//  处理监听
function listenHandler(){
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}