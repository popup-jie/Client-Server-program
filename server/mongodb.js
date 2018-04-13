var mongoose = require('mongoose')
var mongodburl = "mongodb://localhost:27017/test"

mongoose.connect(mongodburl, { server: { auto_reconnect: true } });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connecting to the database Successfully')
})

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error);
  mongoose.disconnect();
});

db.on('close', function () {
  console.log('The database is disconnected and try to reconnect the database');
  mongoose.connect(config.DB_URL, { server: { auto_reconnect: true } });
});

module.exports = { db };
// var MongoClient = require('mongodb').MongoClient;
// var connect = function (cb) {
//   MongoClient.connect(mongodburl, (err, db) => {
//     if (err) throw err
//     cb && cb(db)
//   })
// }

// var close = function (db) {
//   db.close()
// }

// var findOne = function (tab, wherestr) {
//   return new Promise((resolve, reject) => {
//     connect((db) => {
//       let dbo = db.db('test')
//       dbo.collection(tab).find(wherestr).toArray((err, data) => {
//         resolve(data)
//       })
//     })
//   })
// }
// var updateOne = function () { }

// var insertOne = function (tab, obj, cb) {
//   return new Promise((resolve, reject) => {
//     connect((db) => {
//       let dbo = db.db('test')
//       dbo.collection(tab).insertOne(obj, (err, res) => {
//         if (err) throw err
//         resolve(res)
//       })
//     })
//   })
// }

// module.exports = {
//   connect,
//   close,
//   findOne,
//   updateOne,
//   insertOne
// }
