var dbConfig = require('../config/dbConfig');
var mongoose = require('mongoose');
var db = mongoose.createConnection(dbConfig.url,dbConfig.options);
db.on('open',function(err){
    if(err){
        console.log(err.message);
    };
    console.log('数据库连接成功');
});
db.on('error',function(err){
    console.error(err.message);
})

//  导出数据库连接池
module.exports = db;