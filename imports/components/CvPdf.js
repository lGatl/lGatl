import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import Page1 from '../components/Page1.js'
import Page2 from '../components/Page2.js'
import Poppup from '../components/Poppup.js'
import A from '../components/A.js'

//<img 
//alt={"Adrien GATINOIS"} 
//style={{width: "100%",height: "auto"}} 
//src='/images/photomoi.jpg'
//>

class CvPdf extends Component {

	componentWillMount(){
		this.props.setControle({generalMenu:'Cv'})
	}

	render(){
		return(
			
			<div  style={{
				transition:"0.5s",
				boxShadow: "-1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset", 
				width:"100%",
				height:"100%",
				backgroundColor:"rgb(220,220,220)",
				alignItems:"center",
				justifyContent:"center",
				overflowY:"scroll",
				zIndex:99,


				...this.props.style
			}}
			>    
			<div  style={{
				
				transition:"0.5s",
				width:"100%",
				display:"flex",
				justifyContent:"center",
				flexDirection:"column",
				alignItems:"center",
			  height:"72cm",
			  minWidth:"30cm",

			  zIndex:999
			}}>

			<div className="divToPrint" ref={this.props.refPages} style={{
							display:"flex",
			        flexDirection:"column",
			        width:"21cm",
			        height:"29.7cm",
			        zIndex:9999,
			        padding:"2cm 2cm 2cm 2cm",
			        backgroundColor:"white",
			        fontVariant: "normal",
			        fontFamily: "sans-serif"
						}}>
					<Page1/>
				</div>
			<div  style={{

				transition:"0.5s",
				width:"100%",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
			  minHeight:"36cm",
			  minWidth:"30cm",

			  zIndex:60
			}}>

			<div className="divToPrint" ref={this.props.refPages} style={{
							display:"flex",
			        flexDirection:"column",
			        width:"21cm",
			        height:"29.7cm",
			        zIndex:9999,
			        padding:"2cm 2cm 2cm 2cm",
			        backgroundColor:"white",
			        fontVariant: "normal",
			        fontFamily: "sans-serif"
			        
						}}>
				<Page2/>
				</div>
				</div>
			</div>
			</div>

		)
	}
}
function mapStateToProps(state){
	return (
		{
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( CvPdf );


