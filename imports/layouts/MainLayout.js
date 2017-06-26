 import React from 'react';
 import Menu from "../components/Menu.js"
  import Footer from "../components/Footer.js"
  import { Grid,Segment } from 'semantic-ui-react'
  import Titre1 from '../components/Titre1.js'



 export const MainLayout = ({ content }) => {




		return(

			<div className="main-layout">


			<div className="bodyLay">
			<Menu></Menu>
				<div id="ssmennu"></div>


						{content}


			</div>
		    	 <Footer></Footer>

		   </div>

		 );
}
