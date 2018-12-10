/*C'est le bouton qu'on voit en premier ou lorsque on
 se deconnecte et qui nous permet de nous logguer avec github*/
import React,{ Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { ACTIONS } from "../../6_actions/actions";

import { Segment, Titre, Button, Note,Checkbox } from "../../_common/4_dumbComponent/_gat_ui_react";

import CardUser from "../../user/4_dumbComponent/CardUser";

import { goUserEdit } from "../../8_libs/go";
import { dateToFormat } from "../../8_libs/date";

import Resize from "../../_common/5_smartComponent/Resize";

class MesInformations extends Component{

	componentWillMount(){
		
		this.props.activeMenu("Mon Compte");
		this.props.activeMenuMonCompte("Mes informations");
		this.props.titrePage("Mes Informations");
		this.props.categorieGet({publier:true});

		this.props.transactionGetState({$or:[{"proposition.payeur":this.props.active_user?this.props.active_user._id:""},{"proposition.posteur":this.props.active_user?this.props.active_user._id:""}]});
	}
	style(){
		return {
			snotif:{
				alignItems:"center",
				display:"flex",
				flexDirection:"column",
				padding:10,
				margin:10
			}};
	}
	categories(categories){
		let { edit } = this.props;
		return <ul>
			{
				categories&&categories.length>0?categories.reduce((total,categorie,i)=>{
					let find = this.props.categories.find(cat=>cat._id==categorie);
					return find?[...total,
						<li key={i} >
							{find.titre}
						</li>]:total;
				},[]):""
			}
		</ul>;
	}
	telephone(telephone, show_telephone){

		return <div style = {{display:"flex", flex:1}}><div style={{flex:1}}>
			{telephone}
		</div><Checkbox
			style = {{margin:0}}		
			name = "show_telephone"
			checked = { show_telephone||"" }
			onChange = { ()=>{} }
		/></div>;
	}
	adresse(adresse,show_adresse){
		
		return <div style = {{display:"flex", flex:1}}><div style={{flex:1}}>
			{adresse}
		</div><Checkbox
			style = {{margin:0}}							
			name = "show_adresse"
			checked = { show_adresse||"" }
			onChange = { ()=>{} }
		/></div>;
	}
	render(){

		let { transactions } = this.props;
		let { snotif } = this.style();

		if(this.props.active_user){
			let { emails, profile, _id } = this.props.active_user;
			let debit = transactions.reduce((total,transaction)=>transaction.proposition.payeur==_id?transaction.proposition.prix+total:total,0);
			let credit = transactions.reduce((total,transaction)=>transaction.proposition.prestataire==_id?transaction.proposition.prix+total:total,0);
			return(	
				
				<div style={{display:"flex", flex:1, flexDirection:"column",padding:10}}>
					<div style = {{ 
						flexDirection:"row", 
						display:"flex", 
						justifyContent:"space-around", 
						padding:"10px 0 10px 0",
					}}>
						<Segment style ={{ padding:10,flexDirection:"column", display:"flex", alignItems:"center", justifyContent:"center"}}>
							<span>Mon solde</span> <span>{ profile?profile.solde:"" }</span>
						</Segment> 
						<Segment style ={{ padding:10,flexDirection:"column", display:"flex", alignItems:"center", justifyContent:"center"}}>
							<span>Total crédit</span>
							<span>{credit}</span>
						</Segment>
						<Segment style ={{ padding:10,flexDirection:"column", display:"flex", alignItems:"center", justifyContent:"center"}}>
							<span>Total débit</span>
							<span>{debit}</span>
						</Segment>
					</div>
					<CardUser
						nom = { profile?profile.nom:"" }
						prenom = { profile?profile.prenom:"" }
						note = {profile?<Note style = {{fontSize:25}} note={profile.note.reduce((total,note)=>total+note,0)/profile.note.length}/>:[]}
						categories = {this.categories(profile?profile.categories:"")}
						email = {emails&&emails.length>0?emails[0].address:""}
						telephone = {profile?this.telephone(profile.telephone,profile.show_telephone):""}
						adresse = { profile?this.adresse(profile.adresse,profile.show_adresse):"" }
						date_val_resp={ profile?profile.date_val_resp:"" }
						editer = {goUserEdit.bind(this,_id)}
						style = {{width:"100%", marginBottom:10}}
					/>
					<Titre>Notifications</Titre>
					<Segment style = {{...snotif}}>
						
						<span style={{padding:10}}>{dateToFormat(new Date(Date.now()-(3600000*24*1)))}</span>
						
						<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
							<span style={{fontWeight:"bold",padding:10}}>{Resize.ellipsis("jean.thirier@gmail.com",700,5,"...")}</span>	
							vous à fait une proposition pour l'annonce : 
							<span style={{fontWeight:"bold",padding:10}}>Tunage tracteur</span>
						</div>
					</Segment>
					<Segment style = {{...snotif}}>
						<span style={{padding:10}}>{dateToFormat(new Date(Date.now()-(3600000*24*3)))}</span>
						<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
							<span style={{fontWeight:"bold",padding:10}}>{Resize.ellipsis("tom.brunel@glive.com",700,5,"...")}</span>
								à accepté votre proposition pour l'annonce : 
							<span style={{fontWeight:"bold",padding:10}}>Tunage tracteur</span>
						</div>
					</Segment>
					<Segment style = {{...snotif}}>
						<span style={{padding:10}}>{dateToFormat(new Date(Date.now()-(3600000*24*7))),700,5,"",true}</span>
						<div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
							<span style={{fontWeight:"bold",padding:10}}>{Resize.ellipsis("patriciareg@gmail.fr",700,5,"...")}</span>
								à refusé votre proposition pour l'annonce : 
							<span style={{fontWeight:"bold",padding:10}}>Tunage tracteur</span>
						</div>
					</Segment>
				</div>
			);
		}return (<div>wait</div>);
	}
}

function mapStateToProps( state ){
	return (
		{
			resize: state.controle.resize,
			active_user: 	state.users.active_user,
			transactions: state.transaction.all,
			categories: state.categorie.all


		}
	);

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		titrePage: ACTIONS.Titre.titrePage,
		activeMenu: ACTIONS.Menu.activeMenu,
		activeMenuMonCompte: ACTIONS.Menu.activeMenuMonCompte,
		transactionGetState: ACTIONS.Transaction.get_state,
		categorieGet: ACTIONS.Categorie.get,

	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( MesInformations );
