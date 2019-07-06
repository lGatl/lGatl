import React, { Component } from "react";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import Titre4 from '../../components/Titre4'
import ExampleFrame from '../../components/ExampleFrame';
import Example from '../../components/Example';
import PCode from '../../components/PCode';
import Code from '../../components/Code';
import {A} from 'gat-ui-react'
import Ul from '../../components/Ul';
import Ol from '../../components/Ol';

export default class Usage extends Component {
	render(){
		return (
			<div>
				<Titre2>Usage</Titre2><br/>
				
				For each collection of the database you will need, put his name (first letter capitalized) in the <Code>"imports/5_methodes/methodes"</Code> <Code>COLLECTIONS</Code> array. 
				You will automitically dispose of methods, actions and reducers.
				
				<Titre3>Principle</Titre3>

					<Titre4>Organization of Actions</Titre4>

						In this folder <Code>"imports/6_actions/actions"</Code>, actions are automatically generate in the constant <Code>ACTIONS</Code> and their type in the constant <Code>CONSTANTS</Code>.<br/>
						<Code>ACTIONS</Code> is an object that contains one key by collections and each collection is an object that contains one key by action. <br/>
						<Example>
							If you need to get all articles, you have an action: <Code>ACTIONS.Article.get</Code> and their type <Code>CONSTANTS.Article.GET</Code>. <br/>
						</Example>

					<Titre4>Actions return</Titre4>

						Every function return a object with type from <Code>CONSTANTS</Code> and payload with 2 keys <Code>val</Code> and <Code>state</Code>. <br/>
						<Code>val</Code> will contain return of method and needed info from parameters. <br/>
						<Code>state</Code> if needed is used to precise where storing in the state, else it equals to <Code>null</Code>. <br/>
				
					<Titre4>Reducers</Titre4>
				
						<Code>CONSTANTS</Code> is imported from the action and used to identify passing actions and prepare the state. <br/>
				
					<Titre4>Organisation of the state</Titre4>

						Each key of the state corresponds to one string of <Code>COLLECTIONS</Code> (to lowercase()). <br/>
						<Example>
							The result of <Code>ACTIONS.Article.get</Code> is put in <Code>state.article.all</Code>.
						</Example>

				<Titre3>Automatical Actions</Titre3>

					<Titre4>Parameters and Suffix</Titre4>
						The last parameter of each action is a callback. <br/>
						You can use a suffix with your actions <Code>_SSL</Code> or <Code>_cstate</Code>.
						If you use a suffix, you add a parameter at your action. <br/>
						<Example>
							<Code>get_SSL</Code> means the second parameter will concern SSL. <br/>
							<Code>get_cstate</Code> means the second parameter will concern custom state. <br/>
							<Code>get_SSL_cstate</Code> means the second parameter will concern SSL and the third custom state. 
						</Example> <br/>
						<Code>_SSL</Code> : Add a parameter to precise sort, skip and/or limit (like used in mongoDB) <br/>
						<Example>
							<Code>{"{sort:-1,skip:10,limit:5}"}</Code>
						</Example><br/>
						<Code>_cstate</Code> : Add a parameter to precise where in the state you will storing. <br/>
						If <Code>null</Code>: you store as default. <br/>
						If <Code>string</Code> you store at <Code> state.[COLLECTION].string</Code>  <br/>
						If <Code>object</Code> you store at <Code> state.[COLLECTION].key.value</Code> 
						<Example>
							If you use <Code>ACTIONS.Article.get_SSL_cstate</Code> and you pass :
							<Ol>
								<li><Code>{"{published:true}"}</Code></li>
								<li><Code>{"{sort:-1,limit:10}"}</Code></li>
								<li><Code>{"tenlast"}</Code></li>
								<li><Code>{"(val)=>{console.log(val)}"}</Code></li>
							</Ol>
							 The ten last published articles will be store at <Code>state.article.tenlast</Code> and been console.logged by the callback.
						</Example>
					<Titre4>add</Titre4>
						To inster an object in a collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - object to add</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].all</Code> : array of objects <br/>
						<Code>state[COLLECTION].count</Code> : integer <br/>
						Possible suffixes: <br/>
						<Code>_cstate</Code>
					<Titre4>get</Titre4>
						To find objects in a collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - parameters to filter</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].all</Code> : array - array of objects <br/>
						Possible suffixes: <br/>
						<Code>_SSL</Code> & <Code>_cstate</Code>
						
