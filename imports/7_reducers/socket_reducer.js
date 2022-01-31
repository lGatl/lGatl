import { CONSTANT_Socket } from "../6_actions/socket_action";

const DEFAULTS = {
	new_user: {},
	users_logged:{},
	user_logged:null,
	messages:[]
};
export default function (state = DEFAULTS, action) {
	switch (action.type) {
		case CONSTANT_Socket.LOGGED_SOCKET:
			return { ...state, user_logged:action.payload };
		case CONSTANT_Socket.NEW_USER_SOCKET:
			return { ...state, new_user: action.payload };
		case CONSTANT_Socket.USERS_LOGGED_SOCKET:
			return { ...state, users_logged: action.payload };
		case CONSTANT_Socket.RECEIVE_NEW_MESSAGE_SOCKET:
		const messages = [...state.messages]
		 messages.push(action.payload)
			return { ...state, messages };
	}
	return state;
}
