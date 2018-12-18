import React, { Component } from "react";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import Titre4 from '../../components/Titre4'

import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class Methods extends Component {
	render(){
		return (
			<div>
				<Titre2>Methods</Titre2>
				<span style = {{
					display:"inline-block",
					color: "green",
					backgroundColor:"rgba(100,100,100,0.1)",
					padding:10,
					marginTop:10,
					borderRadius:10
				}}>!!! To get started, you don't need this explination page because actions are already waiting for you to use this methods !!!</span><br/>
				for each collection you will need, put his name capitalized in the "imports/5_methodes/methodes" <Code>COLLECTIONS</Code> array. 
				You will automitically dispose of methods.
				<Titre3>Automatical Methods </Titre3>
					for each collection you will need, put his name in the <Code>"imports/5_methodes/methodes"</Code> <Code>COLLECTIONS</Code> array. <br/> 
						You will automiticaly dispose of methods.
				
					<Titre4>add[COLLECTION]</Titre4>
					to inster an object in mongo database. 
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - object to add</li>
					</ul>
					<Code>Return</Code> : string - id of the new object
					<Titre4>get[COLLECTION]</Titre4>
					to get elements of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the search</li>
						<li><Code>ssl</Code> : object - means "sort, skip, limit" </li> 
					</ul>
					<Code>Return</Code> : array - found elements.
					<Titre4>get1[COLLECTION]</Titre4>
					to get one element of mongo database. 
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the search</li>
					</ul>
					<Code>Return</Code> : object - found elements.
					<Titre4>count[COLLECTION]</Titre4>
					to count elements of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the count</li>
					</ul>
					<Code>Return</Code> : integer - count of found elements.
					<Titre4>rm[COLLECTION]</Titre4>
					to remove elements of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the remove</li>
					</ul>
					<Code>Return</Code> : integer -  nb of removed item.
					<Titre4>up[COLLECTION]</Titre4>
					to update one element of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>reco</Code> : object - precise required parameters to filter the update</li>
						<li><Code>modif</Code> : object - new object</li>
					</ul>
					<Code>Return</Code> : string - id of updated.
					<Titre4>upm[COLLECTION]</Titre4>(depreciate for performance)
					to update elements of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the update</li>
					</ul>
					{/*<Code>Return</Code> : string - id of updated.*/}	
									<Titre4>ups[COLLECTION]</Titre4>
					to upsers elements of mongo database.
					<br/>Parameters:
					<ul>
						<li><Code>obj</Code> : object - precise required parameters to filter the update and inclued changes</li>
					</ul>
					<Code>Return</Code> : string - id of upserted.
				<Titre3>Add Method</Titre3>
				<Titre4>You can add method for all collections</Titre4>
				<PCode style = {{					
					backgroundColor:"rgba(100,100,100,0.1)",
					padding:10,
					marginTop:10,
					borderRadius:10
				}}>
				{
`[ "newMethod" + COLLECTION ]:(parameters)=>{
  return BD[COLLECTION]. //mongoMethod 
},`
				}
				</PCode>
				<Titre3>Add method for one existing or not collections</Titre3>
				You can declare Meteor methods and call them by the server.<br/>
				Just pay attention to use a not existing new Method name.
				
			</div>	
		)
		
	}
}


