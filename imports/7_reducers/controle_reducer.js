import { CONSTANTS } from "../6_actions/actions";
const DEFAULTS = {};

export default function (  state = DEFAULTS, action ) {
	
	switch ( action.type ) {
		
	case CONSTANTS.Controle.CHANGE_PAGE:
		return { ...state, page: {...state.page, ...action.payload}  };
		break;	
	case CONSTANTS.Controle.SET:
	return { ...state,  ...action.payload };
		break;	
	
	}
	return state;
}
