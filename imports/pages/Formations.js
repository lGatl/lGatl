import React, {Component} from 'react'
import {createContainer} from 'meteor/react-meteor-data';
import { Table,Segment } from 'semantic-ui-react'
import Titre2 from '../components/Titre2'
import Titre3 from '../components/Titre3'

import PropTypes from 'prop-types';

export default class Formations extends Component {



	render(){

		return (
			<div>
				<Titre2>Formations relative au Developpement Web</Titre2> <br/>

				<Segment>
					J'ai participé à la formation developpeur web de 6 mois proposée par <a href="http://www.webogreen.fr/">Webogreen</a> et dispensée par <a href="http://simplon.co/">Simplon</a>.
				</Segment>
				<Titre3><a href="http://simplon.co/">Simplon</a></Titre3>

				<Segment>
					<a href="http://simplon.co/">Simplon</a> nous proposant une formation à distance nous a appris Le HTML 5, le CSS 3, puis le Js (ecmascript 6) avec des exercices pratiques à difficulté croissante.
					On a aussi vu l'utilisation de framework tel que Bootstrap. On est ensuite passé par l'utilisation de meteor, de Node Js, puis de React Js, toujours avec des exercices concrets à difficulté croissante.
					En paralelle, on a aussi decouvert des methodes de versionnement tel que Git, et l'utilisation de Github.
				</Segment>

				<Titre3><a href="http://www.webogreen.fr/">Webogreen</a></Titre3>
				<Segment>
					<a href="http://www.webogreen.fr/">Webogreen</a> nous proposait de cadrer notre formation en alternance inversée (1 semaine presentiel, 3 semaines à distance), ce qui nous permettait d'avoir contact avec d'autres apprenants.
					WeboGreen nous proposa aussi d'autres modules supplementaires, tels que formation Photoshop, Illustrator, ou meme des modules "apprendre à gerer ses emotions", "apprendre à apprendre", "le mind mapping", la methode "Scrum".
					On nous a aussi présenté des outils tel que "trello", ou la methode de "Gantt".
				</Segment>
				<Titre3>Auto-formation</Titre3>
				<Segment>
					Lorsque j'étais Technicien de l'environnement, je me suis auto-formé au developpement sur VBA d'Excel afin de creer des outils permettant de faire gagner un temps considerable à mes collegues et à moi.
					<br/>Suite à cette ouverture dans le developpement, je me suis interessé au javascript, en essayant de creer quelques jeux, puis à Ruby on Rails dans le but de creer le prototype d'un site internet.
				</Segment>
				<Titre2>Autres Formations</Titre2> <br/>
				<Segment>
					Lors de mon cursus scolaire, aprés un Bac-S, j'ai intégré un DUT Genie Biologique, puis une licence pro Metrologie de la Qualité de l'Air.
				</Segment>

			</div>
		);
	}
}
