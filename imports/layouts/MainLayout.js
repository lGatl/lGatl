 import React from 'react';
 import Menu from "../components/Menu.js"
  import Footer from "../components/Footer.js"
  import { Grid,Segment } from 'semantic-ui-react'
  import Titre1 from '../components/Titre1.js'



 export const MainLayout = ({ content }) => {



 	if(content.props.titre1=="Travaux"){
		return(

			<div className="main-layout">


			<div className="bodyLay">
			<Menu></Menu>
				<div id="ssmennu"></div>
				<Titre1>{content.props.titre1}</Titre1>

						{content}


			</div>
		    	 <Footer></Footer>

		   </div>

		 );
 	}else{
 		return(

			<div className="main-layout">


			<div className="bodyLay">
			<Menu></Menu>
				<div id="ssmennu"></div>
				<Titre1>{content.props.titre1}</Titre1>
				<Grid>
					<Grid.Row>
						<Grid.Column				tablet={2} 	  computer={3} only='tablet computer'></Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
						{content}
						</Grid.Column>
						<Grid.Column 				tablet={2}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>

			</div>
		    	 <Footer></Footer>

		   </div>

		 );

 	}
}
