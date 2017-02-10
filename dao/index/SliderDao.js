var db = require('../db');
var SliderSchema = require('../../model/index/Slider.js');

/*  创建相关处理数据库方法 */
//  获取文档个数
SliderSchema.methods.count = function(callback){
    this.model('Slider').count(callback);
};
//  查找指定文档
SliderSchema.methods.find = function(params,options,callback){
    var args = arguments,ps,os,cb;
    if(args.length === 1){
        ps = {};
        os = {};
        cb = args[0];
        this.model('Slider').find(ps,os,cb);
    }else if(args.length === 2){
        ps = args[0];
        os = {};
        cb = args[1];
        this.model('Slider').find(ps,os,cb);
    }else{
        ps = params;
        os = options;
        cb = callback;
        var query = this.model('Slider').find(ps);
        Object.keys(os).forEach(function(k){
            console.log(k);
           query[k](os[k]);
        });
        query.exec(cb);
    };
};
//  插入数据
SliderSchema.methods.insert = function(params,callback){
    this.model('Slider').create(params,callback);
};
//  更新数据
SliderSchema.methods.update = function(params,options,callback){
    this.model('Slider').updateMany(params,options,callback);
};
//  物理删除数据
SliderSchema.methods.deleteForce = function(params,callback){
    this.model('Slider').remove(params,callback);
}
//  逻辑删除数据
SliderSchema.methods.delete = function(params,callback){
    this.model('Slider').updateMany(params,{'isDelete':1},callback);
};
//  这个方法调用需在Schema 方法定义之后
var SliderModel = db.model('Slider',SliderSchema);
var sliderDao = new SliderModel();


module.exports = sliderDao;
