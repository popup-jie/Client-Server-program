var db = require('./mongodb');
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const appRouter = require('./routers/index');
let mongodb = require('./mongodb');
var fs = require('fs')


function errorMsg(option) {
  return Object.assign({
    msg: '',
    code: -1,
    success: false,
    data: []
  }, option)
}

function successMsg(option) {
  return Object.assign({
    msg: '',
    code: 1,
    success: true,
    data: []
  }, option)
}

app.use(bodyParser.urlencoded({ extended: false }))
//文件资源路径
app.use(express.static('webapp'));

app.all('*', function (req, res, next) {
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  next();
});

//拦截请求，
// app.use('/getuserlist', (req, res) => {
//   mongodb.findOne({}, data => {
//     res.send(data)
//   })
// })

//拦截用户相关信息操作
// app.post('/login(/)?*', (req, res) => {
//   let user = req.body.username
//   let pass = req.body.userpass

//   if (!user || !pass) {
//     res.send(errorMsg({ msg: '账号或者密码错误' }))
//     return;
//   }
//   mongodb.findOne('user', { user }).then(data => {
//     if (data.length > 0) {
//       mongodb.findOne('user', { user, pass }).then(data => {
//         if (data.length === 0) {
//           res.send(errorMsg({ msg: '账号或者密码错误' }))
//         } else {
//           res.send(successMsg({ data: data }))
//         }
//       })
//     } else {
//       mongodb.insertOne('user', { user, pass }).then(data => {
//         if (data == 'success') {
//           res.send(successMsg({}))
//         } else {
//           res.send(errorMsg({ msg: '当前服务器繁忙，请稍后再试' }))
//         }
//       })
//     }
//   })

// })

// app.use('/offer/list', (req, res) => {
//   res.end();
// })

// indexRouter.app(app)

app.route('/').get((req, res) => {
  res.readFile(__dirname + 'webapp/index.html')
})

appRouter(app)
//拦截路由
// app.route('/offer').get((req, res) => {
//   fs.readFile('./webapp/test.html', 'utf-8', function (err, data) {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(data.toString());
//     res.end();
//   });
// })

// var router = require("./routers/indexRoute")
// app.use('/api', router)

// MongoClient.connect(url, (err, db) => {
// if (err) throw err;

// let dbo = db.db('test')


// 创建集合
// dbo.createCollection('site', (err, res) => {
//   if (err) throw err;
//   console.log('集合')
//   db.close()
// })

// var myobj = [{ name: '新手2', url: 'localhost' }, { name: '新手3', url: 'localhost' }, { name: '新手4', url: 'localhost' }]

// dbo.collection('site').insertMany(myobj, (err, res) => { 
//   if (err) throw err
//   console.log('sucess');
//   db.close()
// })
// dbo.collection('site').insertOne(myobj, (err, res) => { 
//   if (err) throw err
//   console.log('文档插入成功')
//   db.close()
// })
// console.log('connect success!');
// db.close()
// let whestr = { name: '新手2' }
// dbo.collection('site').find(whestr).toArray((err, res) => {
//   if (err) throw err
//   console.log(res)
//   db.close()
// })


// let updateStr = { $set: { "url": 'www.baidu.com' } }
// dbo.collection('site').updateOne(whestr, updateStr, (err, res) => {
//   console.log('OK');
//   db.close()
// })
// 所有语句修改 updateMany


//deleteOne删除单条
//deleteMany删除多条
//sort排序 1是升序  -1是降序  {type:1} 按照字段type升序
//limit()分页查询
// })

var server = app.listen(8700, () => {
  let host = server.address().host;
  let port = server.address().port;

  console.log('listening at http://%s%s', host, port)
})