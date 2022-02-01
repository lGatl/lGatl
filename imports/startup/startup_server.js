import "../5_methodes/methodes";
import { Meteor } from "meteor/meteor";
// import http from 'http';
import socket_io from "socket.io";
import { WebApp } from "meteor/webapp";

// const PORT = parseInt(process.env.SOCKET_PORT) || 3003;
const connections = [];
let users = {};
let user = "";

Meteor.startup(() => {
  const io = socket_io(WebApp.httpServer);

  const save = Meteor.bindEnvironment((message) => {
    Meteor.call("addPaque", message);
  });

  // New client
  io.on("connection", function (socket) {
    let me = null;
    // socket.room = socket.id;
    connections.push(socket);
    console.log("connected: %s sockets connected", connections.length);
    io.emit("users", users);

    //================================
    socket.on("message", function (message) {
      date = new Date();
      message.date = date;
        message.user = me;

      io.emit("message", message);
      save(message);
    });

    socket.on("login", function (user) {
      console.log("=============+>", user);
      me = user;
      if(me && me.username){
        users[me.username] = me;
      io.emit("users", users);
      socket.emit("logged", me);
      }
      
    });

    // Disconnect
    socket.on("disconnect", (data) => {
      if (me) {
        delete users[me.username];
        io.emit("users", users);
        //socket.emit("logged", null);
      }

      connections.splice(connections.indexOf(data), 1);
      console.log("Disconnected: %s sockets connected", connections.length);
    });
  });
});
