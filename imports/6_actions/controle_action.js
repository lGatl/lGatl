export const CONSTANTE_Controle = { 
	RESIZE: "Controle_RESIZE",
	SCROLL: "Controle_SCROLL",
	CHANGE_PAGE: "Controle_CHANGE_PAGE",
	SET: "Controle_SET",
};

function resize(val){
	return {
		type: 		CONSTANTE_Controle.RESIZE,
		payload: 	val
	};
}
function set(val){
	return {
		type: 		CONSTANTE_Controle.SET,
		payload: 	val
	};
}
function scroll(val){
	return {
		type: 		CONSTANTE_Controle.SCROLL,
		payload: 	val
	};
}
function changePage(val){
	return {
		type: 		CONSTANTE_Controle.CHANGE_PAGE,
		payload: 	val
	};
}

export const ACTION_Controle = { 
	changePage,
	resize,
	scroll,
	set
};
