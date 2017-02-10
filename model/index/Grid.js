var mongoose = require('mongoose');
var GridSchema = new mongoose.Schema({
    grid3Img: {type: String},
    grid3Txt: {type: String},
    grid3Detail: {type: String},
    createTime: {type: Date},
    isPublish: {type: Boolean},
    isDelete: {type: Boolean}
});

module.exports = GridSchema;