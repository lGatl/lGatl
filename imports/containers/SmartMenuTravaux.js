import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'
import {articles} from '../API/articles.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

class MenuSS extends Component {

	constructor(){
		super()
		this.state={
			hover:false,
			marg:0,
			lastTo:0,
		}
		this.handleScroll = this.handleScroll.bind(this)
	}
	componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

	handleScroll() {
		this.setState({marg:window.scrollY})
		this.setState({lastTo:document.body.scrollHeight})
	}
	hover(param){
		this.setState({hover:param})
	}
	style(){
		return{
			item:{
				textAlign:"center",
				justifyContent:"center",
				border:"none",
				boxShadow:"none",
				color:"rgba(181,204,24,1)",
				cursor: "default",
				padding:0,
				minHeight:0
			}
		}

	}
	menu(donn){
		return donn.map(don=>{
			return {
				title:don.titre,
				display:true,
				url:"/Travaux/"+don.nom,
				style:{
					textAlign:"center",
					justifyContent:"center",
					border:"none",
					boxShadow:"none",
					fontSize:12,
					minHeight:0
				}
			}
		})
	}

	activeMenu( title, url, e ){
		e.preventDefault();
		if(title == "Logout"){
			this.props.logOut(()=>{FlowRouter.go("/");});
		}else if (url){
			FlowRouter.go(url);
		}
	}

	items(tab){

		return tab.map(({title, text, url, display, img, src, action, style}, i)=> {
			if(display){
				return	<Item
					img = {img?img:""}
					src = {src?src:""}
					active={this.state.activeItem === title }
					onClick={this.activeMenu.bind(this,title,url)}
					key = { i }
					style = {style?style:""}>
					{ text?text:title }
				</Item>;
			}
		})
	}

	render(){
		const { item } = this.style();
		const { activeItem, hover } = this.state || {}
		if(this.props.titre){
			var scroll = this.state.marg/3
				var marg = 10
		}else{
			var marg = 100
			var scroll= this.state.marg/1.5
		}
		let {hf,fo,vb} = this.props
		return (

				<Menu 
					style = {{
						animation:'menurond 0.5s linear',
						transition: 'margin 0.9s, border-radius 0.4s',
						borderRadius: hover?'5px 40px 5px 5px':'5px 5px 5px 5px',
						margin:10,
						marginTop:marg+"px",
	   				transform: `translateY(${scroll}px)` 
					}}>
					<div 
					onMouseEnter={this.hover.bind(this,true)}
          onMouseLeave={this.hover.bind(this,false)}>
					<Item style={{
						...item,
						fontSize:"1.1em",
						fontWeight:"bold",
						margin:5,
					}}>Langages du net</Item>
					<Item style={{
						...item,
						fontSize:"0.9em",
						margin:2,
					}}>Hors formation</Item>
					{this.items(this.menu(hf))}
					<Item style={{
						...item,
						fontSize:"0.9em",
						margin:2,
					
					}}>Dans le cadre de la formation Simplon</Item>
					{this.items(this.menu(fo))}
					<Item style={{
						...item,
						fontSize:"0.9em",
						margin:2,
						
					}}>VBA Excel</Item>
					{this.items(this.menu(vb))}
					<Item
					active={this.state.activeItem === 'Mosaique' }
					onClick={this.activeMenu.bind(this,"Mosaique",'Travaux')}
					style={{
							...item,
							fontSize:"1.1em",
							fontWeight:"bold",
							margin:5,
							cursor:"pointer"
						}}
				>Mosaique</Item>
				</div>
				</Menu>



		);
	}
}
 var MenuS = createContainer( ()=>{

	 return {

		articles:{
			recup1:articles.recup1,
		}
	 };

 } , MenuSS );

 export default MenuS;
