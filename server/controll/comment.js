var commentModel = require('../model/comment')
var orderModel = require('../model/order')
class Comment {
  constructor() { }

  async addDisccult(req, res, next) {
    let { content, user_id, pack_score, quality_score } = req.body
    let order = await orderModel.findOne({ user_id: user_id })
    let data = {
      content,
      user_id,
      pack_score,
      quality_score,
      order_id: order._id
    }
    let comment = await new commentModel(data).save();

    await orderModel.update({ order_id: order.order_id }, { has_comment: true })


    let selectU = await commentModel.find({ 'user_id': user_id }).populate({ path: 'order_id' })
    res.send({
      status: 200,
      message: selectU
    })
  }
}
const comment = new Comment()

module.exports = comment