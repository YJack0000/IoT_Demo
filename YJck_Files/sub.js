var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1224')
var topic = 'mqtt_test_123123123'

client.on('message', (topic, message)=>{
    message = message.toString()
    console.log(message)
})

client.on('connect', ()=>{
    client.subscribe(topic)
})