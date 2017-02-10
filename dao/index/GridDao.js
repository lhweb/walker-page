var db = require('../db');
var GridSchema = require('../../model/index/Grid.js');

/*  创建相关处理数据库方法 */
//  获取文档个数
GridSchema.methods.count = function(callback){
    this.model('Grid').count(callback);
};
//  查找指定文档
GridSchema.methods.find = function(params,options,callback){
    var args = arguments,ps,os,cb;
    if(args.length === 1){
        ps = {};
        os = {};
        cb = args[0];
        this.model('Grid').find(ps,os,cb);
    }else if(args.length === 2){
        ps = args[0];
        os = {};
        cb = args[1];
        this.model('Grid').find(ps,os,cb);
    }else{
        ps = params;
        os = options;
        cb = callback;
        var query = this.model('Grid').find(ps);
        Object.keys(os).forEach(function(k){
            console.log(k);
            query[k](os[k]);
        });
        query.exec(cb);
    };
};
//  插入数据
GridSchema.methods.insert = function(params,callback){
    this.model('Grid').create(params,callback);
};
//  更新数据
GridSchema.methods.update = function(params,options,callback){
    this.model('Grid').updateMany(params,options,callback);
};
//  物理删除数据
GridSchema.methods.deleteForce = function(params,callback){
    this.model('Grid').remove(params,callback);
}
//  逻辑删除数据
GridSchema.methods.delete = function(params,callback){
    this.model('Grid').updateMany(params,{'isDelete':1},callback);
};
//  这个方法调用需在Schema 方法定义之后
var GridModel = db.model('Grid',GridSchema);
var gridDao = new GridModel();


module.exports = gridDao;
