var router = require('./comment')


//暴露一个匿名函数，调用此处需传入app
module.exports = function (app) {
  app.use('/api', router);
}