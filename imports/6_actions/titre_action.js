export const CONSTANT_Titre = { 
	TITRE_PAGE: "Titre_TITRE_PAGE",
};

function titrePage(val){
	return {
		type: CONSTANT_Titre.TITRE_PAGE,
		payload: val
	};
}

export const ACTION_Titre = { 
	titrePage,
};
