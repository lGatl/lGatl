import { CONSTANTS } from "../6_actions/actions";
const DEFAULTS = {
	titre_page:"",
	
};

export default function (  state = DEFAULTS, action ) {
	switch ( action.type ) {
		
	case CONSTANTS.Titre.TITRE_PAGE:
		return { ...state, titre_page: action.payload  };
		break;	
				
	}
	return state;
}
