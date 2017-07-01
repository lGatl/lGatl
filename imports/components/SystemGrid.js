import { Grid } from 'semantic-ui-react'
import React, {Component} from 'react'
import Travail from './Travail.js'

export default class SystemGid extends Component {

	render(){

		return (
			<Grid stretched	>
				<Grid.Row className="cadremosq" >
					{
						this.props.donnees.map((donn,i)=>{
							return(
								<Grid.Column
									mobile={this.props.mobile?this.props.mobile:16}
									tablet={this.props.tablet?this.props.tablet:4}
									computer={this.props.computer?this.props.computer:4}
									key={i}
									style={{
										height:"150px",
										marginBottom:"10px",
									}}
								>
									<Travail donnees={donn} trvx></Travail>
								</Grid.Column>
							)
						})
					}

				 </Grid.Row>


			</Grid>
		);
	}
}




