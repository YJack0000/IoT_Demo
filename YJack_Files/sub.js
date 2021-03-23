var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1224')
var topic = 'mqtt_test_123123123'

client.on('message', (topic, message) => {
    console.log(message)

    message = JSON.parse(message);
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect("mongodb://localhost:27017/db", (err, db) => {
        if (err) throw err;
        
        var dbo = db.db("mydb");
        dbo.collection("test").insertMany(message, function(err, result) {
            if (err) throw err;

            console.log("Number of documents inserted: " + result.insertedCount);
            db.close();
        });
    })
})

client.on('connect', ()=>{
    console.log('MQTT client connected');
    console.log('MQTT client subscribing to ' + topic + '...');
    
    client.subscribe(topic, (err, granted) => {
        if (err) {
            console.log('subscribe errors:', err);
        }
        
        if (granted) {
        console.log('subscribe granted:', granted);
        }
    });
})
