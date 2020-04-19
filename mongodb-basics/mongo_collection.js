var mongo = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var firstDatabase = db.db("first_mongodb");
    firstDatabase.createCollection("interns", function(err, res) {
        if (err) throw err;
        console.log("Interns collection created");
        db.close();
    })
})