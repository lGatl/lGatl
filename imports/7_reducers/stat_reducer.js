import { CONSTANTS } from "../6_actions/actions";
const DEFAULTS = {

};

export default function (  state = DEFAULTS, action ) {
	
	switch ( action.type ) {
		
	case CONSTANTS.Stat.INFOS_GET:
		return { ...state, infos: action.payload  };
		break;	
	
	}
	return state;
}
