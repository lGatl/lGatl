export const LOCAL = false
let io = require("socket.io-client");
//"http://192.168.1.15:3000"
let socket = io.connect(LOCAL?"http://localhost:3000":'https://lgatl.fr');
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
	RECEIVE_NEW_MESSAGE_SOCKET:"Socket_RECEIVE_NEW_MESSAGE_SOCKET",
	CLEAN_MESSAGES_SOCKET:"Socket_CLEAN_MESSAGES_SOCKET",
	RELOG_SOCKET:"Socket_RELOG_SOCKET",
	RELOAD_SOCKET:"Socket_RELOAD_SOCKET"
};
function logInSocket(val) {
	socket.emit("login", val);
	console.log(val)
	return {
		type: CONSTANT_Socket.LOG_IN_SOCKET,
		payload: val,
	};
}
function reload() {
	console.log('Reload')
	socket.emit("reload");
	return {
		type: CONSTANT_Socket.RELOAD_SOCKET,
		payload: true,
	};
}

function cleanMessages(){
	return {
		type: CONSTANT_Socket.CLEAN_MESSAGES_SOCKET,
		payload: true,
	};
}
function relog(val){
	return {
		type: CONSTANT_Socket.RELOG_SOCKET,
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
	cleanMessages,
	emitMessage,
	logged,
	logInSocket,
	usersLogged,
	receiveNewMessage,
	relog,
	reload,
};
