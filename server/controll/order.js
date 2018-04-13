var orderModel = require('../model/order');

class Order {
  constructor() { }

  async orderDown(req, res, next) {
    let { date, user_id, order_id } = req.body

    let data = {
      date,
      has_comment: false,
      user_id,
      order_id
    }
    let order = await new orderModel(data).save()

    res.send({
      status: 200,
      message: '下订单成功'
    })
  }
}

const order = new Order()

module.exports = order