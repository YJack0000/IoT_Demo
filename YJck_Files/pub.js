var mosca = require('mosca')
var setting = { port: 1224 }
var broker = new mosca.Server(setting)

broker.on('ready', () => {
    console.log('broker is ready!');
})

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost:1224')
var topic = 'mqtt_test_123123123'
var message = 'Hello 你好'

client.on('connect', () => {
    console.log('Publisher connected');
    setInterval( ()=> {
        var readline = require('readline');
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question("publish data? (y/n)", function(ans) {
            if(ans == 'y'){
                publishMessage();
            }
            else { console.log('fine~'); }
        });
    }, 5000);
})

broker.on('clientConnected', function onClientConnected(client) {
    console.log('MQTT client connected, id', client.id);
});

broker.on('clientDisconnected', function onClientDisconnected(client) {
    console.log('MQTT client disconnected, id', client.id);
});

function publishMessage() {
    
    console.log('\n\n#########################################');
    console.log('MQTT broker sending message to board ..\n');
    

    var data = [
        { name: 'John', address: 'Highway 71'},
        { name: 'Peter', address: 'Lowstreet 4'},
        { name: 'Amy', address: 'Apple st 652'},
        { name: 'Hannah', address: 'Mountain 21'},
        { name: 'Michael', address: 'Valley 345'},
        { name: 'Sandy', address: 'Ocean blvd 2'},
        { name: 'Betty', address: 'Green Grass 1'},
        { name: 'Richard', address: 'Sky st 331'},
        { name: 'Susan', address: 'One way 98'},
        { name: 'Vicky', address: 'Yellow Garden 2'},
        { name: 'Ben', address: 'Park Lane 38'},
        { name: 'William', address: 'Central st 954'},
        { name: 'Chuck', address: 'Main Road 989'},
        { name: 'Viola', address: 'Sideway 1633'}
      ];
    
    client.publish(topic, JSON.stringify(data), () => {
      console.log('MQTT broker message sent');
    });
  }