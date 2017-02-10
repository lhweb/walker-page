var mongoose = require('mongoose');
var SliderSchema = new mongoose.Schema({
    //  thumb图片路径
    thumb: {type: String},
    //  navigation图片路径
    src: {type: String},
    //  轮播图文字内容
    sliderText: {type: String},
    //  创建时间
    createTime: {type: Date},
    //  发布状态 1代表发布，0代表未发布
    isPublish: {type: Boolean},
    //  删除状态 1代表删除，0代表未删除
    isDelete: {type: Boolean}
});

module.exports = SliderSchema;