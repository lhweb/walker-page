var db = require('../db');
var ImpressionSchema = require('../../model/index/Impression.js');

/*  创建相关处理数据库方法 */
//  获取文档个数
ImpressionSchema.methods.count = function(callback){
    this.model('Impression').count(callback);
};
//  查找指定文档
ImpressionSchema.methods.find = function(params,options,callback){
    var args = arguments,ps,os,cb;
    if(args.length === 1){
        ps = {};
        os = {};
        cb = args[0];
        this.model('Impression').find(ps,os,cb);
    }else if(args.length === 2){
        ps = args[0];
        os = {};
        cb = args[1];
        this.model('Impression').find(ps,os,cb);
    }else{
        ps = params;
        os = options;
        cb = callback;
        var query = this.model('Impression').find(ps);
        Object.keys(os).forEach(function(k){
            console.log(k);
            query[k](os[k]);
        });
        query.exec(cb);
    };
};
//  插入数据
ImpressionSchema.methods.insert = function(params,callback){
    this.model('Impression').create(params,callback);
};
//  更新数据
ImpressionSchema.methods.update = function(params,options,callback){
    this.model('Impression').updateMany(params,options,callback);
};
//  物理删除数据
ImpressionSchema.methods.deleteForce = function(params,callback){
    this.model('Impression').remove(params,callback);
}
//  逻辑删除数据
ImpressionSchema.methods.delete = function(params,callback){
    this.model('Impression').updateMany(params,{'isDelete':1},callback);
};
//  这个方法调用需在Schema 方法定义之后
var ImpressionModel = db.model('Impression',ImpressionSchema);
var ImpressionDao = new ImpressionModel();


module.exports = ImpressionDao;
