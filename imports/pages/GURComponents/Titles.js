import React, {Component} from "react";
import {Title} from 'gat-ui-react';
export default class TitleComponent extends Component {
	
	render(){
		return (
			<div>
			<Title>Salut</Title>
			<span style = {{
			    display: "block",
			    fontSize: "2em",
			    marginBlockStart: "0.67em",
			    marginBlockEnd: "0.67em",
			    marginInlineStart: "0px",
			    marginInlineEnd: "0px",
			    fontWeight: "bold",
			}}>
				Salut
			</span>
			<h1>
				Salut
			</h1>
			<h2>
				Salut
			</h2>
			<h3>
				Salut
			</h3>
			<h4>
				Salut
			</h4>
			<h5>
				Salut
			</h5>
			<h6>
				Salut
			</h6>
			</div>
		);
	}
}
