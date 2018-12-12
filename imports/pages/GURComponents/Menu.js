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
						With parameters mobile and right :
						<Menu mobile right style = {{
							top:0,
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
				<Titre3>Menu Children : </Titre3><br/>
					Give Items components (or others) to complete your Menu.
				<Titre3>Menu Optional Parameters : </Titre3><br/>
					<Code>row</Code> : boolean - To display this menue as row. Column without this parameter. <br/>
					<Code>mobile</Code> : boolean - To display a box and hide the menu. The menu is shown on the box click.<br/>
					<Code>right</Code> : boolean - Menu come from right else left (only if mobile parameter is present).<br/>
					<Code>style</Code> : object - Change the style of the menu.<br/>
					<Code>style_box</Code> : object - Change the style of the box.<br/>
					<Code>className</Code> : string - To give a className.<br/>

				<Titre3>Item Children : </Titre3><br/>
					Displayed if no image by the parameter img.<br/>
				<Titre3>Item Optional Parameters : </Titre3><br/>
				<Code>style </Code> : object - To specify the style of the Item.<br/>
				<Code>href</Code> : string - Items arent a link, if you want you can use the href of this link. <br/>
				<Code>onClick</Code> : function - If you want to controle what happend on click.<br/>
				<Code>img</Code> : string - To display a Image give src here.<br/>
				<Code>hover_style</Code> : object - To change the style of hovers Item. <br/>
				<Code>active</Code> : boolean - To know if this Item is active. <br/>
				<Code>active_style</Code> : object - To change the style of actives Item. <br/>
				
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
