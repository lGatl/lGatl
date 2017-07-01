
/*==================KONAMI CODE============================*/
var fkc=(kc)=>{
if (window.addEventListener) {
	var kkeys = [],
		konami = "38,38,40,40,37,39,37,39,66,65";
	window.addEventListener("keydown", function(e) {
		kkeys.push(e.keyCode);
		if (kkeys.toString().indexOf(konami) >= 0) {
			kkeys = [];/* important de vider la liste d'evenements pour avoir a refaire le code en entier)*/
			Bert.alert({
				title:"Konami Code",
				message:"Bon, c'est vrai, j'ai encore pas trop eu le temps, mais promis, je vais faire un truc sympa pour le konami code ;)" ,
				type:'info',
				icon:"fa-info"
			})
		};
	}, true);
};
}

export default fkc()
