# npmiotmodule_cloudmqtt


Module which publishes and subscribes to events from the Cloudmqtt broker.

The node js code prints the received events on the xterm as it arrives.



Prerequisites on the Broker : 

    An account on cloudmqtt.com ( Mine is KoolCat )

    Open the CloudMQTT console, and get the instance info like the server name,
    
    Port to connect to, username and the password. You will need this to feed into the nodejs code
    
    in order to subscribe to events to/from the Cloud broker/


<img width="838" alt="screen shot 2017-01-17 at 4 24 23 pm" src="https://cloud.githubusercontent.com/assets/14288989/22017804/cc2abdc8-dcd1-11e6-9bda-0e1004e28453.png">

<img width="963" alt="screen shot 2017-01-17 at 4 24 04 pm" src="https://cloud.githubusercontent.com/assets/14288989/22017805/cc79959c-dcd1-11e6-9cf5-689f3c66e9d8.png">

<img width="1102" alt="screen shot 2017-01-17 at 4 23 47 pm" src="https://cloud.githubusercontent.com/assets/14288989/22017806/cc7cbd58-dcd1-11e6-8f32-f59934abbc5c.png">




Prerequisites on the Device end:

    Arduino Genuino

    Arduino Ethernet shield 
    
    Temperature sensor DHT-11, or a simulated sensor ( random number generator. )

    Sketch to publish and subscribe data to the Cloudmqtt platform


Overall steps:
    
    Start the sketch and watch that the data is going to the Cloudmqtt platform

    Start the application node pubsub_cloudmqtt on the laptop or at the other end. In my case the laptop.
    
    and see it is subscribing to the events.

