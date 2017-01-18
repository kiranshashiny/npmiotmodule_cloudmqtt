/* Here I am subscribing and publishing to events from the CloudMQTT broker, 
which is a third party cloud broker which is set up to send events.

This code uses the basic mqtt connection commands ( pulled from HiveMQ portal )

This is just a demo code to show the functionality of pub and sub.

One can extrapolate it to show other features and add more capabilities.

References :

https://www.npmjs.com/package/ibmiotf

https://github.com/mqttjs/MQTT.js/issues/364 - talks about how to stay in a loop 

Start the application on the laptop.

wait for the connected message on the xterm.

Now on the  cloudmqtt in the "WebSocket UI" look for the message in the "Received messages"

Publish something :  In the Send Message -> 
            Topic = "Hello",  
            Message = "Hello world"

*/


var mqtt = require('mqtt'),  url = require('url');

var url = "http://m12.cloudmqtt.com";

// This is from the Overview panel of the CloudMQTT console.
// Client ID has to be something unique, that identifies myapp.

var options = {
  port: 19757,
  clientId: "something",
  username: "oxefqvkn",
  password: "aKpQPSFiTpXp",
};

var client  = mqtt.connect(url, options)
 
client.on('connect', function () {
  console.log ("connected " );
    
    // Subscribe , and this is what you will enter in the Send Message window in the 
    // CloudMQTT Console.
    // Until this is received the control does not go anywhere.
  client.subscribe('/fromcloudmqtt');

  //client.subscribe('presence')
  //client.publish('/fromLaptop', 'Hello mqtt')

  // this message should appear on the CloudMQTT Console.

  client.publish("/tocloudmqtt",'{"d" : { "cpu" : 60, "mem" : 50 }}');
  
})
 
client.on('message', function (topic, message) {
 // subscribe to a topic from cloudmqtt 
 
  console.log (" received a message" + message);

  client.subscribe('hello/world', function() {
    // when a message arrives, do something with it
    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });

  // publish a message to a topic
  client.publish('hello/world', 'my message', function() {
    console.log("Message is published");
    client.end(); // Close the connection when published
  });
});
