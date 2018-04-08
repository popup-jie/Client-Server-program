var MongoClient = require('mongodb').MongoClient;
var mongodburl = "mongodb://localhost:27017/test"

var connect = function (cb) {
  MongoClient.connect(mongodburl, (err, db) => {
    if (err) throw err
    cb && cb(db)
  })
}

var close = function (db) {
  db.close()
}

var findOne = function (tab, wherestr) {
  return new Promise((resolve, reject) => {
    connect((db) => {
      let dbo = db.db('test')
      dbo.collection(tab).find(wherestr).toArray((err, data) => {
        resolve(data)
      })
    })
  })
}
var updateOne = function () { }

var insertOne = function (tab, obj, cb) {
  return new Promise((resolve, reject) => {
    connect((db) => {
      let dbo = db.db('test')
      dbo.collection(tab).insertOne(obj, (err, res) => {
        if (err) throw err
        resolve(res)
      })
    })
  })  
}

module.exports = {
  connect,
  close,
  findOne,
  updateOne,
  insertOne
}
