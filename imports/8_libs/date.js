export const dateToFormat = date => {
	if(date instanceof Date && !isNaN(date.valueOf())){
		let jour = date.getDate();
		let mois = date.getMonth()+1;
		let annee = date.getFullYear();
		return jour +"/"+mois+"/"+annee;
}else{
		return "";
}
};

export const dateToString = (mdate, noDate) => {
	const date = new Date(mdate);
	let minutes = date.getMinutes() + "";
	minutes = minutes.length < 2 ? "0" + minutes : minutes;
	let day = date.getDate() + "";
	day = day.length < 2 ? "0" + day : day;
	let month = date.getMonth() + 1 + "";
	month = month.length < 2 ? "0" + month : month;
	return `${
		!noDate ? `${day}/${month}/${date.getFullYear()} ` : ""
	} ${date.getHours()}h${minutes}`;
};
