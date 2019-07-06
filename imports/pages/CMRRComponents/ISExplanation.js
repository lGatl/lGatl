import React, { Component } from "react";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import PCode from '../../components/PCode';
import Code from '../../components/Code';
import Ul from '../../components/Ul';

export default class ISExplanation extends Component {
	render(){
		return (
			<div>
				<Titre2>Infinite scroll</Titre2><br/>
				The component infiniteScroll, was developed to work with CMRR system. <br/>
				He can pilote the loading of elements. <br/>
				
				<Ul><Titre3>He needs 8 parameters</Titre3>
					<li><Code>nbpp</Code> : number - number of elements per page </li>
					<li><Code>nb_charge</Code> : number - number of loaded elements</li>
					<li><Code>nb_total</Code> : number - number of elements to load, return of countFnt</li>
					<li><Code>initFnt</Code> : function - action to get first elements and initialize state with, this function has to be able to take parameter for sort, skip and limit</li>
					<li><Code>addFnt</Code> : function - action to get elements and add in the state, this function has to be able to take parameter for sort, skip and limit</li>
					<li><Code>countFnt</Code> : function - action to get the numer of elements to load</li>
					<li><Code>changePage</Code> : function - action to controle the number of the page</li>
					<li><Code>page</Code> : number - number of the page</li>
				</Ul>
				
				<Ul> <Titre3>Optional parameters</Titre3>
					<li><Code>condition</Code> : object - this object will be passed to functions (initFnt, addFnt & countFnt) to filter elements (if condition change, the list will be reinitialized) </li>
					<li><Code>reload</Code> : string - to force the reload (if reload change, the list will be reinitialized)  </li>
				</Ul>
				<ExampleFrame>
					<PCode>
						{EXAMPLE}	
					</PCode>
				</ExampleFrame>
			</div>
			
		)
		
	}
}

const EXAMPLE =`
import React, {Component} from 'react';
import { bindActionCreators }	from 'redux';
import { connect } from 'react-redux';

import { ACTIONS } from '../../6_actions/actions';

import InfiniteScroll from '../../containers/InfiniteScroll';

class InfiniteScrollExample extends Component {

  render(){
    let { tests } = this.props;

    return (
      <div style = {{marginTop:0}}>
        <InfiniteScroll 
          nbpp = {4}
          nb_charge = {tests.length}
          nb_total = {this.props.nb_tests}
          initFnt = {this.props.testGetSSL.bind(this)}
          addFnt = {this.props.testGetAddSSL.bind(this)}
          countFnt = {this.props.testCount.bind(this)}
          changePage = { this.props.setControle.bind(this)}
          page = {this.props.page}
        />
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
      </div>
    );
  }
}
function mapStateToProps( state ){
  return (
    {
      tests: state.test.all,
      nb_tests: state.test.count,
      page: state.controle.page,
    }
  );
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    setControle: ACTIONS.Controle.set,
    testGetSSL: ACTIONS.Test.get_SSL,
    testGetAddSSL: ACTIONS.Test.getAdd_SSL,
    testCount: ACTIONS.Test.count,
  }, dispatch );
}
export default connect( mapStateToProps, mapDispatchToProps )( InfiniteScrollExample );
`
