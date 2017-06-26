import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import {Grid,Image,Container } from 'semantic-ui-react'
import Titre1 from '../components/Titre1.js'
import Titre2 from '../components/Titre2.js'
import Titre3 from '../components/Titre3.js'

import PropTypes from 'prop-types';

class C extends Component {

contenu(){
	return (
			<div>
				<br/>
				<Grid width={16}  >
						<Grid.Row >
							<Grid.Column mobile={16} tablet={6} computer={6}>
								<Container textAlign="justified">GATINOIS Adrien <br/>
								<span style={{color:"rgba(181,204,24,1)",fontWeight:"bold"}}>Développeur Web</span> <br/><br/>
								5 grande rue <br/>
								55500 Saint Amand sur Ornain<br/>
								<a href="mailto:gat55@live.fr">gat55@live.fr</a><br/>
								06/82/47/31/19<br/>
								<br/>
								LinkedIn:Adrien GATINOIS <br/>
								GitHub : <a href="https://github.com/lGatl">https://github.com/lGatl</a>
							</Container>
							</Grid.Column>

							<Grid.Column mobile={16} tablet={4} computer={4}>
							 <Image src='/images/photomoi.jpg' fluid />
							</Grid.Column>
							<Grid.Column mobile={16} tablet={6} computer={6} style={{textAlign:"right"}}>
								<Container textAlign="justified">Célibataire, 30 ans<br/>
								Permis B<br/>
								<br/>
								<br/>
								<br/>
								<br/>
								</Container>
							</Grid.Column>
						</Grid.Row>

				</Grid>
				<hr/>
					<Titre3>Expériences Professionnelles :</Titre3>
				<Grid >
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">Depuis 2017
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Adhésion à Coopetic et Création d'une entreprise de <b>Développeur Web</b>
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">De 2010 à 2016
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
							<Container textAlign="justified">Technicien Environnement - Société BioMonitor
							<ul>
								<li>Responsable de la serre </li>
								<li>Mise en culture des végétaux utilisés pour les mesures </li>
								<li>Prélèvements (sol, eau, bryophytes, légumes, graminées, lait, œuf) </li>
								<li>Métrologie par tubes passifs </li>
								<li>Rédaction de rapports </li>
								<li>Exploitation de lourds fichiers Excel (ex: données météo, AASQA) </li>
								<li>Relations avec les clients </li>
								<li>Responsable informatique </li>
								<li>CDD renouvelés plusieurs fois concrétisé en CDI</li>
							</ul>
							</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2010
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Stage Technicien - Société BioMonitor
								Sujet : Mise en place et suivi de différentes techniques de mesures de la qualité de l’air,
								des sols et des végétaux
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2007

								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Stage technicien (11 semaines) - Parc municipal de Jarny
								Sujet : inventaire botanique ainsi que proposition de sentier botanique et autres travaux divers
								</Container>
							</Grid.Column>
						</Grid.Row>

				</Grid>

				<hr/>
				<Titre3>Autres expériences :</Titre3>

				<Grid  >

						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">Emplois saisonnier

								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Ouvrier agricole – Conduite d’engins agricole, vendanges <br/>
								Courtes missions intérimaires <br/>
								Animateur dans un centre aéré
								</Container>
							</Grid.Column>
						</Grid.Row>

				</Grid>
				<hr/>
				<Titre3>Formations :</Titre3>

				<Grid  >

						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2016-2017
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Formation Développeur Web (6 mois) – <a href="http://simplon.co/">Simplon</a> – <a href="http://www.webogreen.fr/">Webogreen</a> – Bras Sur Meuse
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2010
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Licence Professionnelle Métrologie de la Qualité de l’Air
								- Université Paul Verlaine, IUT de Thionville – Yutz
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2008
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">Reçu aux épreuves écrites du concours de Technicien supérieur de l’industrie et des mines
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2007
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								<Container textAlign="justified">DUT génie biologique option environnent - Université Paul Verlaine, IUT de Thionville - Yutz
								</Container>
							</Grid.Column>
						</Grid.Row>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={3} tablet={3} computer={3}>
								<Container textAlign="justified">2006
								</Container>
							</Grid.Column>
							<Grid.Column mobile={13} tablet={13} computer={13}>
								 <Container textAlign="justified">Baccalauréat scientifique option biologie - Lycée Saint Louis de Bar le Duc
								 </Container>
							</Grid.Column>
						</Grid.Row>

				</Grid>
					<hr/>

					<Grid >

						<Grid.Row>
							<Grid.Column only="computer tablet" tablet={3} computer={3}></Grid.Column>
							<Grid.Column mobile={16} tablet={10} computer={10} style={{
								paddingBottom:"10px",
								backgroundColor:"rgba(24,180,204,0.1)",
								fontWeight:"bold",
							}}>


									<Titre3>Connaissances informatiques :</Titre3>
								<Grid>
									<Grid.Row >
										<Grid.Column mobile={7} tablet={6} computer={6}>
										<Container textAlign="justified">Technologies : <br/>
										<br/>
										<br/>
										<br/>
										<br/>
										<br/>
										Infographie : <br/>
										Bureautique :
										</Container>
										</Grid.Column>
										<Grid.Column mobile={9} tablet={10} computer={10}>
											<Container textAlign="justified">VBA,<br/>
											HTML, CSS, Js <br/>
											RUBY on Rails <br/>
											Meteor <br/>
											Node Js, React Js <br/>
											<br/>
											Photoshop, Gimp, Illustrator, Inskape <br/>
											MicrosoftOffice, LibreOffice
											</Container>
										</Grid.Column>
									</Grid.Row>
								</Grid>
							</Grid.Column>
							<Grid.Column only="computer tablet" tablet={3} computer={3}></Grid.Column>
						</Grid.Row>
						</Grid>
						<hr/>
						<Grid>
						<Grid.Row className="gridligcv">
							<Grid.Column mobile={8} tablet={8} computer={8} textAlign="center">
								<Container textAlign="justified"><Titre3>Langues :</Titre3>
									Anglais : niveau d'étude supérieur (bac+2) <br/>
									Allemand : niveau lycée
									</Container>
							</Grid.Column>
							<Grid.Column mobile={8} tablet={8} computer={8} textAlign="center">
								<Container textAlign="justified"><Titre3>Loisirs :</Titre3>
								Guitare (20 ans) <br/>
								Escalade, VTT <br/>
								Jardin, nature, pèche <br/>
								</Container>
							</Grid.Column>
						</Grid.Row>
				</Grid>
			</div>
		);
}
	render(){
		return(
			<div>
				<Titre1>Curicculum Vitae</Titre1>
				<Grid>
					<Grid.Row>
						<Grid.Column				tablet={2} 	  computer={3} only='tablet computer'></Grid.Column>
						<Grid.Column mobile={16} tablet={12} computer={10}>
							{this.contenu()}
						</Grid.Column>
						<Grid.Column 				tablet={2}   computer={3} only='tablet computer'></Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}

 export default Cv = createContainer( ()=>{

	return{
		prenom:"salut"}

 } , C );

