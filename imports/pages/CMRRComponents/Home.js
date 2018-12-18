import React, { Component } from "react";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import Titre4 from '../../components/Titre4'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

export default class Home extends Component {
	render(){
		return (
			<div>
				<Titre2>Home</Titre2>
				<Titre3>Description </Titre3>
				chain-meteor-react-redux called CMRR is my boilerplate. <br/>
				This boilerplate gives a ready system to chain Meteor, React & Redux. <br/>
				So you can easily begin developpement or add a collection in an existing project. <br/>
				Furthermore This project propose a convention every were in the project. it will be easy for you to work on a old project or continue a project of others developpers. <br/>
				
				<Titre3>GetStarted </Titre3>
				<ol style={{marginTop:0}}>
					<li>
						This technology use MongoDB, Npm & Meteor so you have to install this 3 packages before continue.
					</li>
					<li>
						You can clone or copy this project on Github.<br/>
						Go to the folder parent of your further project and<br/>
						<Code>git clone</Code>
					</li>
					<li>
					Rename your project <br/>
						<Code>mv chain-meteor-react-redux your-project-name</Code>
					</li>
					<li>
						Get in your project <br/>
						<Code>cd your-project-name</Code>
					</li>
						<li>
							reinit your project's git<br/>
							<Code>rm -rf .git</Code><br/>
							<Code>git init</Code>
						</li>
						<li>
							You have to install npm packages <br/>
							<Code>meteor npm install</Code><br/>
						</li>
						<li>
							Then it's a meteor Project, then you can run it. <br/>
							<Code>meteor run</Code><br/>
						</li>	
					</ol>
					<Titre3>Proposed conventions </Titre3>
						<li>Functions actions or React methods are named in kamelcase variable. ( onClick )</li>
						<li>constantes, in upperCase. ( NAME )</li>
						<li>others variables in snakeCase. ( articles_free )</li>

					<Titre3>Principle </Titre3>
					<Titre4>automatical methods, actions, reducers</Titre4>
						Meteor, React and Redux are chained then for each collection you will need, put his name capitalized in the <Code>"imports/5_methodes/methodes"</Code> <Code>COLLECTIONS</Code> array. <br/>
						You will automiticaly dispose of methods, actions and reducers already chained and named with all CMRR conventions.
						In fact methods, actions, reducers are automiticaly genereted for each strings in <Code>COLLECTIONS</Code>.<br/>
						For example : If you see <Code>COLLECTIONS</Code> = ["user", "article", "book"] <br/> 
						You know that you can get articles with <Code>getArticles</Code> that you can find <Code>ACTIONS.Article.get</Code>,it will call the Meteor Method <Code>getArticles</Code> and the result will be put in <Code>state.article.all</Code> .
						You know that you can rm book with <Code>rmBook</Code> that you can find <Code>ACTIONS.Book.rm</Code>, it will call the Meteor Method <Code>rmBook</Code> and the result will be seen in <Code>state.book.all</Code>.<br/>
						You know that you can controle inputs with <Code>userControle</Code> that you can find <Code>ACTIONS.User.controle</Code>, and the result will be seen in <Code>state.user.controle</Code>. <br/><br/>
					<Titre4>Customize methods, actions, reducers</Titre4>
						you can easy change or add method action or reducer.<br/>(advice: don't change but add ;) ) <br/>
					<Titre4>Controle Action</Titre4>
					You can find a controle action for each <Code>COLLECTIONS</Code> string.
					Controle actions behave like setState of React, they are used among others for controle React components like Inputs or Checkbox... <br/>

					<Titre3>organization of folders </Titre3>
					<Titre4>In the root </Titre4>
					<ul>
						<li><Code>.meteor</Code> : If you don't know don't touch here is meteor installation.</li> 
						<li><Code>client</Code> : If you don't know don't touch here is index files .css .html and .js (js call <Code>"../imports/1_startup/startup_client"</Code>).</li>
						<li><Code>imports</Code> : It's your work folder</li>
						<li><Code>node_modules</Code> : If you don't know don't touch here is npm installations .</li>
						<li><Code>public</Code> : here you put images needed in your application.</li>
						<li><Code>server</Code> : If you don't know don't touch here is the server's folder. By default He call <Code>"../imports/1_startup/startup_server"</Code>.</li>
					</ul> 
					<Titre4>imports</Titre4>
					<ul>
						<li><Code>1_startup</Code> : If you don't know don't touch startup_client call routes and startup_server call Meteor methods.</li> 
						<li><Code>2_routes</Code> : Here you will prepare your routes with the meteor package FlowRouter.</li>
						<li><Code>3_layout</Code> : Here you will prepare your layout, becarefull it's connected with Redux.</li>
						<li><Code>4_pages</Code> : Here you will prepare your main pages.</li>
						<li><Code>5_methodes</Code> : If you don't know don't touch. <Code>"imports/5_methodes/methodes"</Code> This folder contains CMRR preparation of Meteor methods.</li>
						<li><Code>6_actions</Code> : If you don't know don't touch. <Code>"imports/6_actions/actions"</Code> This folder contains CMRR preparation of actions. </li>
						<li><Code>7_reducers</Code> : If you don't know don't touch. <Code>"imports/7_reducers/reducers"</Code> This folder contains CMRR preparation of reducers.  </li>
						<li><Code>8_libs</Code> : contains some usefull functions.</li>
						<li><Code>_common</Code> : Folder for components or functionality who can't be put in a group.</li>
						<li><Code>user</Code> : Folder for components or functionality who can be put in user group.</li>
						<li><Code>...</Code> : You can create others folders if you can group components and functionality.</li>
					</ul> 
					<Titre4>_common or users or others</Titre4>
					<ul>
						<li><Code>1_methode</Code> : Prepare particular methods of this group.</li> 
						<li><Code>2_action</Code> : Prepare particular actions of this group.</li>
						<li><Code>3_reducer</Code> : Prepare particular reducers of this group.</li>
						<li><Code>4_dumbComponent</Code> : Put here no state components.</li>
						<li><Code>5_SmartComponent</Code> : Put here components  with state.</li>
					</ul> 
					
					<Titre3>Author </Titre3>
						Adrien GATINOIS <br/>
    				gat55@live.fr	
			</div>	
		)
		
	}
}


