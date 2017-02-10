var db = require('../db');
var InputMessageSchema = require('../../model/contact/InputMessage.js');

/*  创建相关处理数据库方法 */
//  获取文档个数
InputMessageSchema.methods.count = function(callback){
    this.model('InputMessage').count(callback);
};
//  查找指定文档
InputMessageSchema.methods.find = function(params,options,callback){
    var args = arguments,ps,os,cb;
    if(args.length === 1){
        ps = {};
        os = {};
        cb = args[0];
        this.model('InputMessage').find(ps,os,cb);
    }else if(args.length === 2){
        ps = args[0];
        os = {};
        cb = args[1];
        this.model('InputMessage').find(ps,os,cb);
    }else{
        ps = params;
        os = options;
        cb = callback;
        var query = this.model('InputMessage').find(ps);
        Object.keys(os).forEach(function(k){
            console.log(k);
            query[k](os[k]);
        });
        query.exec(cb);
    };
};
//  插入数据
InputMessageSchema.methods.insert = function(params,callback){
    this.model('InputMessage').create(params,callback);
};
//  更新数据
InputMessageSchema.methods.update = function(params,options,callback){
    this.model('InputMessage').updateMany(params,options,callback);
};
//  物理删除数据
InputMessageSchema.methods.deleteForce = function(params,callback){
    this.model('InputMessage').remove(params,callback);
}
//  逻辑删除数据
InputMessageSchema.methods.delete = function(params,callback){
    this.model('InputMessage').updateMany(params,{'isDelete':1},callback);
};
//  这个方法调用需在Schema 方法定义之后
var InputMessageModel = db.model('InputMessage',InputMessageSchema);
var InputMessageDao = new InputMessageModel();


module.exports = InputMessageDao;
