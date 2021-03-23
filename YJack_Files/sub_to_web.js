var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1224')
var topic = 'mqtt_test_123123123'


var express = require('express');
var app = express();

var tmp = ''

app.get('/', function (req, res) {
    res.send(tmp)
})

var server = app.listen(8081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
    
})

client.on('message', (topic, message) => {
    console.log(message)
    //res.send(message);
    tmp = message
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


