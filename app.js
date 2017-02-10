var path = require('path');
var http = require('http');
var express = require('express');
var logger = require('morgan');
var favicon = require('serve-favicon');
var app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(logger('dev'));
app.use(favicon(path.join(__dirname,'/public/favicon.ico')));
app.use(express.static(path.join(__dirname,'/public')));

//  处理路由
var index = require('./route/index');
var blog = require('./route/blog');
var portfolio = require('./route/portfolio');
var contact = require('./route/contact');
app.use('/index',index);
app.use('/blog',blog);
app.use('/portfolio',portfolio);
app.use('/contact',contact);


//  产生错误
app.use(function(req,res,next){
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});
//  捕获错误
app.use(function(err,req,res,next){
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development'?err:{};

    res.status(err.status || 500);
    res.render('error',{errorImage:'http://192.168.1.103:8080/images/404.jpg'});
});

module.exports = app;