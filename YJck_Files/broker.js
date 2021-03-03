var mosca = require('mosca')
var setting = { port: 1224 }
var broker = new mosca.Server(setting)

broker.on('ready', ()=>{
    console.log('broker is ready!')
})