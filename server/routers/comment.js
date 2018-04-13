var express = require('express');

var router = express.Router();
var comment = require('../controll/comment')
var order = require('../controll/order')

router.post('/addcomment', comment.addDisccult)
router.post('/orderDown', order.orderDown)

module.exports = router;