var express = require('express');
var route = express.Router();

route.get('/',function(req,res){
    res.render('portfolio');
});

module.exports = route;