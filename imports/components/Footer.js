
import React, {Component} from 'react'
 import { Grid, Segment} from 'semantic-ui-react'

export default class Footer extends Component {

	click(){
		FlowRouter.go("/Contact")
	}
	render(){

		return (


			<footer style={{
				marginTop:"10px"
			}}>
				 <Segment inverted color='olive' basic  >

						<Grid stretched>
							<Grid.Row style={{
										padding:"0",
								 }}>

								<Grid.Column tablet={5} 	  computer={4} only='tablet computer'>

								</Grid.Column>
								<Grid.Column mobile={4} tablet={6} 	  computer={8}>
									<Segment basic style={{
										textAlign:"center",
										fontSize:"2em",
										color:"white",
										fontWeight:"bold",
										paddingLeft:0,
										paddingRight:0
								 }}>lGatl

									
								 </Segment>
								</Grid.Column>
								<Grid.Column mobile={12} tablet={5} 	  computer={4}>
								<Segment basic className="adressfoot" style={{

										textAlign:"right",
										fontSize:"2em",
										color:"white",
										fontWeight:"bold",
										paddingLeft:0,
										paddingRight:0
								 }}>
								<a onClick={this.click.bind(this)}><i className="fa fa-envelope" aria-hidden="true"></i></a><span>   </span>
								 <a href="https://www.linkedin.com/in/adrien-gatinois-2a54b8136/"><i className="fa fa-linkedin" aria-hidden="true"></i></a><span>   </span>
								<a href="https://github.com/lGatl"><i className="fa fa-github" aria-hidden="true"></i> </a>
								</Segment>
								</Grid.Column>
							 </Grid.Row>
						</Grid>

					</Segment>
			</footer>

		);
	}
}
