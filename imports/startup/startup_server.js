import "../5_methodes/methodes";
import { Meteor } from 'meteor/meteor';
// import http from 'http';
import socket_io from 'socket.io';
import { WebApp } from 'meteor/webapp';

// const PORT = parseInt(process.env.SOCKET_PORT) || 3003;
const connections = [];
let userIds = {};
let currUserId = '';

Meteor.startup(() => {

  const io = socket_io(WebApp.httpServer);

  // New client
  io.on('connection', function(socket) {
    socket.room = socket.id;
    connections.push(socket);
    console.log('connected: %s sockets connected', connections.length);

    socket.on('login',function(user){
      console.log(user)
    })
  
    // Disconnect
    socket.on('disconnect', data => {
      connections.splice(connections.indexOf(data), 1);
      console.log('Disconnected: %s sockets connected', connections.length);
    });
  });
});
