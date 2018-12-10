
	import React from 'react';
	import {FlowRouter} from 'meteor/kadira:flow-router';
	import {mount} from 'react-mounter';

	import {MainLayout} from '../layouts/MainLayout.js';

	import Accueil from '../pages/Accueil.js';
	import Cv from '../pages/Cv.js';
	import Contact from '../pages/Contact.js';
	import Travaux from '../pages/Travaux.js';
	import Formation from '../pages/Formations.js';
	import Experiences from '../pages/Experiences.js';
	import GatUiReact from '../pages/GatUiReact.js';
	import TravailDetail from '../components/TravailDetail.js';

 FlowRouter.route('/', {
	 name: 'accueil',
	 action: function() {
		 mount(MainLayout, {content: <Accueil/>});
	 window.scrollTo(0, 0)

	 }
 });
 FlowRouter.route('/Cv', {
	 name: 'Cv',
	 action: function() {
		 mount(MainLayout, {content: <Cv />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/Contact', {
	 name: 'Contact',
	 action: function() {
		 mount(MainLayout, {content: <Contact />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/Travaux', {
	 name: 'Travaux',
	 action: function() {
		 mount(MainLayout, {content: <Travaux />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/Travaux/:titre', {
	name: 'Travail',
	action: function (params) {
		mount(MainLayout, { content: <Travaux titre={params.titre} /> });
	 window.scrollTo(0, 0)
	},
});
FlowRouter.route('/Formations', {
	 name: 'Formations',
	 action: function() {
		 mount(MainLayout, {content: <Formation />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/Experiences', {
	 name: 'Expériences',
	 action: function() {
		 mount(MainLayout, {content: <Experiences />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/gat-ui-react', {
	 name: 'GatUiReact',
	 action: function() {
		 mount(MainLayout, {content: <GatUiReact />});
	 window.scrollTo(0, 0)
	 }
 });
FlowRouter.route('/gat-ui-react/:titre', {
	name: 'Travail',
	action: function (params) {
		mount(MainLayout, { content: <GatUiReact titre={params.titre} /> });
	 window.scrollTo(0, 0)
	},
});

