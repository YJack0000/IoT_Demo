var mqtt = require('mqtt')

var client1 = mqtt.connect('mqtt://localhost:1234', {clientId : 'first_publisher'})

var topic = 'first_topic'
var option = {
    
    qos:1,
    retain:true
}

var counter = 0

client1.on('connect', ()=>{
    console.log("client1 connect!!");
    setInterval(()=>{
        console.log("sent");
        let message = {
            num : counter,
            str1 : 'hi'
        }
        client1.publish(topic, JSON.stringify(message), option);
        counter += 1;
    }, 2000);
})