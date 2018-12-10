import { CONSTANTES } from "../../6_actions/actions";

const DEFAULTS = {
	active_user:{},
	all:[],
	one:{}
};
export const REDUCER_users_add = ( state , action ) =>{
	var all = [ ...state.all ] ;
	let prestataire_index;
	let payeur_index;
	let one;
	let active_user;
	switch ( action.type ) {
	case CONSTANTES["Users"].GET_ACTIVE_USER:
		return { ...state, active_user: action.payload  };
		break;
	case CONSTANTES["Users"].LOG_IN:
		return { ...state, active_user: action.payload  };
		break;
	case CONSTANTES["Users"].LOG_OUT:
		return { ...state, active_user: action.payload  };
		break;
	}
	return {...DEFAULTS, ...state};
};
