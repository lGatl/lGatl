import React, { Component } from "react";
import A from '../../components/A'
import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class Home extends Component {
	render(){
		return (
			<div>
				<Titre2>Home</Titre2><br/>
				gat_ui_react is a npm package of React Components for flexbox users. <br/>
				If you know CSS and Flexbox, you may prefer to keep control on it.<br/>

				<Titre3>Contribute</Titre3> <br/>
				If you want to contribute, welcome, you can fork this project on <A href="https://github.com/lGatl/gat-ui-react">https://github.com/lGatl/gat-ui-react</A>. <br/>
				<Titre3>How to use</Titre3><br/>
				<Code>npm install --save gat-ui-react</Code> <br/>
				<Titre3>Dependencies</Titre3><br/>
					This package need React <br/>
    			<Titre3>Author</Titre3><br/>
						Adrien GATINOIS <br/>
    				gat55@live.fr
			</div>	
		)
	}
}






