import React from "react";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } 	from "redux";
import ReduxPromise from "redux-promise";

import reducers from "../7_reducers";

import SmartMenu from "../containers/SmartMenu.js"
import Footer from "../components/Footer.js"
import Resize from "../containers/Resize";
import InitState from '../containers/InitState';
import Kon from '../containers/Kon';


var store={};

const composeEnhancers = composeWithDevTools({});

store = createStore(reducers,composeEnhancers(
	applyMiddleware(ReduxPromise)
));

 export const MainLayout = ({ content }) => {

	return(
		<Provider store={store}>	
			
			<div className="main-layout">
				<div className="bodyLay">
					<header>
					<InitState/>
					<SmartMenu/>
					<Kon/>
					<Resize/>
					</header>
						{content}
					</div>
				<Footer></Footer>
			</div>
		</Provider>
		 );
}
