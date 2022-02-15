import SimpleSchema from "simpl-schema";
export const COLLECTIONS = ["Users","Article","Test","Bebe","Paque","UsersPaque"];

const SCHEMA ={
	// Test : new SimpleSchema({
	// 	title: { type: String },
	// 	created_at: { type: Date }
	// }),
	
};
var BD = {};
COLLECTIONS.forEach((COLLECTION) =>{
	COLLECTION.toLowerCase() == "users" ? BD[COLLECTION] = Meteor[COLLECTION.toLowerCase()] : BD[COLLECTION] = new Mongo.Collection(COLLECTION.toLowerCase());
		
	Meteor.methods({
		[ "add" + COLLECTION ]:(obj)=>{ 
			return BD[COLLECTION].insert(obj); // retourne l'id du nouvel objet
		},
		[ "get" + COLLECTION ]:(obj={},ssl)=>{
			ssl = typeof (ssl) == 'object' && ssl !=null && Object.keys(ssl).length > 0 ?ssl:false
			if(ssl){
				return BD[COLLECTION].find(obj, ssl).fetch();
			}else{
				return BD[COLLECTION].find(obj).fetch();
			}
			 // retourne un tableau d'objets trouvés
		},
		[ "get1" + COLLECTION ]: (obj)=>{

			return BD[COLLECTION].findOne(obj); // retourne l'objet trouvé
		},
		[ "count" + COLLECTION ]:(obj)=>{
			return BD[COLLECTION].find(obj).count(); // retourne le compte d'éléments qui correspond à la condition de find
		},
		[ "rm" + COLLECTION ]:(obj)=>{
			return BD[COLLECTION].remove(obj); // retourne 1 si l'objet à été supprimé
		},
		[ "up" + COLLECTION ]:(reco,modif)=>{		
			let succed = BD[COLLECTION].update(reco,{$set:modif}); //retourne l'id de l'objet updaté => res.insertedId
			return succed == 1 ? BD[COLLECTION].findOne(reco)._id:null;
		},
		[ "upm" + COLLECTION ]:(reco,modif)=>{
			let succed = BD[COLLECTION].update(reco,{$set:modif},{multi:true});
			return succed != 0 ? BD[COLLECTION].find(reco).fetch().reduce((total,upd)=>[...total,upd._id],[]):[]; //retourne l'id de l'objet updaté => res.insertedId
		},
		[ "ups"+COLLECTION ]:(obj)=>{		
			return BD[COLLECTION].upsert(obj); //retourne l'id de l'objet upserté => res.insertedId
		},
	});

	SCHEMA[COLLECTION]?BD[COLLECTION].attachSchema(SCHEMA[COLLECTION]):"";

});
export {BD};
