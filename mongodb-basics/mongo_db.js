var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/rouche01";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created by Rouche01");
    db.close();
})