import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import Titre1 from '../components/Titre1'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'
import AH2 from '../components/AH2'

import PropTypes from 'prop-types';

export default class Formations extends Component {

	style(){ return{
		backgroundColor:'rgba(24,180,204,0.07)',
		padding:20,
		margin:20,
		borderRadius:10,
		}}
	render(){

		return (
			<div>
				<Titre1>Formations</Titre1>
				<div style={{display:"flex", flexDirection:"Column"}}>
					<div style={{display:"flex", flex:1,justifyContent:"center"}}>
						<div style={{maxWidth:1000}} >
							<section >
								<Titre2>Développement Web</Titre2> <br/>

							<div style={{...this.style()}}>
								<div style={{textAlign:"justify"}}>
									J'ai participé à la formation développeur web de 6 mois proposée par <a href="http://www.webogreen.fr/">WebOgreen</a> et dispensée par <a href="http://simplon.co/">Simplon</a>.
								</div>
							</div>
							<Titre3><AH2 href="http://simplon.co/">Simplon</AH2></Titre3>

							<div style={{...this.style()}}>
								<div style={{textAlign:"justify"}}>
									<a href="http://simplon.co/">Simplon</a> me proposant une formation à distance m'a appris le HTML 5, le CSS 3, puis le JS (ecmascript 6) avec des exercices pratiques à difficulté croissante.
									j'ai aussi vu l'utilisation de framework tel que Bootstrap. Je suis ensuite passé par l'utilisation de météor, de NodeJS, puis de ReactJS, toujours avec des exercices concrets à difficulté croissante.
									En parallèle, j'ai aussi découvert des méthodes de versionnement tel que Git, et l'utilisation de Github.
								</div>
							</div>

							<Titre3><AH2 href="http://www.webogreen.fr/">WebOgreen</AH2></Titre3>
							<div style={{...this.style()}}>
								<div style={{textAlign:"justify"}}>
									<a href="http://www.webogreen.fr/">WebOgreen</a> m'a proposé de cadrer ma formation en classe inversée (1 en semaine en présentiel, 3 semaines à distance par mois), ce qui m'a permis d'avoir contact avec d'autres apprenants.
									WebOgreen m'a proposé aussi d'autres modules supplémentaires tels que des formations Photoshop, Illustrator, ou même des modules comme "apprendre à gérer ses émotions", "apprendre à apprendre", "le mind mapping", la méthode agile "Scrum".
									On m'a aussi présenté des outils de gestion de projet tel que "trello", ou le diagramme de "Gantt". Et pour finir, WebOgreen m'a même proposé un projet tutoré en relation avec la croix rouge de Damvillers.
								</div>
							</div>
							<Titre3>Auto-formation</Titre3>
							<div style={{...this.style()}}>
								<div style={{textAlign:"justify"}}>
									Lorsque j'étais technicien de l'environnement, je me suis auto-formé au développement sur VBA d'Excel afin de créer des outils permettant de faire gagner un temps considérable à mes collègues et à moi-même.
									<br/>Suite à cette ouverture dans le développement, je me suis interessé au javascript en essayant de créer quelques jeux, puis à Ruby on Rails dans le but de créer le prototype d'un site internet.
								</div>
							</div>
							</section>
							<section>
							<Titre2>Autres Formations</Titre2> <br/>
							<div style={{...this.style()}}>
								<div style={{textAlign:"justify"}}>
									Lors de mon cursus scolaire, aprés un Bac-Scientifique, j'ai intégré un DUT Génie Biologique, puis une licence pro Métrologie de la Qualité de l'Air.
								</div>
							</div>
							</section>
					</div>
				</div>
			</div>
		</div>
		);
	}
}
