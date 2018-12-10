import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'
import Titre2 from '../../components/Titre2';
import Titre3 from '../../components/Titre3';
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class MenuComponent extends Component {

	constructor(){
		super()
		this.state = {
			active:"Home"
		}
	}
	itemsPrepare(){return[
				{
					title:"Home",
					text: "other text",
					url:"/"
				},
				{
					title:"Formations",
					href:"#"
				},
				{
					title:"Travaux",
					url:"/Travaux"
				},
				{
					title:"not display",
					display:false,
				}
		]}
	onClickItem({ title, url },e ){
		e.preventDefault();
		// You can use the url with a Router
		this.setState({active:title});
	}
	item(tab){
		let { active } = this.state;
		return tab.map(({
			title, text, url, display, img, src, href, style, hover_style,active_style
		}, i)=> {
			if(display!=undefined?display:true){
				return	<Item
					img = {img?img:""}
					src = {src?src:""}
					active={active == title }
					onClick={this.onClickItem.bind(this,{ title, url })}
					key = { i }
					href = {href} 
					hover_style = {hover_style}
					active_style = {active_style}
					style = {style}
					>
					{ text?text:title }
				</Item>;
			}
		})
	}
	render(){
		return (
				<div>
			<Titre2>Menu</Titre2><br/>
				A simple Menu easy to controle. <br/>
				<Titre3>Example :</Titre3>
				<ExampleFrame>
					<PCode>
						{EXEMPLE}
					</PCode>
					<div style={{display:"flex",flexDirection:"column"}}>
						With the parameter row on the Menu Component : <br/>
						<Menu row style = {{
							flex:1,
							color:"white", 
							backgroundColor:"rgba(24, 100, 250, 1)", 
							flexWrap: "wrap", 
							justifyContent:"flex-start",
							 ...this.props.style 
						}}>
							<Item 
								hover_style={{cursor:"default"}} 
								style = {{fontWeight: "bold", height:50}}
							>
								Not Used
							</Item>
							{ 
								this.item(this.itemsPrepare())
							}
						</Menu>
						<br/>
						Without the parameter row on the Menu Component :
						<Menu style = {{
							flex:1,
							color:"white", 
							backgroundColor:"rgba(24, 100, 250, 1)", 
							flexWrap: "wrap", 
							justifyContent:"flex-start",
							 ...this.props.style 
						}}>
							<Item 
								hover_style={{cursor:"default"}} 
								style = {{fontWeight: "bold", height:50}}
							>
								Not Used
							</Item>
							{ 
								this.item(this.itemsPrepare())
							}
						</Menu>
					</div>
				</ExampleFrame>
				<Code>this.state.active =</Code> { '"'+this.state.active+'"' } <br/>
				<Titre3>Parameters : </Titre3><br/>
				<Code>name</Code>: string - Identify your Menu. <br/>
				<Code>onChange</Code> : function - Controle your Menu with this parameter. She return the name and the value to controle easily this component. <br/>
				<Code>value</Code> : string - Put here the controled value. <br/>
				<Titre3>Optional Parameters : </Titre3><br/>
				<Code>label</Code> : string - Write a text before the Menu. <br/>
				<Code>placeholder</Code>: string - Precise a placeholder. <br/>
		</div>
		);
	}
}

const EXEMPLE = `import React, { Component } from 'react'
import { Menu, Item } from 'gat-ui-react'

export default class MenuComponent extends Component {

  constructor(){
    super()
    this.state = {
      active:"Home"
    }
  }
  //Prepare props of each item
  itemsPrepare(){return[
        {
          title:"Home",
          text: "other text",
          url:"/"
        },
        {
          title:"Formations",
          href:"#"
        },
        {
          title:"Travaux",
          url:"/Travaux"
        },
        {
          title:"not display",
          display:false,
        }
    ]}
  onClickItem({ title, url },e ){
    e.preventDefault();
    // You can use the url with a Router
    this.setState({active:title});
  }
  item(tab){
    //Prepare array of Item components and put parameters in
    let { active } = this.state;
    return tab.map(({
    	title, text, url, display, img, 
    	src, href, style, hover_style,active_style
    }, i)=> {
      if(display!=undefined?display:true){
        return  <Item
          img = {img?img:""}
          src = {src?src:""}
          active = {active == title }
          onClick = {this.onClickItem.bind(this,{ title, url })}
          key = { i }
          href = { href } 
          hover_style = { hover_style }
          active_style = { active_style }
          style = { style }
          >
          { text?text:title }
        </Item>;
      }
    })
  }
  render(){
    return (
      <Menu row style = {{
      	flex: 1,
        color: "white", 
        backgroundColor: "rgba(24, 100, 250, 1)", 
        flexWrap: "wrap", 
        justifyContent: "flex-start",
         ...this.props.style 
      }}>
        <Item 
          hover_style={{cursor: "default"}} 
          style = {{fontWeight: "bold", height:50}}
        >
          Not Used
        </Item>
        { 
          this.item(this.itemsPrepare())
        }
      </Menu>
    );
  }
}`
