import React, { Component } from "react";
import A from "../components/A.js";

export default class PrincipesListes extends Component {
	render() {
		const { contact } = this.props;
		return (
			<div>
				<ul>
					<li>
						<b>Inscriptions :</b>
						<ul>
							<li>
								<b>But :</b> Compter le nombre de couverts{" "}
							</li>
							<li>
								On indique ici la présence ou l'absence de nos plus proches
							</li>
							<li>
								Il est utile d'indiquer les absence afin de ne pas avoir à
								attendre leur réponse !
							</li>
						</ul>
					</li>
					<li>
						<b>Choses à apporter :</b>
						<ul>
							<li>
								<b>But :</b> Indiquer ce qu'on compte préparer/apporter pour que
								les autres sachent ce qui est deja prévu{" "}
							</li>
							<li>
								Exemple: ( 1 nbr gateau au chocolat ) ou ( 3 Kg pomme de terre )
							</li>
							<li>
								Et on peut cliquer sur "J'm'y colle" pour indiquer que quelqu'un
								s'en charge
							</li>
							<li> une seule personne peut s'y coller par ligne</li>
							<li>
								De cette facon si vous voulez apporter quelque chose et que vous
								voyez qu'il y a deja beaucoup de desserts, apportez plutôt une
								entrée. Ou si vous voulez apporter un gateau et qu'il y a deja
								plusieurs gateaux au chocolat, choisissez un autre parfum.
							</li>
						</ul>
					</li>
					<li>
						<b>Choses à faire le jour J : </b>
						<ul>
							<li>
								<b>But :</b> S'assurer qu'il y ai quelqu'un de prévu pour chaque
								chose à faire le jour J
							</li>
							<li>Exemple: (vaiselle)</li>
							<li>
								Et on peut cliquer sur "J'm'y colle" pour indiquer que quelqu'un
								s'en charge
							</li>
							<li> plusieurs personnes peuvent s'y coller par ligne</li>
						</ul>
					</li>
				</ul>
				Pour éviter les erreurs, je n'ai pour le moment pas mis la possibilité
				de supprimer quelque chose. Si vous trouvez ca necessaire, dites le
				moi. En attendant, demandez moi <A onClick={contact.bind(this)}>ici</A>{" "}
				ou dans le tchat de supprimer ce que vous souhaitez supprimer.
				<br />
				N'hesitez pas à poser des questions dans le tchat, la réponse peut
				certainement servir à d'autre. Sinon vous pouvez m'envoyer un{" "}
				<A onClick={contact.bind(this)}>mail</A>.<br />
				Encore une fois, je suis à l'écoute de toute remarque, idée, ...
			</div>
		);
	}
}
