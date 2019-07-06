import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { Menu, Item } from 'gat-ui-react'

class SmartMenuCMRR extends Component {

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
				cursor: "default",
				padding:0,
				minHeight:0,
				marginTop:5
			}
		}
	}
	menu(){return[
			{
				title:"Home",
				url:"/chain-meteor-react-redux/Home"
			},
			{
				title:"Usage",
				url:"/chain-meteor-react-redux/Usage"
			},
			// {
			// 	title:"Methods",
			// 	url:"/chain-meteor-react-redux/Methods"
			// },
			// {
			// 	title:"Reducers",
			// 	url:"/chain-meteor-react-redux/Reducers"
			// },
			// {
			// 	title:"SmartComponents",
			// 	url:"/chain-meteor-react-redux/SmartComponents"
			// },
			{
				title:"Resize",
				url:"/chain-meteor-react-redux/Resize"
			},
			{
				title:"InfiniteScroll",
				url:"/chain-meteor-react-redux/InfiniteScroll"
			},
			{
				title:"Login",
				url:"/chain-meteor-react-redux/Login"
			},

		]
	}

	activeMenu( title, url, e ){
		e.preventDefault();
		if (url){
			this.setState({ activeItem: "chain-meteor-react-redux" })
			FlowRouter.go(url);
		}
	}

	items(tab){

		return tab.map(({title, text, url, display, img, src, action, style}, i)=> {
			if(display!=undefined?display:true){
				return	<Item
					hover_style ={{color:'rgba(100,100,100,1)',fontWeight:"bold"}}
					active_style={{fontWeight:"bold"}}
					img = {img?img:""}
					src = {src?src:""}
					active={this.props.CMRRMenu === title }
					onClick={this.activeMenu.bind(this,title,url)}
					key = { i }
					style = {this.style().item}>
					{ text?text:title }
				</Item>;
			}
		})
	}

	render(){
		const { item } = this.style();
		const { activeItem, hover } = this.state || {}
		let mobile = this.props.resize.windowwidth<700;
		
			var marg = 10
			var scroll= 0//this.state.marg/1.5
		
		let {hf,fo,vb} = this.props
		return (

				<Menu mobile={mobile}
					style_box={{
						position:"fixed", 
						zIndex:9998,
						backgroundColor:"white",
						top:100 }}
					style = {{
						backgroundColor:"white",
						animation:'menurond 0.5s linear',
						transition: 'margin 0.9s, border-radius 0.7s, left 0.5s',
						borderRadius: hover?'5px 40px 5px 5px':'5px 5px 5px 5px',
						top:mobile?0:"auto",
						margin:10,
						marginTop:marg+"px",
	   				transform: `translateY(${scroll}px)` 
					}}>
					<div style={{flex:1,padding:10}}
					onMouseEnter={this.hover.bind(this,true)}
          onMouseLeave={this.hover.bind(this,false)}>
				
					{this.items(this.menu())}
					
				</div>
				</Menu>



		);
	}
}
 function mapStateToProps(state){
	return (
		{
			resize:state.controle.resize,
			CMRRMenu:state.controle.CMRRMenu
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( SmartMenuCMRR );
