import React, {Component} from 'react'
import Titre3 from '../components/Titre3.js'

export default class InscriptionControls extends Component {
	render(){
		
		return (
					<Fragment>
							{" "}
							<div
								style={{
									flex: 1,
									display: "flex",
									flexDirection: "column",
									justifyContent: "flex-start",
									margin: 5,
								}}
							>
								<Dropdown
									label="Selectionnez"
									name="taton"
									placeholder="Selectionnez qq"
									onChange={change.bind(this)}
									options={[
										{ value: "bernadette", text: "Bernadette" },
										{ value: "chantal", text: "Chantal" },
										{ value: "christine", text: "Christine" },
										{ value: "florance", text: "Florance" },
										{ value: "françois", text: "François" },
										{ value: "joel", text: "Joel" },
										{ value: "josette", text: "Josette" },
										{ value: "lydie", text: "Lydie" },
										{ value: "marie_france", text: "Marie_France" },
									]}
									value={taton || ""}
								/>
								{taton?.length ? (
									<Input
										style={{ flex: 1 }}
										label="Prenom de la personne à inscrire"
										name="personne"
										value={cap(personne) || ""}
										onChange={change.bind(this)}
									/>
								) : (
									""
								)}
								{taton?.length ? (
									<Checkbox
										label="Présent ?"
										name="present"
										checked={present ?? false}
										onChange={change.bind(this)}
									/>
								) : (
									""
								)}
							</div>
							{taton?.length && personne?.length ? (
								<Button onClick={() => {}}>
									{present ? "Sera Présent" : "Sera Abscent"}
								</Button>
							) : (
								""
							)}
						</Fragment>

		);
	}
}
