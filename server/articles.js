
const Articles = new Mongo.Collection("articles");

Meteor.methods({
	listeArticles:()=>{
	/*throw new Metheor.Error(500, "Desolé")*/
	return Articles.find().fetch()
	},
	getArticle: (nom)=>{
		var article=Articles.findOne({"nom":nom})
		return article;

	},
	testConnex:()=>{
		if (Meteor.userId()){
			return true
		}else{return false}
	},
	ajoutArticle:(nvlArticle)=>{
				Articles.insert(nvlArticle)
	},
	sauvegardeArticles:(aSauver)=>{
			articles=Articles.findOne({"titre": aSauver.titre})
		Articles.update({_id:articles._id},{$set:aSauver})
	},
	supprimeArticle:(id)=>{Articles.remove({_id:id})},
	supprimetoutArticle:()=>{Articles.remove({})}


});

