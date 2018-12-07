
import React, {Component} from 'react'
 import A from './A'
export default class Footer extends Component {

	click(){
		FlowRouter.go("/Contact")
	}
	render(){

		return (
			<footer style={{
				height:100,
				display:'flex',
				marginTop:"10px",
				backgroundColor:"rgba(181,204,24,1)",
				color:'white'
			}}>
				 
				<div style={{flex:1}}></div>
				<div style={{
					minWidth:150,
					display:'flex',
					flex:1, 
					alignItems:"center",
					justifyContent:"center"
				}}>
					<div style={{
						fontSize:"2em",
						color:"white",
						fontWeight:"bold",
					}}>
						lGatl			
					</div>
				</div>
						<div style={{
							minWidth:150,
							display:"flex",
							alignItems:"center",
							justifyContent:"flex-end",
							flex:1,
							fontSize:"2em",
							color:"white",
							fontWeight:"bold",
						}}>
							<A onClick={this.click.bind(this)}><i className="fa fa-envelope" aria-hidden="true"></i></A><span>   </span>
							<A href="https://www.linkedin.com/in/adrien-gatinois-2a54b8136/"><i className="fa fa-linkedin" aria-hidden="true"></i></A><span>   </span>
							<A href="https://github.com/lGatl"><i className="fa fa-github" aria-hidden="true"></i> </A>
						</div>

					
			</footer>

		);
	}
}
