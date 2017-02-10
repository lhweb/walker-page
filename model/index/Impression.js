var mongoose = require('mongoose');
var ImpressionSchema = mongoose.Schema({
    dataCat: {type: String},
    src: {type: String},
    para: {type: String},
    textTitle: {type:String},
    textCategory: {type: String},
    createTime: {type: Date},
    isPublish: {type: Boolean},
    isDelete: {type: Boolean}
});

module.exports = ImpressionSchema;