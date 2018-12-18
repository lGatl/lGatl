export const CONSTANT_Controle = {
	CHANGE_PAGE: "Controle_CHANGE_PAGE",
	SET: "Controle_SET",
};


function set(val){
	return {
		type: 		CONSTANT_Controle.SET,
		payload: 	val
	};
}
function changePage(val){
	return {
		type: 		CONSTANT_Controle.CHANGE_PAGE,
		payload: 	val
	};
}

export const ACTION_Controle = { 
	changePage,
	set
};