					<Titre4>getAdd</Titre4>
						To find objects in a collection and add result at existing results.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - parameters to filter</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].all</Code> : array - array of objects <br/>
						Possible suffixes: <br/>
						<Code>_SSL</Code> & <Code>_cstate</Code>
						
					<Titre4>get1</Titre4>
						To find an object in a collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - parameters to filter</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].one</Code> : object <br/>
						Possible suffixes: <br/>
						<Code>_SSL</Code> & <Code>_cstate</Code>

					<Titre4>count</Titre4>
						To count objects in a collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - parameters to filter</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].count</Code> : integer <br/>
						Possible suffixes: <br/>
						<Code>_cstate</Code>
					<Titre4>rm</Titre4>
						To remove an object from a collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - parameters to filter the object to remove</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].all</Code> : array <br/>
						Possible suffixe: <br/>
						<Code>_cstate</Code>

					<Titre4>up</Titre4>
						To update an object in a Collection.
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>reco</Code> : object - parameters to filter the object to update</li>
							<li><Code>modif</Code> : object - contains the modifications to update</li>
						</Ul>
						Impact on state : <br/>
						<Code>state[COLLECTION].all</Code> : array <br/>
						<Code>state[COLLECTION].one</Code> : object <br/>
						Possible suffixe: <br/>
						<Code>_cstate</Code>

					<Titre4>controle</Titre4>
						To controle components that have a link with this collection. (for example in a form)
						<br/>Parameters:
						<Ul style={{marginTop:5,marginBottom:5}}>
							<li><Code>obj</Code> : object - same behavior as React setState, to controle React component</li>
						</Ul>
						<Code>Return</Code> : string - id of the new object
				<Titre3>Controle</Titre3>
				One action controle is created by database collection but <Code>ACTIONS</Code> has one key <Code>Controle</Code> too.
				You can use this to controle components that have link with no collection.

				<Titre3>Dispatch and mapState</Titre3>
					For actions to go through the reducers, you need to dispatch them. <br/>
					In your Smart Components, you have to import the constant <Code>ACTIONS</Code> <br/> 
					<Code>{`"import { ACTIONS } from '../6_actions/actions';"`}</Code> <br/>
					And in the function mapDispatchToProps in the first parameter of bindActionCreators, call functions you need
					<Example>
						<PCode>
{
`function mapDispatchToProps(dispatch){
  return bindActionCreators({
    testAdd: ACTIONS.Test.add,
    testGetSSL: ACTIONS.Test.get_SSL,
    testGetSSLState: ACTIONS.Test.get_SSL_cstate,
    testCount: ACTIONS.Test.count,

    testControle: ACTIONS.Test.controle,
  }, dispatch );
}`
}
						</PCode>
					</Example>
					Then you can call your actions in the component with <Code>this.props</Code>.
					<Example>
						<PCode>
{`this.props.testGetSSL({published:true},{sort:-1,limit:10},(val)=>{console.log(val)})`}
						</PCode>
					</Example>
						Then get the tests in <Code>state.test.all</Code> in the return of mapStateToProps function.
					<Example>
						<PCode>
{
`function mapStateToProps( state ){
  return (
    {
      tests: state.test.all,
    }
  );
}`
}
						</PCode>
					</Example>
					And finally use it in the component with <Code>this.props</Code>
					<Example>
						<PCode>
{`this.props.tests`}
						</PCode>
					</Example>

				<Titre3>Other Exemple</Titre3>

				You can see complete exemple concerning : <A style={{color:'rgb(181, 204, 24)',fontWeight:"bold"}} href='/chain-meteor-react-redux/Resize'>Resize</A>, <A style={{color:'rgb(181, 204, 24)',fontWeight:"bold"}} href='/chain-meteor-react-redux/InfiniteScroll'>InfiniteScroll</A> & <A style={{color:'rgb(181, 204, 24)',fontWeight:"bold"}} href='/chain-meteor-react-redux/Login'>Login</A>
			</div>	
		)
		
	}
}


