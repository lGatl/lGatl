import React, {Component} from "react";

import { Segment, Button, A } from "../../_common/4_dumbComponent/_gat_ui_react";

export default class CardUser extends Component {
	style(){
		return{
			champs:{display:"flex",flex:1, alignItems:"flex-start"},
			s_span:{marginRight:5}
		};
	}
	render(){
		let { champs, s_span } = this.style();
		let { username, nom, prenom, telephone, adresse, note, categories , email,date_val_resp, edit} = this.props;

		return (
			<Segment style={{overflow:"hidden", height:edit?"":300, width:260, ...this.props.style}}>
				<div style={{display:"flex",padding:10}}>
					<div style={{width:80, height:80, background:"url('/images/1.jpg') no-repeat center", backgroundSize: "cover"}}></div>
					<div style={{display:"flex", flex:1,flexDirection:"column",marginLeft:5}}> 
						
							
						{edit?<A href={this.props.href_user}>{prenom}</A>:<span style={{margin:1}}>{prenom}</span>}
						{edit?<A href={this.props.href_user}>{nom}</A>:<span style={{margin:1}}>{nom}</span>}
						{edit?<A href={this.props.href_user}>{username}</A>:<span style={{margin:1}}>{username}</span>}
							
						<span>{note}</span> 
					</div>
				</div>
				<div style={{display:"flex", padding:10,alignItems:"flex-start",paddingTop:5,paddingBottom:5}}><span> Categories :</span> <span style={{flex:1}}>{categories}</span></div>
				<div style={{display:"flex",flexDirection:"column", padding:10,maxHeight:69, overflow:"scroll", paddingTop:5, paddingBottom:5, borderTop:"1px solid rgba(150,150,150,0.5)"}}>
					<div style={{...champs}}><span style={{...s_span}}> courriel :</span> <span style={{flex:1}}>{email}</span></div>
					{telephone?<div style={{...champs}}><span style={{...s_span}}> telephone :</span> <span style={{flex:1}}>{telephone}</span></div>:""}
					{adresse?<div style={{...champs}}><span style={{...s_span}}> adresse : </span><span style={{flex:1}}>{adresse}</span></div>:""}
				</div>
				<div style={{display:"flex",flexDirection:"column", flex:1, justifyContent:"flex-end"}}>
					{this.props.editer?<Button onClick={this.props.editer.bind(this)}>Editer</Button>:""}
				</div>
				
			</Segment>
		);
	}
}

//<div style={{...champs}}><span style={{...s_span}}>Date de validité de votre responsabilité civil :</span> {date_val_resp} </div>
