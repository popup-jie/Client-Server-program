var mongoose = require('mongoose')

//新增mongodb.shecma 实例
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  user_id: Number,
  pack_score: Number,
  quality_score: Number,
  order_id: { type: Schema.ObjectId, ref: 'order' },
})

// 主键
commentSchema.index({ id: 1 });

// 实例 shecma 到实体库
const comment = mongoose.model('Comment', commentSchema)

module.exports = comment