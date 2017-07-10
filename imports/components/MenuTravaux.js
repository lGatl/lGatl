import React, {Component} from 'react'
import { Segment,Menu } from 'semantic-ui-react'
import {articles} from '../API/articles.js'
import EventListener, {withOptions} from 'react-event-listener';

import {createContainer} from 'meteor/react-meteor-data';

class MenuTravau extends Component {

	constructor(){
		super()
		this.state={
			marg:0,
			lastTo:0,
		}
	}

	handleItemClick(e){
		this.setState({ activeItem: e })
		FlowRouter.go("/Travaux/"+e)
	}
	handleItemClick2(e){
		this.setState({ activeItem: e })
		FlowRouter.go("/Travaux/")
	}

	handleScroll() {
		this.setState({marg:window.scrollY})
		this.setState({lastTo:document.body.scrollHeight})
	}


	render(){
		const { activeItem } = this.state || {}
		if(this.props.titre){
			var scroll= this.state.marg/3
				var marg = 10
		}else{
			var marg = 100
			var scroll= this.state.marg/1.5
		}
		return (



	<Menu floated vertical fluid id="menut" className="menutt" style={{marginTop:marg+"px",
   	transform: `translateY(${scroll}px)` }}>
				<Menu.Item className="itmenu ">
				<EventListener
					target="window"
					onScroll={withOptions(this.handleScroll.bind(this), {passive: true, capture: false})}
				/>
					<Menu.Header style={{
						color:"rgba(181,204,24,1)",
						fontSize:"1.1em",
						fontWeight:"bold",
						cursor: "default",
					}}>Langages du net</Menu.Header>
					<Menu.Header style={{
						color:"rgba(181,204,24,1)",
						fontSize:"0.9em",
						cursor: "default",
					}}>Hors formation</Menu.Header>

					<Menu.Menu className="itmen">
						{this.props.hf.map((article,i)=>{
							return(
								<Menu.Item
									className="itmen"
									 key={i}
									 name={article.titre}
									 active={activeItem === article.nom}
									 onClick={this.handleItemClick.bind(this,article.nom)} />
								)
						})}
					</Menu.Menu>

					<Menu.Header style={{
						color:"rgba(181,204,24,1)",
						fontSize:"0.9em",
						cursor: "default",
					}}>Dans le cadre de la formation Simplon</Menu.Header>

					<Menu.Menu className="itmen">
						{this.props.fo.map((article,i)=>{
							return(
								<Menu.Item
									className="itmen"
									key={i}
									name={article.titre}
									active={activeItem === article.nom}
									onClick={this.handleItemClick.bind(this,article.nom)} />
								)
						})}
					</Menu.Menu>
				</Menu.Item>

				<Menu.Item className="itmenu">
					<Menu.Header style={{
						color:"rgba(181,204,24,1)",
						fontSize:"1.1em",
						fontWeight:"bold",
						cursor: "default",
					}}>VBA Excel</Menu.Header>

					<Menu.Menu className="itmen">
						{this.props.vb.map((article,i)=>{
						return(
							<Menu.Item
								className="itmen"
								key={i}
								name={article.titre}

								active={activeItem === article.nom}
								onClick={this.handleItemClick.bind(this,article.nom)} />
							)
						})}
					</Menu.Menu>
				<Menu.Item
				className="itmen"
				name={'Mosaique'}
				active={activeItem === 'Mosaique'}
				onClick={this.handleItemClick2.bind(this,'Mosaique')}
				style={{
						color:"rgba(181,204,24,1)",
						fontSize:"1.1em",
						fontWeight:"bold",
					}}
				>Mosaique</Menu.Item>
				</Menu.Item>

			</Menu>

		);
	}
}
 export default MenuTravaux= createContainer( ()=>{

	return{
		articles:{
			recup1:articles.recup1,
		}

	}

 } , MenuTravau );
