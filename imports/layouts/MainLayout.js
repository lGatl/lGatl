 import React from 'react';
 import SmartMenu from "../containers/SmartMenu.js"
  import Footer from "../components/Footer.js"
  import Titre1 from '../components/Titre1.js'



 export const MainLayout = ({ content }) => {

	return(

		<div className="main-layout">

			<div className="bodyLay">
				<header>
				<SmartMenu/>
				</header>
					{content}
				</div>
			<Footer></Footer>
		</div>

		 );
}
