
	import React from 'react';
	import {FlowRouter} from 'meteor/kadira:flow-router-ssr';
	import {mount} from 'react-mounter';

	import {MainLayout} from '../layouts/MainLayout.js';

	import Accueil from '../pages/Accueil.js';
	import Cv from '../pages/Cv.js';
	import Contact from '../pages/Contact.js';
	import Travaux from '../pages/Travaux.js';
	import Formation from '../pages/Formations.js';
	import Experiences from '../pages/Experiences.js';
	import TravailDetail from '../components/TravailDetail.js';


	import {menu} from '../API/menu.js'

 FlowRouter.route('/', {
	 name: 'accueil',
	 action: function() {
	 	menu.actif.set('Accueil')
		 mount(MainLayout, {content: <Accueil titre1="Accueil"/>});
	 }
 });
 FlowRouter.route('/Cv', {
	 name: 'Cv',
	 action: function() {
	 	menu.actif.set('Cv')
		 mount(MainLayout, {content: <Cv titre1="Curriculum vitae"/>});
	 }
 });
FlowRouter.route('/Contact', {
	 name: 'Contact',
	 action: function() {
	 	menu.actif.set('Contact')
		 mount(MainLayout, {content: <Contact titre1="Contact"/>});
	 }
 });
FlowRouter.route('/Travaux', {
	 name: 'Travaux',
	 action: function() {
	 	menu.actif.set('Travaux')
		 mount(MainLayout, {content: <Travaux titre1="Travaux"/>});
	 }
 });
FlowRouter.route('/Formations', {
	 name: 'Formations',
	 action: function() {
	 	menu.actif.set('Formations')
		 mount(MainLayout, {content: <Formation titre1="Formations"/>});
	 }
 });
FlowRouter.route('/Experiences', {
	 name: 'Experiences',
	 action: function() {
	 	menu.actif.set('Experiences')
		 mount(MainLayout, {content: <Experiences titre1="Experiences"/>});
	 }
 });
FlowRouter.route('/Travaux/:titre', {
	name: 'Travail',
	action: function (params) {
		menu.actif.set('Travaux')
		mount(MainLayout, { content: <Travaux titre1="Travaux" titre={params.titre} /> });
	},
});
FlowRouter.route('/Experiences/:titre', {
	name: 'Travail',
	action: function (params) {
		menu.actif.set('Travaux')
		mount(MainLayout, { content: <TravailDetail titre1="Travaux" titre={params.titre} /> });
	},
});
