import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';

import {Container,Image,Button} from 'semantic-ui-react'
 import MenuTravaux from '../components/MenuTravaux.js'
import Titre4 from './Titre4.js'
import Titre3 from './Titre3.js'

import PropTypes from 'prop-types';


export default class TravailDetail extends Component {

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
			<Container textAlign="justified" style={{
				margin:"20px",
				paddingTop:0
			}}>
				<Titre3>{this.props.article.titre}</Titre3>
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
				<Image src={this.props.article.image}></Image>
				<br/>
				<div style={{
					width:"100%",
					textAlign:"center"
			}}>{this.retour()}</div>

			</Container>
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

