import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import TitreTravail from './TitreTravail.js'
import Titre3 from './Titre3.js'

import PropTypes from 'prop-types';
import {menu} from '../API/menu.js'

class Travai extends Component {

	constructor(){
		super()
		this.state={ hover: false }
	}

	style(){
		let { hover } = this.state;
		return {
		with_pic:{
			textAlign:'center',
			border: 'none',
			backgroundRepeat:'no-repeat',
			backgroundSize:'cover',
			backgroundPosition:'center center',
			height:'100%',
			padding:'0',
			boxShadow:hover?'1px 2px 1px rgba(100,100,100,0.3)':'2px 5px 4px rgba(100,100,100,0.5)',
			transition: 'all 0.4s',
			borderRadius:'8px'
		},
		over_pic:{
			position: "relative",
			height:"100%",
			borderRadius:'8px',
			backgroundColor:hover?'rgba(50,74,24,0.2)':'rgba(50,74,24,0.6)',
			height:'100%',
			cursor:'pointer',
			transition: 'all 0.4s'
		}
	}}
	hover(param){
		this.setState({hover:param})
	}


	afficher(){
		let { with_pic, over_pic } = this.style()

		return(
			<div 
				onClick={this.cliq.bind(this)}  
				style={{...with_pic,
					backgroundImage:"url('"+this.props.donnees.image+"')"
				}}
				onMouseEnter={this.hover.bind(this,true)}
		    onMouseLeave={this.hover.bind(this,false)}
	    >
					<div style={{
						...over_pic
					}}>
						<div style={{
							position:"absolute",
							top:"50%",
							width:"100%",
							transform:"translateY(-50%)"
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
