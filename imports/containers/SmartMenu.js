import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'

export default class MenuS extends Component {

	constructor(){
		super()
	}

	menu(){return[

				{
					title:"Accueil",
					display:true,
					url:"/"
				},
				{
					title:"Formations",
					display:true,
					url:"/Formations"
				},
				{
					title:"Travaux",
					display:true,
					url:"/Travaux"
				},
				{
					title:"Expériences",
					display:true,
					url:"/Experiences"
				},
				{
					title:"Cv",
					display:true,
					url:"/Cv"
				},
				{
					title:"Contact",
					display:true,
					url:"/Contact"
				},
				{
					title:"gat-ui-react",
					display:true,
					url:"/gat-ui-react"
				}
		]
	}
	activeMenu( title, url, e ){
		e.preventDefault();
		if(title == "Logout"){
			this.props.logOut(()=>{FlowRouter.go("/");});
		}else if (url){
			// menu.setActif(title);
			FlowRouter.go(url);
		}
	}
	items(tab){
		return tab.map(({title, text, url, display, img, src, action, style}, i)=> {
			if(display){
				return	<Item
					img = {img?img:""}
					src = {src?src:""}
					active={false }
					onClick={this.activeMenu.bind(this,title,url)}
					key = { i }
					style = {style?style:""}>
					{ text?text:title }
				</Item>;
			}
		})
	}
	render(){
		return (
			<Menu row style = {{
				color:"white", 
				backgroundColor:"rgba(181,204,24,1)", 
				flexWrap: "wrap", 
				justifyContent:"flex-start"
				, ...this.props.style 
			}}>
				<Item 
				style={{fontWeight: "bold", height:50,cursor:"default"}}
				hover_style={{}}
				>

					lGatl
				</Item>
				{ 
					this.items(this.menu())
				}
			</Menu>
		);
	}
}
