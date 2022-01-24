let io = require('socket.io-client')
let socket = io.connect('http://localhost:3000')
Meteor.startup(() => {
  socket.on('connect', function() {
    console.log('Client connected');
  });
  socket.on('disconnect', function() {
    console.log('Client disconnected');
  });

});
export const CONSTANT_Socket = { 
	LOG_IN_SOCKET: "Socket_LOG_IN_SOCKET",
};

function logInSocket(val){
	socket.emit('login',{
			username:val
		})
	return {
		type: 		CONSTANT_Socket.LOG_IN_SOCKET,
		payload: 	val
	};
}

export const ACTION_Socket = { 
	logInSocket
};
