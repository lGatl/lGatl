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
			
			<div style={{
				transition:"0.5s",
				boxShadow: "-1px 2px 10px 3px rgba(0, 0, 0, 0.3) inset",
				display:"flex", 
				flexDirection:"column", 
				width:"100%",
				top:140,
				bottom:100,
				backgroundColor:"rgb(220,220,220)",
				alignItems:"center",
				justifyContent:"center",
				overflow:"scroll",
				position: "fixed",
				zIndex:50,
				left:0,

				...this.props.style
			}}
			>    
			<div  style={{

				transform:"translateY("+0*34+"cm)",
				transition:"0.5s",
				width:"100%",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
			  minHeight:"36cm",
			  minWidth:"30cm",
			  position: "absolute",
			 	left:0,
			  top:0,
			  zIndex:60
			}}>

			<div className="divToPrint" ref={this.props.refPages} style={{
							display:"flex",
			        flexDirection:"column",
			        width:"21cm",
			        height:"29.7cm",
			        position: "absolute",
			        zIndex:80,
			        padding:"2cm 2cm 2cm 2cm",
			        backgroundColor:"white",
			        fontSize:12
						}}>
					<Page1/>
				</div>
				<div  style={{

				transform:"translateY("+1*34+"cm)",
				transition:"0.5s",
				width:"100%",
				display:"flex",
				justifyContent:"center",
				alignItems:"center",
			  minHeight:"36cm",
			  minWidth:"30cm",
			  position: "absolute",
			 	left:0,
			  top:0,
			  zIndex:60
			}}>

			<div className="divToPrint" ref={this.props.refPages} style={{
							display:"flex",
			        flexDirection:"column",
			        width:"21cm",
			        height:"29.7cm",
			        position: "absolute",
			        zIndex:80,
			        padding:"2cm 2cm 2cm 2cm",
			        backgroundColor:"white",
			        fontSize:12
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


