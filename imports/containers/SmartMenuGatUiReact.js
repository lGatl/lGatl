import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'

 import SmartMenuGatUiReact from '../containers/SmartMenuGatUiReact.js'


export default class MenuSS extends Component {

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
					url:"/gat-ui-react/Home"
				},
				{
					title:"A",
					url:"/gat-ui-react/A"
				},
				{
					title:"Button",
					url:"/gat-ui-react/Button"
				},
				{
					title:"Calendar",
					url:"/gat-ui-react/Calendar"
				},
				{
					title:"Carrousel",
					url:"/gat-ui-react/Carrousel"
				},
				{
					title:"Checkbox",
					url:"/gat-ui-react/Checkbox"
				},
				{
					title:"Dropdown",
					url:"/gat-ui-react/Dropdown"
				},
				{
					title:"Form",
					url:"/gat-ui-react/Form"
				},
				{
					title:"Input",
					url:"/gat-ui-react/Input"
				},
				{
					title:"Menu",
					url:"/gat-ui-react/Menu"
				},
				{
					title:"Notification",
					url:"/gat-ui-react/Notification"
				},
				{
					title:"Popup",
					url:"/gat-ui-react/Popup"
				},
				{
					title:"Rating",
					url:"/gat-ui-react/Rating"
				},
				{
					title:"Segment",
					url:"/gat-ui-react/Segment"
				},
				{
					title:"Table",
					url:"/gat-ui-react/Table"
				},
				{
					title:"TextArea",
					url:"/gat-ui-react/TextArea"
				},
				{
					title:"Titre",
					url:"/gat-ui-react/Titre"
				},
				{
					title:"Titre1",
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
			if(display!=undefined?display:true){
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
 // var MenuS = createContainer( ()=>{

	//  return {

	// 	articles:{
	// 		recup1:articles.recup1,
	// 	}
	//  };

 // } , MenuSS );

 // export default MenuS;
