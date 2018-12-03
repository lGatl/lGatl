
	const actif=new ReactiveVar('Accueil');
	const setActif = (item)=>{menu.actif.set(item)};

export const menu={
	actif,
	setActif,
}
