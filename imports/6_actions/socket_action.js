const LOCAL = true
let io = require("socket.io-client");
let socket = io.connect(LOCAL?"http://192.168.1.15:3000":'https://lgatl.fr');
Meteor.startup(() => {
	/*socket.on("connect", function () {
		console.log("Client connected");
	});
	socket.on("disconnect", function () {
		console.log("Client disconnected");
	});*/
});
export const thisSocket = socket;
export const CONSTANT_Socket = {
	LOG_IN_SOCKET: "Socket_LOG_IN_SOCKET",
	LOGGED_SOCKET: "Socket_LOGGED_SOCKET",
	USERS_LOGGED_SOCKET: "Socket_USERS_LOGGED_SOCKET",
	NEW_USER_SOCKET: "Socket_NEW_USER_SOCKET",
	EMIT_MESSAGE_SOCKET:"Socket_EMIT_MESSAGE_SOCKET",
	RECEIVE_NEW_MESSAGE_SOCKET:"Socket_RECEIVE_NEW_MESSAGE_SOCKET"
};
function logInSocket(val) {
	socket.emit("login", val);
	return {
		type: CONSTANT_Socket.LOG_IN_SOCKET,
		payload: val,
	};
}
/*function unLog(){
	return {
		type: CONSTANT_Socket.LOGGED_SOCKET,
		payload: null,
	}
}*/
function emitMessage(obj, cbk = () => {}) {
	socket.emit("message", obj);
	return {
		type: CONSTANT_Socket.EMIT_MESSAGE_SOCKET,
		payload: obj,
	};
}
function logged(val) {
	return {
		type: CONSTANT_Socket.LOGGED_SOCKET,
		payload: val,
	};
}
function usersLogged(val, cbk = () => {}) {
	return {
		type: CONSTANT_Socket.USERS_LOGGED_SOCKET,
		payload: val,
	};
}
function receiveNewMessage(val, cbk = () => {}) {
	console.log(val)
	return {
		type: CONSTANT_Socket.RECEIVE_NEW_MESSAGE_SOCKET,
		payload: val,
	};
}
function newUser(obj, cbk = () => {}) {
	return {
		type: CONSTANT_Socket.NEW_USER_SOCKET,
		payload: obj,
	};
}

export const ACTION_Socket = {
	emitMessage,
	logged,
	logInSocket,
	usersLogged,
	receiveNewMessage
};
