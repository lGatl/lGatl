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

		if(prevState.pdf===false && this.state.pdf===true&& this.props.test!==true){
			this._printDocument()
		}
	}

	_printDocument() {
		let {controleSet,devis} = this.props

		let inputs = document.getElementsByClassName("divToPrint")

    if(inputs!==null){
    	window.scrollTo(0, 0)
    	/*if(screen.width < 1024) {
	        document.getElementById("viewport").setAttribute("content", "width=1200px");
	    }*/
 			let count=inputs.length;
 			let total=count;
 			const pdf = new jsPDF('p', 'mm', 'a4', true);//{compress: true}
 			let img_datas={}

 			for (let i = 1;i<=inputs.length;i++){
 				html2canvas(inputs[inputs.length-count])
	      .then((canvas) => {
	        img_datas = {...img_datas,[i]:canvas.toDataURL('image/png')};	

	        if(img_datas!==undefined&&typeof img_datas==="object"&&Object.keys(img_datas).length===total){
	        	Object.keys(img_datas).forEach((img,j)=>{
	        		pdf.addImage(img_datas[img], 'JPEG', 0, 0,210,297, undefined,'FAST');
	        		if(j<(total-1)){
	        			pdf.addPage()
	        		}else{
	        			pdf.save("CV_Adrien_GATINOIS_Developpeur_Web.pdf", {returnPromise:true}).then(()=>{
	        				this.setState({pdf:false})
	        			});
	        			 /*if(screen.width < 1024) {
						        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1");
						      }  */ 
	        		}
	        	})
	        }
				})
	       count--
	    }
 		} 
  }

  download() {
    if(screen.width < 1024) {
        document.getElementById("viewport").setAttribute("content", "width=1200px");
    }
    const data = document.getElementById('contentToConvert');
    let html2canvasOptions = {
      allowTaint: true,
      removeContainer: true,
      backgroundColor: null,
      imageTimeout: 15000,
      logging: true,
      scale: 2,
      useCORS: true
    };
      // Few necessary setting options
      const contentDataURL = canvas.toDataURL('image/png')
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      let heightLeft = imgHeight;
      let pdf = new jspdf('p', 'mm', 'a4', true); // A4 size page of PDF
      let position = 0;

      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, undefined,'FAST');
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, undefined,'FAST')
        heightLeft -= pageHeight;
      }
      pdf.save('resume.pdf'); // Generated PDF

      if(screen.width < 1024) {
        document.getElementById("viewport").setAttribute("content", "width=device-width, initial-scale=1");
      }
    }


	render(){
		return(
			<section style={{display:"flex",flexDirection:"column",flex:"1 1 0%"}}>
				<Titre1><h1 style = {{margin:0}}>Curicculum Vitae</h1>
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

				<div style={{display:"flex",justifyContent:"center",flex:"1 1 0%"}}>

					<div style={{display:"flex",flex:"1 1 0%", maxWidth:1000}}>
					
						{
							this.state.pdf||this.props.test?<CvPdf/>:<div style={{display:"flex", flexDirection:"column",flex:1}}>
												<div style={{}}><Page1 paspdf/></div>
												<div style={{}}><Page2 paspdf/></div>
												
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
