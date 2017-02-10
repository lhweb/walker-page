var express = require('express');
var SliderDao = require('../dao/index/SliderDao.js');
var GridDao = require('../dao/index/GridDao.js');
var ImpressionDao = require('../dao/index/ImpressionDao.js');
var route = express.Router();

route.get('/',function(req,res){
    res.render('index/index');
});

route.post('/slider',function(req,res){
    SliderDao.find({},{limit:12},function(err,result){
        res.render('index/slider',{sliderData:result});
    });
});

route.post('/grid',function(req,res){
    GridDao.find({},{limit:3},function(err,result){
       res.render('index/grid',{gridData:result});
    });
});

route.post('/impression',function(req,res){
    ImpressionDao.find({},{limit:8},function(err,result){
       res.render('index/impression',{impressionData:result});
    });
});


module.exports = route;