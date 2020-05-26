# Server-Sent Events (SSE) with node and react/react native

This project provides a simple example of using server-sent events in a client-server application. The server is implemented in express node js and the clients in react and react native. 

The server exposes an endpoint which every five seconds sends the current time to the subscribed clients.

## Demonstration
In both cases, browser and mobile, you can see the real time updating. 

Mobile:
![SSE - Mobile](https://i.imgur.com/2fJxlRo.gif)

Browser: ![enter image description here](https://i.imgur.com/01BTgqj.gif)

## Installing
Clone the repository.

### server
Install dependencies:

    npm install

To run:

    node index.js
    
   Access from:

    http://localhost:3001/
	
### client_react
Install dependencies:

    npm install

To run:

    npm start
    
   Access from:

    http://localhost:3000/

### client_reactNative
You should have expo installed. For Installing dependencies:

    npm install

To run:

    expo start