import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import { Input, Button, Popup } from 'gat-ui-react'; 

import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'
import MyName from '../components/MyName.js'
import A from '../components/A.js'
import Bandeau from '../components/Bandeau.js'

class Bebe extends Component {
	constructor(){
		super()
		this.state = {
			fl:false,
			hover:false,
			hoverp:false,
			open:false
		}
	}
	componentDidMount() {
		let { getStateBebe } = this.props;
		getStateBebe({},"free_list")
	}
	change(e,{ value, name, rating }){
		let { controleBebe } = this.props;
		controleBebe({ [name]:value||rating });
	}
	onClick(){
		let { controleBebe } = this.props;
		this._addStateBebe()
		controleBebe({ input:"" });
	}
	onSuppr(_id){
		let { rmStateBebe } = this.props;
		this.closePoppup()
		this.setState({fl:false})
		rmStateBebe({_id},"free_list")
	}
	annule(){
		this.closePoppup()
		this.setState({fl:false})
	}
	mouseEnter(index){
		this.setState({hover:index})
	}
	mouseLeave(){
		this.setState({hover:false})
	}
	mouseEnterp(index){
		this.setState({hoverp:index})
	}
	mouseLeavep(){
		this.setState({hoverp:false})
	}
	openPoppup(fl){

		this.setState({open:true, fl})
	}
	closePoppup(){
		this.setState({open:false})
	}
	_addStateBebe(){
		let { input, addStateBebe } = this.props;
		addStateBebe({titre:input,date:Date.now(), suggestion:false},"free_list")
	}
	jour(j){
		switch(j){
			case 0:
				return "dimanche"
			case 1:
				return "lundi"
			case 2:
				return "mardi"
			case 3:
				return "mercredi"
			case 4:
				return "jeudi"
			case 5:
				return "vendredi"
			case 6:
				return "samedi"
			default:
			return "erreur jour"
		}
	}
	mois(m){
		switch(m){
			case 1:
				return "janvier"
			case 2:
				return "février"
			case 3:
				return "mars"
			case 4:
				return "avril"
			case 5:
				return "mai"
			case 6:
				return "juin"
			case 7:
				return "juillet"
			case 8:
				return "août"
			case 9:
				return "septembre"
			case 10:
				return "octobre"
			case 11:
				return "novembre"
			case 12:
				return "décembre"
			default:
			return "erreur jour"
		}
	}
	hourmin(hm){
		return hm < 10? "0"+hm:hm
	}
	contentPopup(fl){
		
		let date = new Date(fl.date)
		let date_string = this.jour(date.getDay())+" "+ date.getDate()+" "+this.mois(date.getMonth()+1)+" "+date.getFullYear()+ " à "+date.getHours()+ "h"+this.hourmin(date.getMinutes())

		return <div style = {{
			textAlign:"justify",
    	display: "flex", 
    	alignItems:"center", 
    	flexDirection:"column"
    }}>
      <span style ={{margin:10, textAlign:"justify", maxWidth:380}}>Attention, vous avez cliqué sur le boutton pour supprimer une ligne de la liste des cadeaux offerts.</span>
      <span style ={{margin:10, textAlign:"justify", maxWidth:380}}>Voulez-vous vraiment supprimer cette ligne :</span>
      <span style ={{margin:10, textAlign:"justify", maxWidth:380}}>{fl&&fl.titre?fl.titre:"non"}</span>
      <span style ={{margin:10, textAlign:"justify", maxWidth:380}}> enregistrée le </span>
      <span style ={{margin:10, textAlign:"justify", maxWidth:380}}>{date_string}</span>
      <div style = {{width:"100%", display:"flex", justifyContent:"space-around"}}>
      <div 	
      	onMouseEnter = { this.mouseEnterp.bind(this,1) } 
				onMouseLeave = { this.mouseLeavep.bind(this) } >	
	      <Button 
	      	style = {{backgroundColor:this.state.hoverp===1?"rgba(250,0,0,0.6)":"rgba(250,0,0,0.4)"}}
	      	onClick = {this.onSuppr.bind(this,fl._id)}>
	      	Oui, oui, merci !
	      </Button>
      </div>
       <div 
       	onMouseEnter = { this.mouseEnterp.bind(this,2) } 
				onMouseLeave = { this.mouseLeavep.bind(this) } >	
	      <Button 
		      style = {{backgroundColor:this.state.hoverp===2?"rgba(0,250,0,0.6)":"rgba(0,250,0,0.4)"}}
		      onClick = {this.annule.bind(this)}
	      >
	      	Ah non, non !
	      </Button>
      </div>
      </div>
    </div>
	}

