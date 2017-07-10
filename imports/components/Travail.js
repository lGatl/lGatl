import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import {Segment,Image} from 'semantic-ui-react'
import TitreTravail from './TitreTravail.js'
import Titre3 from './Titre3.js'

import PropTypes from 'prop-types';
import {menu} from '../API/menu.js'

class Travai extends Component {


	afficher(){

		return(
			<Segment textAlign="center" className="SegTr" onClick={this.cliq.bind(this)}  style={{
				backgroundImage:"url('"+this.props.donnees.image+"')",
			}} >
				<div className="SegTrDiv">
					<div style={{
						position: "relative",
						height:"100%"
					}}>
						<div style={{
							position:"absolute",
							top:"50%",
							width:"100%",
							transform:"translateY(-50%)",
						}}>
							<TitreTravail>{this.props.donnees.titre}</TitreTravail>
							<span style={{
								fontWeight:"bold",
								color:"rgba(250,250,250,1)",
								textAlign:"center",
								textShadow:" 2px 1px rgba(50,50,50,1)"

							}}>{(this.props.donnees.description[0].slice(0, 50)+" ...")}</span>
						</div>
					</div>
				</div>
			</Segment>
		)
	}
	cliq(){
		FlowRouter.go("/Travaux/"+this.props.donnees.nom)
	}

	render(){
		return (
			<div style={{height:"100%"}}>{this.afficher()}</div>
		);
	}
}
 export default Travail= createContainer( ()=>{

 	return{

	}

 } , Travai );
