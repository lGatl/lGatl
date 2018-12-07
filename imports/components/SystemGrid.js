import React, {Component} from 'react'
import Travail from './Travail.js'

export default class SystemGid extends Component {

	constructor(){
		super()
		this.state={ hover: false }
	}

	style(){ 
			let { hover } = this.state;
		return{
			display:"flex",
			flexWrap:"wrap",
			backgroundColor:hover?"rgba(24,180,204,0.2)":"rgba(24,180,204,0.1)",
			marginTop:10 ,
			marginBottom:10 ,
			padding:20,
			paddingRight:60,
			borderRadius: 15 ,
			transition: "all 0.4s",
			zIndex: 10,
			borderRadius:hover?"15px 75px 15px 15px":"15px 15px 15px 15px"
		}
	}
	hover(param){
		this.setState({hover:param})
	}
	render(){

		return (
				
					<div>
						<div 
							style={{...this.style()}} 
							onMouseEnter={this.hover.bind(this,true)}
	          	onMouseLeave={this.hover.bind(this,false)}
	          >
							{
								this.props.donnees.map((donn,i)=>{
									return(
										<div
											key={i}
											style={{
												height:"150px",
												margin:10,
												flex:1,
												minWidth: 200
											}}
										>
											<Travail donnees={donn} trvx></Travail>
										</div>
									)
								})
							}
					
						 </div>
					</div>
		);
	}
}




