import { CONSTANTS } from "../6_actions/actions";
import {set} from "../8_libs/obj"
const DEFAULTS = {
};
export const REDUCER_paque_add = ( state , action ) =>{
const all = [...state.all]
	switch ( action.type ) {
	case CONSTANTS["Paque"].UPDATED_MESSAGE_PAQUE:
	const payload = {...action.payload}
		const _id = payload._id
		delete payload._id
		 message = all.find(mes=>mes._id===_id)
		 if(message){
		 	Object.keys(payload).forEach(key=>{
		 		set(message,key,payload[key]) 
		 		
		 })}

			return { ...state, all };
	}
	return {...DEFAULTS, ...state};
};
