import React, {Component} from 'react'
import {Button} from 'gat-ui-react'
import Titre4 from './Titre4.js'
import Titre3 from './Titre3.js'

import PropTypes from 'prop-types';


export default class TravailDetail extends Component {
	style(){ 
			
		return{
			backgroundColor:"rgba(24,180,204,0.1)",
			textAlign:"justify",
			margin:"10px",
			paddingTop:0,
			marginBottom:10 ,
			padding:20,
			borderRadius: 15 ,
			zIndex: 10,
			borderRadius:"15px 15px 15px 15px"
		}
	}
	clic1(){
		FlowRouter.go("/Travaux/")
	}

	retour(){
		if(this.props.tr){
			return(
			<Button onClick={this.clic1.bind(this)}>Retour</Button>
			)
		}else{

		}
	}
	afficher(){
		if(this.props.article){
			
			return(
				<div>
				
				<div style={{paddingTop:0,marginTop:"10px"}}>
				<Titre4>{this.props.article.titre} :</Titre4>
			<div style={{...this.style()}}>
				
				{this.props.article.description.map((des,i)=>{
						if(typeof(des)=='string'){
							return(
							<span key={i}>{des} </span>
							)
						}else if(typeof(des)=='object'){
							if(Object.keys(des)[0]=='G'){
								return(
									<span key={i} style={{fontWeight:"bold"}}>{des.G} </span>
								)
							}
							if(Object.keys(des)[0]=='S'){
								return(
									<span key={i} style={{textDecoration:"underline"}}>{des.S} </span>
								)
							}
							if(Object.keys(des)[0]=='br'){
									return(
										<br key={i} />
									)
							}
							if(Object.keys(des)[0]=='ul'){
								return(
									<ul key={i}>
									{des.ul.map((de,j)=>{
										return(
											<li key={"i"+i+"j"+j}>{de}</li>
										)
									})}
									</ul>
								)		
							}
						}
				})}
				<br/>
				{this.props.article.image?<img alt={this.props.article.titre}src={this.props.article.image}></img>:""}
				<br/>
				<div style={{
					width:"100%",
					textAlign:"center"
			}}>{this.retour()}</div>

			</div>
			</div>
			</div>
				)
		}
	}


	render(){

			return(
				<div>
					{this.afficher()}
				</div>


			)

	}
}

