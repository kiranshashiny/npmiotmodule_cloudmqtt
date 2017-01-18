/* Here I am subscribing and publishing to events from the CloudMQTT broker, 
which is a third party cloud broker which is set up to send events.

This code uses the basic mqtt connection commands ( pulled from HiveMQ portal )

This is just a demo code to show the functionality of pub and sub.

One can extrapolate it to show other features and add more capabilities.

References :

https://www.npmjs.com/package/ibmiotf

https://github.com/mqttjs/MQTT.js/issues/364 
        talks about how to stay in a loop 

Start the application on the laptop.

wait for the connected message on the xterm.

Now on the  cloudmqtt in the "WebSocket UI" look for the message in the "Received messages"

Publish something :  In the Send Message -> 
            Topic = "/fromcloudmqtt",  
            Message = "Hello world"

*/


var mqtt = require('mqtt'),  url = require('url');

var url = "http://m12.cloudmqtt.com";

// This is from the Overview panel of the CloudMQTT console.
// Client ID has to be something unique, that identifies myapp.

var options = {
  port: 19757,
  clientId: "uniqueClientID",
  username: "oxefqvkn",
  password: "aKpQPSFiTpXp",
};

var client  = mqtt.connect(url, options)
client.on('suback', function (topic, message) {
  console.log (" received an acknowledgement" + message);
})

/* not working...

client.on('connack', function (packet ) {
    console.log ( "received an ack");
})
*/

client.on('connect', function () {
  console.log ("connected " );
  client.subscribe ('test',{qos:1});
})

 
client.on('message', function (topic, message) {
  console.log (" In message() received a message " + message);
});
