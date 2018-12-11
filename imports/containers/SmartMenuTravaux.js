import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { Menu, Item } from 'gat-ui-react';

import { throttle } from "../8_libs/throttle";

class SmartMenuTravaux extends Component {

	constructor(){
		super()
		this.state={
			hover:false,
			marg:0,
			lastTo:0,
		}
		this.handleScroll = throttle(this.handleScroll.bind(this),20)
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
				nom:don.nom,
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

		return tab.map(({title, text, url, display, img, src, action, style, nom}, i)=> {
			if(display){
				return	<Item
					hover_style ={{color:'rgba(100,100,100,1)',fontWeight:"bold"}}
					active_style={{fontWeight:"bold"}}
					img = {img?img:""}
					src = {src?src:""}
					active = {this.props.travauxMenu === nom }
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
		let mobile = this.props.resize.windowwidth<600
		if(this.props.titre){
			var scroll = mobile?0:this.state.marg/3
				var marg = mobile?0:10
		}else{
			var marg = mobile?0:100
			var scroll= mobile?0:this.state.marg/1.5;
		}
		let {hf,fo,vb} = this.props
		
		return (

				<Menu mobile={mobile}
					style_box={{
						position:"fixed", 
						zIndex:9998,
						backgroundColor:"white",
						top:100 
					}}
					style = {{
						backgroundColor:"white",
						animation:'menurond 0.5s linear',
						transition: 'margin 0.9s, border-radius 0.7s, left 0.5s',
						borderRadius: hover?'5px 40px 5px 5px':'5px 5px 5px 5px',
						margin:10,
						top:mobile?0:"auto",
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
					active={this.props.travauxMenu === '' }
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
function mapStateToProps(state){
	return (
		{
			resize:state.controle.resize,
			travauxMenu:state.controle.travauxMenu

		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SmartMenuTravaux );
