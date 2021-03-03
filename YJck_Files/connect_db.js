var MongoClient = require('mongodb').MongoClient;
 
MongoClient.connect("mongodb://localhost:27017/mymondb", function (err, db) {
  if(err) throw err;

  console.log('mongodb is running!');

  db.close(); //關閉連線
});