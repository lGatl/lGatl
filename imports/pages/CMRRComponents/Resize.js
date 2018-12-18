import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } 				from "react-redux";

import Titre2 from '../../components/Titre2'
import Titre3 from '../../components/Titre3'
import ExampleFrame from '../../components/ExampleFrame';
import Example from '../../components/Example';
import PCode from '../../components/PCode';
import Code from '../../components/Code';

class Resize extends Component {
	render(){

		return (
			<div>
				<Titre2>Resize</Titre2><br/>
				You can put this component in your project to have access to the width of the page. <br/>
				And if you put it in the root of the layout you will have access to the width of the page everywhere in your app. <br/>
				Width of the page : {this.props.resize.windowwidth}
				<Example>
				<PCode>
					{
						EXAMPLE
					}
				</PCode>
					
				</Example>
			</div>	
		)
	}
}
 function mapStateToProps(state){
	return (
		{
			resize:state.controle.resize,
		}
	);
}

function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		
	}, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Resize );

const EXAMPLE = `import React, { Component }	from "react";
import { bindActionCreators }	from "redux";
import { connect } from "react-redux";
import { ACTIONS } from "../6_actions/actions";
import { throttle } from "../8_libs/throttle";

class Resize extends Component {
  constructor(){
    super();
    this.resize = throttle(this.resize.bind(this),40);
  }
  componentWillMount(){
    this.props.controleSet({resize:{windowwidth:window.innerWidth}});
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  //==============CONTROLE====================
  resize(){
    this.props.controleSet({resize:{windowwidth:window.innerWidth}});
  }
  render(){
  	//console.log(this.props.resize?this.props.resize.windowwidth:"")
    return (
      <div style={{}}>
      </div>
    );
  }
}
//Not needed, just ti show you how get the page width
function mapStateToProps(state){
  return (
    {
      resize:state.controle.resize,
    }
  );
}
function mapDispatchToProps( dispatch ){
	return bindActionCreators({
		controleSet: ACTIONS.Controle.set,
	}, dispatch );
}

export default connect( null, mapDispatchToProps )( Resize );

`