	render(){
		let{ input, free_list } = this.props; 
		let{ open, fl } = this.state; 

		return (
			<section style={{display:"flex", flexDirection:"Column"}}>
			<Popup style={{flexDirection:"column"}} open = {open}>
				{fl?this.contentPopup(fl):""}
        </Popup>
        <div style={{
        	backgroundImage:"url(/images/bebe2.jpg)",
        	backgroundRepeat: "no-repeat", 
        	backgroundPosition:"center",	
        	backgroundSize: "cover", 
        	minHeight:350, 
        	display:"flex",
        	alignItems:"flex-start", 
        	flexDirection:"column", 
        	justifyContent:"flex-end"}}>
        	
				<Titre1 style={{backgroundColor:'none', fontSize:40, flex:"none"}}>Liste de Naissance</Titre1>
				<div style={{textAlign:"justify",
								padding:10,
								fontSize:20
								}}>
				{/*Dans quelques semaines notre petit bout 
								de chou tant attendu va pointer le bout de son nez et venir bouleverser notre vie.*/}
								Bonjour et bienvenue. Lila est arrivée ce 15 août à 6h37 du haut de ses 50 cm pour 4,170 kg. Elle et sa maman sont en très bonne santé, nous sommes très heureux. Si vous êtes ici, c'est parce que vous nous avez demandé ce que vous pourriez nous offrir à l'occasion de la naissance de notre bébé.
						</div>
        </div>
				<div style={{
					display:"flex", 
					flex:1,
					justifyContent:"center", 
					flexDirection:"column",
					backgroundColor:'rgba(0, 173, 193,1)'
			}}>
		

							
					{/*<img style={{opacity:0.4}}alt={"bebe"}src={"/images/bebe.jpg"}></img>*/}
							<Bandeau style={{backgroundColor:'white',paddingTop:20,paddingBottom:20}}>
								<div >
									
								<Titre3 style={{color:"black"}}>Pour ceux qui veulent faire simple</Titre3>
								<div style={{textAlign:"justify",
									padding:10,
									}}>
									Participer au financement des achats que nous avons effectué pour l'arrivée du bébé. 
								</div>

								</div>
							</Bandeau>
							<Bandeau style={{color:"white"}}>
								<div style={{textAlign:"justify",
									padding:10,
									}}>
					
									Il s'agit de notre siège auto très sécurisé, de notre sac à langer hyper pratique, du cododo, de la poussette trio, d'un siège de table, d'un stock de couches lavable...
								</div>
							</Bandeau>
							
							<Bandeau style={{backgroundColor:'white',paddingTop:20,paddingBottom:20}}>
								<div>
								<Titre3 style={{color:"black"}}>Suggestions</Titre3>
								<div style={{textAlign:"justify",
									padding:10,
									}}>
									Quelques idées de cadeaux dont on pourrait avoir besoin.
								</div>
								
								</div>
							</Bandeau>
							<Bandeau style={{color:"white"}}>
								<div style={{textAlign:"justify",
									padding:10,
									}}>
									
									<ul>
										<li>transat</li>
										<li>doudous</li>
										<li>turbulette</li>
										<li>sophie la girafe</li>
										<li>jeux de bain anti moisissure</li>
										<li>lit parapluie</li>
										<li>tapis d'éveil</li>
										<li>...</li>


									</ul>
								</div>
							</Bandeau>
							
						<Bandeau style={{backgroundColor:'white',paddingTop:20,paddingBottom:20}}>
						<div>
								<Titre3 style={{color:"black"}}>Ce que vous nous offrez</Titre3>
								<div style={{textAlign:"justify",
									padding:10,
									}}>
									Une liste dans laquelle vous pouvez indiquer 
									ce que vous nous offrez (et pourquoi pas le nombre) pour éviter que d'autres aient la même idée que vous 
									(c'est vrai, c'est quand même vous qui l'avez eu en premier ! ;) ).
							</div>
						</div>
						</Bandeau>
						<Bandeau style={{color:"white"}}>
								<div style={{
				display:"flex",
				flexDirection:"column",
				textAlign:"justify",
				padding:10, 
				flex:1
				}}>
				<div style={{display:'flex', flex:1, marginBottom:5, marginTop:15, alignItems:"center", flexDirection:"row"}}>
				<Input
					style={{flex: 1}}
					label = ""
					name = "input"
					placeholder="Ex : 2 doudous, une turbulette ..."
					value = { input||"" }
					onChange = { this.change.bind( this ) }
					/> 
					<div onMouseEnter = { this.mouseEnter.bind(this,"A") } 
								onMouseLeave = { this.mouseLeave.bind(this) } >
						<Button
			          onClick = { this.onClick.bind(this) }
			          style = {{backgroundColor:this.state.hover==="A"?"rgba(237, 220, 82,1)":"rgba(237, 220, 82,0.8)"}}
			      >
			        Ajouter
			      </Button>
					</div>
				</div>
				<ul style={{paddingInlineStart:0, display:"flex",flexDirection:"column"}}>
					{
						typeof free_list === "object" && free_list instanceof Array && free_list.length>0?
						free_list.map((fl,i)=>{
							let date = new Date(fl.date)
							let date_string = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()
							let hour_string = this.hourmin(date.getHours())+ "h"+this.hourmin(date.getMinutes())

							return <li key={i} style={{
								display:'flex', 
								flex:1, 
								marginBottom:20,
								alignItems:"center", 
								flexDirection:"row",
								listStyle: "none"
							}}>
							
								<div style={{
									height:6,
									width:6, 
									marginRight:10, 
									borderRadius:"50%", 
									backgroundColor:"white",
								}}></div>
							<div style={{display:"flex", flexDirection:"column", alignItems:"center", backgroundColor:"rgb(237, 220, 82)",padding:3, marginRight:5}}>
								<span style={{ color:"rgba(0, 173, 193,1)", fontSize:10,fontWeight:"bold"}}>{ date_string}</span>
								<span style={{ color:"rgba(0, 173, 193,1)", fontSize:10,fontWeight:"bold"}}>{ hour_string}</span>
							</div>
							<span style={{flex: 1,paddingRight:15}}>{ fl.titre}</span>
							<div 
								onMouseEnter = { this.mouseEnter.bind(this,i) } 
								onMouseLeave = { this.mouseLeave.bind(this) } >
								<Button
				          onClick = { this.openPoppup.bind(this,fl) }
				          style = {{backgroundColor:this.state.hover===i?"rgba(198, 0, 57,1)":"rgba(198, 0, 57,0.8)"}}
						      >
						        X
				      	</Button>
							</div>

						</li>})
						:""
					}
				</ul>
				

		</div>
						</Bandeau>
						<Bandeau style={{backgroundColor:'white',paddingTop:20,paddingBottom:20}}>
							<div style={{flex:1}}></div>
							<div style={{color:"black"}}>
							<span style={{ fontSize:40}}>Merci !</span><br/>
							<span style={{ fontSize:30, marginRight:5}}>Marie-Cécile & Adrien</span>
							</div>
						</Bandeau>


				</div>	
			</section>
		);
	}
}

function mapStateToProps(state){
	return (
		{
			input: state.bebe.controle.input,
			free_list: state.bebe.free_list
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		controleBebe: ACTIONS.Bebe.controle,
		addStateBebe: ACTIONS.Bebe.add_state,
		rmStateBebe: ACTIONS.Bebe.rm_state,
		getStateBebe: ACTIONS.Bebe.get_state,
		

	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Bebe );
