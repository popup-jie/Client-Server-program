var mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: { type: Date, default: new Date() },
  create_time_timestamp: { type: Date, default: new Date() },
  has_comment: { type: Boolean, default: false },
  user_id: Number,
  order_id: Number
})

orderSchema.index({ id: 1 })

const order = mongoose.model('order', orderSchema)

module.exports = order