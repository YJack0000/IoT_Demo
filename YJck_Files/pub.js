var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1224')
var topic = 'mqtt_test_123123123'
var message = 'Hello 你好'

client.on('connect', ()=>{
    setInterval(() => {
        var send_message = message+1
        client.publish(topic, send_message)
        console.log(send_message, 'is successfully sent!')
        message = message+1
    }, 1000);
})