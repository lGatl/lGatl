import React, {Component} from 'react';

import { bindActionCreators }	from 'redux';
import { connect } from 'react-redux';

import { ACTIONS } from '../../6_actions/actions';
import { dateToFormat } from '../../8_libs/date';

import { Input, Button, Form } from 'gat-ui-react';

import InfiniteScroll from '../../containers/InfiniteScroll';

class ISTest extends Component {

	componentWillMount(){
		let { titrePage, activeMenu } = this.props;
		titrePage('Infinite scroll');
		activeMenu('Infinite scroll');
	}
		//Controle
	change(e,{ value, name, rating }){
		let { testControle } = this.props;
		testControle({ [name]:value||rating });
	}
	testAddAction(){
		let { testAdd } = this.props;
		let { test_controle } = this.props;
		testAdd({title: test_controle.titre, created_at: Date.now()});
	}
	testAdd100Action(){
		let { testAdd } = this.props;
			for(var i=0;i<100;i++){
				testAdd({title: i, created_at: Date.now()+i},()=>{

					if(i>99){
						window.location.reload();
					}
				});
			}
	}
	testRmAction(){
		let { testRmAll } = this.props;
				testRmAll();
	}
	formcache(){
		let { titre } = this.props.test_controle;
		let { active_user } = this.props;
		return active_user&&active_user.emails&&active_user.emails[0].address=="gat55@live.fr"?<div>
			<Form>
					<Input
						label = 'Titre'
						name = 'titre'
						value = { titre || '' }
						onChange = { this.change.bind( this ) }
					/>
				</Form>
				<Button
					onClick = { this.testAddAction.bind( this ) }
				>
					Add test
				</Button>
				<Button
					onClick = { this.testAdd100Action.bind( this ) }
				>
					Generate 100 tests and reload
				</Button>
				<Button
					onClick = { this.testRmAction.bind( this ) }
				>
					Remove all
				</Button>
		</div>:""
	}

	render(){
		let { titre } = this.props.test_controle;
		let { tests } = this.props;

		return (
			<div style={{marginTop:0}}>
				{this.formcache()}

				<InfiniteScroll 
					nbpp = {4}
					nb_charge={tests.length}
					nb_total={this.props.nb_tests}
					initFnt = {this.props.testGetSSL.bind(this)}
					addFnt = {this.props.testGetAddSSL.bind(this)}
					countFnt = {this.props.testCount.bind(this)}
					changePage = { this.props.setControle.bind(this)}
					page = {this.props.page}
				>
					{
						tests.map((test,i)=>{
							let {title} = test;
							return <div style={{
								border:'solid 1px black', 
								height:100,
								textAlign: 'center',
								fontSize:50
							}} key={i}>{title}</div>;
						})
					}
				</InfiniteScroll>
			</div>
		);
	}
}

function mapStateToProps( state ){
	return (
		{
			active_user: state.users.active_user,
			active_menu: state.menu.active_menu,
			tests: state.test.all,
			nb_tests: state.test.count,
			test_controle: state.test.controle,
			page: state.controle.page,

		}
	);

}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		setControle: ACTIONS.Controle.set,

		titrePage: ACTIONS.Titre.titrePage,
		activeMenu: ACTIONS.Menu.activeMenu,
	
		testAdd: ACTIONS.Test.add,
		testGetSSL: ACTIONS.Test.get_SSL,
		testGetAddSSL: ACTIONS.Test.getAdd_SSL,
		testCount: ACTIONS.Test.count,
		testRmAll: ACTIONS.Test.rmAll,

		testControle: ACTIONS.Test.controle,
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ISTest );
