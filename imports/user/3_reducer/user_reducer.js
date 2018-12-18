import { CONSTANTS } from "../../6_actions/actions";

const DEFAULTS = {
	active_user:{},
	all:[],
	one:{}
};
export const REDUCER_users_add = ( state , action ) =>{
	var all = [ ...state.all ] ;
	let active_user;
	switch ( action.type ) {
	case CONSTANTS["Users"].GET_ACTIVE_USER:
		return { ...state, active_user: action.payload  };
		break;
	case CONSTANTS["Users"].LOG_IN:
		return { ...state, active_user: action.payload  };
		break;
	case CONSTANTS["Users"].LOG_OUT:
		return { ...state, active_user: action.payload  };
		break;
	}
	return {...DEFAULTS, ...state};
};
