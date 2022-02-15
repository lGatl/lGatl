import "../5_methodes/methodes";
import { Meteor } from "meteor/meteor";
// import http from 'http';
import socket_io from "socket.io";
import { WebApp } from "meteor/webapp";

// const PORT = parseInt(process.env.SOCKET_PORT) || 3003;
const connections = [];
let users = {};
let user = "";
let stopTimer = false;
var timer;
let messagesToSend = [];

const cap = (word) => {
  if (typeof word === "string") {
    return word
      .split(" ")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(" ")
      .split("-")
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join("-");
  } else {
    return word;
  }
};

let THEMESSAGE = (messgs) => {
  return `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <title>Nouveauu message</title>
</head>
<body>
<section>
  <h1> Bonjour ! Du nouveau sur le tchat pour Paques </h1>
  ${messgs.reduce(
    (total,messg) =>{ 
      total+=`<p> Un nouveau message viens d'être posté par ${
          messg && messg.user && messg.user.username
            ? cap(messg.user.username)
            : "???"
        } : </p>
        <p>${messg && messg.message ? messg.message : "???"}</p>`
        return total
      }
  ,"")}
  </section>
</body>
</html>`;
};

Meteor.startup(() => {
  const io = socket_io(WebApp.httpServer);

  const save = Meteor.bindEnvironment((message) => {
    Meteor.call("addPaque", message);
  });
  const addMail = Meteor.bindEnvironment((message) => {
    messagesToSend.push(message);
    if (timer) {
      Meteor.clearTimeout(timer);
    }
    timer = Meteor.setTimeout(() => {
      sendMail();
    }, 1000*60*15);
  });
  const sendMail = Meteor.bindEnvironment(() => {
    Meteor.call("getUsersPaque", {}, null, (err, res) => {
      const to = res.reduce((total, aup) => {
        if (aup.mail) {
          total += aup.mail +"; "
        }
        return total;
      }, "");
      if (to.length && messagesToSend.length 
        ) {
        Meteor.call(
          "sendEmail",
          to,
          "admin@lgatl.fr",
          `Paques : Nouveau${messagesToSend.length > 1 ? "x" : ""} message${
            messagesToSend.length > 1 ? "s" : ""
          }`,
          THEMESSAGE(messagesToSend),
          (err, res) => {
            messagesToSend = [];
            if (err) {
              console.log("mail not send usr:", err);
            } else {
              console.log("SENT");
            }
          }
        );
      }
    });
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
      addMail(message);
    });

    socket.on("login", function (user) {
      // console.log("=============+>", user);
      me = user;
      if (me && me.username) {
        users[me.username] = me;
        io.emit("users", users);
        socket.emit("logged", me);
      }
    });

    socket.on("reload", function (message) {
      console.log("RELOAD");
      io.emit("reload");
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
