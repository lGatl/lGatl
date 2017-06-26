
import React, {Component} from 'react'
 import { Grid,Segment } from 'semantic-ui-react'

export default class Footer extends Component {


	render(){
		return (


			<footer style={{
				marginTop:"10px"
			}}>
				 <Segment inverted color='olive' basic  >

						<Grid stretched>
							<Grid.Row style={{
								 		paddingBottom:"0",
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
								 }}>lGatl</Segment>
								</Grid.Column>
								<Grid.Column mobile={12} tablet={5} 	  computer={4}>
								<span className="adressfoot" style={{

								 		fontSize:"1em",
								 		color: "white",
								 		
								 }}>
								courriel : <a href="mailto:gat55@live.fr">gat55@live.fr</a><br/>
								LinkedIn : <a href="https://www.linkedin.com/in/adrien-gatinois-2a54b8136/">Adrien GATINOIS </a><br/>
								GitHub : <a href="https://github.com/lGatl">https://github.com/lGatl</a><br/>

								</span>
								</Grid.Column>
							 </Grid.Row>
						</Grid>

  				</Segment>
			</footer>

		);
	}
}
