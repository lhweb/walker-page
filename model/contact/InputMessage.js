var mongoose = require('mongoose');
var InputMessageSchema = new mongoose.Schema({
    username: {type: String},
    email: {type: String},
    message: {type: String},
    createTime: {type: Date},
    isDelete: {type: Boolean}
});

module.exports = InputMessageSchema;