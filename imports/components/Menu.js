import React, { Component } from 'react'
import { Menu, Segment,Image } from 'semantic-ui-react'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class MenuSS extends Component {

	constructor(){
		super()

		this.listeMenu=[
				{titre:"Accueil"},
				{titre:"Experiences"},
				{titre:"Formations"},
				{titre:"Travaux"},
				{titre:"Cv"},
				{titre:"Contact"}
		]
	}


	handleItemClick (e, { name }){
		e.preventDefault()

		var href=""
		if(name=="Accueil"){href="/"}
		if(name=="Experiences"){href="/Experiences"}
		if(name=="Formations"){href="/Formations"}
		if(name=="Travaux"){href="/Travaux"}
		if(name=="Cv"){href="/Cv"}
		if(name=="Contact"){href="/Contact"}

		FlowRouter.go(href)
			window.scrollTo(0, 0)
	}

	render(){

		return (

				<Menu stackable inverted color='olive' id="mennu" >
					<Menu.Item style={{fontWeight: "bold"}}>
						lGatl
					</Menu.Item>
					{
						this.listeMenu.map((it,i)=>{
							return(
								<Menu.Item name={it.titre}  key={i} active={it.titre === this.props.menu.actif} onClick={this.handleItemClick.bind(this)} />
							)
						})
					}
				</Menu>



		);
	}
}
 var MenuS = createContainer( ()=>{

	 return {

		menu:{
			actif:menu.actif.get()
		}
	 };

 } , MenuSS );

 export default MenuS;
