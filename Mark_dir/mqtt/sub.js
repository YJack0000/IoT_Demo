var mqtt = require('mqtt');
var mongoose = require('mongoose');

var express = require('express')
, cors = require('cors')
, app = express();

app.use(cors());


var mongoDB = 'mongodb://127.0.0.1/subTest';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, (error) =>{
    if(error){
        console.log("db connect fail");
    }else{
        console.log("db connect ok");
    }

});

//Get the default connection
var db = mongoose.connection;

var Schema = mongoose.Schema;

var testSchema = new Schema({
    num : Number,
    str1 : String
})

var testModel = mongoose.model('firstModel', testSchema);

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var client1 = mqtt.connect('mqtt://localhost:1234', {clientId: 'first_subscriber'});

var option = {
    qos: 1
}

client1.on('connect', ()=>{
    console.log("success!");
    client1.subscribe('first_topic', option);
})

var ranNum = {num: 0, str1: ""};

client1.on('message', (topic, message, packet)=>{
    console.log(topic);
    var data = JSON.parse(message);
    console.log(JSON.parse(message));
    var testInstance = new testModel({
        num : data.num,
        str1 : data.str1
    })
    ranNum = testInstance

    testInstance.save(function (err) {
        if(err) return handleError(err);
        // save
    })
})







 
app.get('/getRandomNumber', function (req, res) {
   res.send(JSON.stringify(ranNum));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
 
})