import { CONSTANT_Socket } from "../6_actions/socket_action";
import {set} from "../8_libs/obj"

const DEFAULTS = {
	new_user: {},
	users_logged:{},
	user_logged:null,
	messages:[],
	relog:false
};
export default function (state = DEFAULTS, action) {
	const messages = [...state.messages]
	switch (action.type) {
		case CONSTANT_Socket.RELOG_SOCKET:
		return {...state, relog:action.payload}
		case CONSTANT_Socket.LOGGED_SOCKET:
			return { ...state, user_logged:action.payload };
		case CONSTANT_Socket.LOGGED_OUT_SOCKET:
			return { ...state, user_logged:null };
		case CONSTANT_Socket.NEW_USER_SOCKET:
			return { ...state, new_user: action.payload };
		case CONSTANT_Socket.USERS_LOGGED_SOCKET:
			return { ...state, users_logged: action.payload };
		case CONSTANT_Socket.CLEAN_MESSAGES_SOCKET:
		return {...state,messages:[]}
		case CONSTANT_Socket.RECEIVE_NEW_MESSAGE_SOCKET:
				 messages.push(action.payload)
			return { ...state, messages };
		case CONSTANT_Socket.UPDATED_MESSAGE_SOCKET:

		const payload = {...action.payload}
		const _id = payload._id
		delete payload._id
		 message = messages.find(mes=>mes._id===_id)
		 if(message){
		 	Object.keys(payload).forEach(key=>{
				set(message,key,payload[key]) 
			})
		 }
			return { ...state, messages };
	}
	return state;
}
