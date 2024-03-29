/*Rassemble tous les reducers chaque fichier dans un objet differant du state*/
import { combineReducers } from "redux";

import { REDUCERS } from "./reducer";
import  MenuREDUCER from "./menu_reducer";
import  TitreREDUCER from "./titre_reducer";
import  ControleREDUCER from "./controle_reducer";
import  ErrorREDUCER from "./error_reducer";
import  SocketREDUCER from "./socket_reducer";

const ROOT_REDUCER = combineReducers({
	...REDUCERS,

	menu: MenuREDUCER,
	controle: ControleREDUCER,
	titre: TitreREDUCER,
	error: ErrorREDUCER,
	socket: SocketREDUCER
});
export default ROOT_REDUCER;
