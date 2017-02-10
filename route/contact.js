var express = require('express');
var formidable = require('formidable');
var InputMessageDao = require('../dao/contact/InputMessageDao.js');
var route = express.Router();

route.get('/',function(req,res){
    res.render('contact');
});

route.post('/inputmessage',function(req,res){
    var form = new formidable.IncomingForm();
    form.parse(req,function(err,fields,files){
        var params = fields;
        params.isDelete = false;
        params.createTime = new Date();
        InputMessageDao.find({username:params.username},{},function(err,result){
            if(!result.length){
                InputMessageDao.insert(params,function(err,result){
                    console.log(result);
                    res.send('success');
                });
            }else{
                res.send('fail');
            }
        });
    });
});
module.exports = route;