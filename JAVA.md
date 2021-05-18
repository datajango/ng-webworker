
## Alternative Approach: The STOMP Protocol

WebSocket is a thin, lightweight layer above TCP. This makes it suitable for using "subprotocols" to embed messages. [STOMP](https://stomp.github.io/) is the Simple (or Streaming) Text Orientated Messaging Protocol. STOMP provides an interoperable wire format so that STOMP clients can communicate with any STOMP message broker to provide easy and widespread messaging interoperability among many languages, platforms and brokers.

## Websocket Push Notifications Idea

* Angular for the general front-end application
* SockJS for creating websocket communication
* Stomp over webosocket for receiving messages from a message broker
* Springboot Websockets
* Stomp Message Broker (the java related framework)

## What It Does

* Create a websocket connection when the view is loaded
* Create s stomp provider using that websocket
* Have my client subscribe to it
* Catch server pushed messages and update the angular view


[Using WebSocket to build an interactive web application](https://spring.io/guides/gs/messaging-stomp-websocket/)
[Angular Java Spring Boot Code Example](https://haseeamarathunga.medium.com/create-a-spring-boot-angular-websocket-using-sockjs-and-stomp-cb339f766a98)

[REAL-TIME IN ANGULAR: A JOURNEY INTO WEBSOCKET AND RXJS](https://javascript-conference.com/blog/real-time-in-angular-a-journey-into-websocket-and-rxjs/)
