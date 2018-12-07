import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'
import {articles} from '../API/articles.js'
import {createContainer} from 'meteor/react-meteor-data';
import {menu} from '../API/menu.js'

 import SmartMenuGatUiReact from '../containers/SmartMenuGatUiReact.js'


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
	menu(){return[
				{
					title:"Home",
					display:true,
					url:"/gat-ui-react/Home"
				},
				{
					title:"A",
					display:true,
					url:"/gat-ui-react/A"
				},
				{
					title:"Button",
					display:true,
					url:"/gat-ui-react/Button"
				},
				{
					title:"Calendar",
					display:true,
					url:"/gat-ui-react/Calendar"
				},
				{
					title:"Carrousel",
					display:true,
					url:"/gat-ui-react/Carrousel"
				},
				{
					title:"Checkbox",
					display:true,
					url:"/gat-ui-react/Checkbox"
				},
				{
					title:"Dropdown",
					display:true,
					url:"/gat-ui-react/Dropdown"
				},
				{
					title:"Footer",
					display:true,
					url:"/gat-ui-react/Footer"
				},
				{
					title:"Form",
					display:true,
					url:"/gat-ui-react/Form"
				},
				{
					title:"Input",
					display:true,
					url:"/gat-ui-react/Input"
				},
				{
					title:"Item",
					display:true,
					url:"/gat-ui-react/Item"
				},
				{
					title:"Menu",
					display:true,
					url:"/gat-ui-react/Menu"
				},
				{
					title:"Note",
					display:true,
					url:"/gat-ui-react/Note"
				},
				{
					title:"Notification",
					display:true,
					url:"/gat-ui-react/Notification"
				},
				{
					title:"Popup",
					display:true,
					url:"/gat-ui-react/Popup"
				},
				{
					title:"Segment",
					display:true,
					url:"/gat-ui-react/Segment"
				},
				{
					title:"Table",
					display:true,
					url:"/gat-ui-react/Table"
				},
				{
					title:"TextArea",
					display:true,
					url:"/gat-ui-react/TextArea"
				},
				{
					title:"Titre",
					display:true,
					url:"/gat-ui-react/Titre"
				},
				{
					title:"Titre1",
					display:true,
					url:"/gat-ui-react/Titre1"
				},
		]
	}

	activeMenu( title, url, e ){
		e.preventDefault();
		if (url){
			this.setState({ activeItem: "gat-ui-react" })
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
		
			var marg = 10
			var scroll= 0//this.state.marg/1.5
		
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
				
					{this.items(this.menu())}
					
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
