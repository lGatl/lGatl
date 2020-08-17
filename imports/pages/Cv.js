import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import { ACTIONS } from "../6_actions/actions";

import Titre1 from '../components/Titre1.js'
import Page1 from '../components/Page1.js'
import Page2 from '../components/Page2.js'
import CvPdf from '../components/CvPdf.js'
import A from '../components/A.js'

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Loader from '../components/Loader.js'

//<img 
//alt={"Adrien GATINOIS"} 
//style={{width: "100%",height: "auto"}} 
//src='/images/photomoi.jpg'
//>

class CV extends Component {
	constructor(){
		super()
		this.state = {
			pdf:false
		}
	}
	componentWillMount(){
		this.props.setControle({generalMenu:'Cv'})
	}
	componentDidUpdate(prevProps, prevState){

		if(prevState.pdf===false && this.state.pdf===true){
			this._printDocument()
		}
	}

	recurshtml2can(pdf,inputs,count){
		let {controleSet,devis} = this.props
		html2canvas(inputs[inputs.length-count])
	      .then((canvas) => {
	        const imgData = canvas.toDataURL('image/png');
	        
	        pdf.addImage(imgData, 'JPEG', 0, 0,210,297);
	       count=count-1
	       	if(count>0){
	       		pdf.addPage()
						this.recurshtml2can(pdf,inputs,count)
	       	}else{
	       		pdf.save("CV_Adrien_GATINOIS_Developpeur_Web.pdf");
	        	this.setState({pdf:false})
	       	}
	        
	      })
	}
	_printDocument() {
		let {controleSet,devis} = this.props
		let inputs = document.getElementsByClassName("divToPrint")

			
    if(inputs!==null){
 			var count=inputs.length;
 			const pdf = new jsPDF();

 			for (let i = 1;i<=inputs.length;i++){
 				
 			}


 			//this.recurshtml2can(pdf,inputs,count,devis)
	    
    }
  }
	render(){
		return(
			<section style={{display:"flex",flexDirection:"column"}}>
				<Titre1><h1 style = {{margin:0,fontSize:"1em"}}>Curicculum Vitae</h1>
								<div style={{	
					position: "absolute",
					width:"100%",
					flex:1,
					display:this.state.pdf?"flex":"none",
					justifyContent:"center",
					alignItems:"center", 
					zIndex:80000,
					pointerEvents:"none",
					background:"rgba(100,100,100,0.3)",
					top:140,
					bottom:100,
				}}>
					
					<Loader/>
				
						
				</div>
				<div 
					onClick={()=>{this.setState({pdf:true})}}
					title="Telecharger la version imprimable en pdf"
					style = {{ 
						cursor:"pointer",
						marginLeft:10,
						width:50,
						height:50,
						backgroundSize:"contain",
						backgroundImage:"url('/images/printer.png')",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
					}}></div>
				</Titre1>

							<div style={{display:"flex",justifyContent:"center"}}>

								<div style={{display:"flex",flex:1, maxWidth:1000}}>
								
									{this.state.pdf?<CvPdf/>:<div style={{display:"flex", flexDirection:"column"}}>
															<Page1 paspdf/>
															<Page2 paspdf/>
														</div>}
								</div>
							</div>
			</section>
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

export default connect( mapStateToProps, mapDispatchToProps )( CV );
