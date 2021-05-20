var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect("mongodb://localhost:27017/db", function (err, db) {
  if(err) throw err;

  console.log('mongodb is running!');

  var dbo = db.db("mydb");

  console.log('deleting old test db');
  dbo.collection("test").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection test was deleted");
    db.close();
  });

  console.log('creating new test db');
  dbo.createCollection("test", function(err, res) {
    if (err) throw err;
    console.log("Collection test was created!");
    db.close();
  });

  db.close();
});