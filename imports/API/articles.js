
	const liste=new ReactiveVar([])
	const rev=new ReactiveVar([])

	const recup=(cbk)=>{
		Meteor.call('listeArticles',(err,res)=>{
			if(err){
				cbk()
				console.log('erreur dans recup')
			}else{
				if(res){
					cbk()
					liste.set(res)
					rev.set(res.reverse())
				}
			}
		})
	}
	const recup1=(article,cbk)=>{
		Meteor.call('getArticle',article,(err,res)=>{
			if(err){

			}else{
				if(res){
					cbk(res)

				}
			}
		})
	}
	const sauve=(aSauv)=>{
		Meteor.call('sauvegardeArticles',aSauv,(err,res)=>{
			if(err){
				console.log("err Sav")
			}else{}
		})
	}
	const supprime=(aSuppr)=>{
		Meteor.call('supprimeArticle', aSuppr ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'article" ,
					type:'error'
				})
			}else{}
		})
	}
	const ajout=(art,cbk)=>{
		Meteor.call('ajoutArticle', art ,(err,res)=>{
			if(err){
				cbk(err)
				Bert.alert({
					title:"Erreur",
					message:"Impossible d'ajouter l'article" ,
					type:'error'
				})
			}else{
				Bert.alert({
					title:"Article sauvegardé",
					message:"Votre article "+art.titre+" a été sauvegardé" ,
					type:'success'
				})
			}
		})
	}

	const supprimetout=()=>{
		Meteor.call('supprimetoutArticle' ,(err,res)=>{
			if(err){
				Bert.alert({
					title:"Erreur",
					message:"Impossible de supprimer l'article" ,
					type:'error'
				})
			}else{}
		})
	}

recup((res)=>{if(res){}})

export const articles={
	liste,
	rev,
	recup,
	sauve,
	supprime,
	ajout,
	recup1,
	supprimetout
}
