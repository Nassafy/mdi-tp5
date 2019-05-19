var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const getcollection = (callback => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        const dbo = db.db("mydb");
        const collection = dbo.collection("alert");
        callback(db, collection);
      });
})

const get  = (id, callback) => {
    getcollection((db, collection) => {
        const query = {id: id};
        collection.find(query).toArray((err, result) => {
            callback(err, result);
            db.close();
        })
    })
}

const add = (alert, callback) => {
    getcollection((db, collection) => {
        collection.insertOne(alert, (err, res) => {
            callback(err, res);
            db.close();
        })
    })
}
