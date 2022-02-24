import { COLLECTIONS } from '../5_methodes/methodes';

//Import additionals Constant and actions 
import { CONSTANT_Users, ACTION_Users } from '../user/2_action/user_action';
import { CONSTANT_Paque, ACTION_Paque } from './paque_action';
import { CONSTANT_Menu, ACTION_Menu } from './menu_action';
import { CONSTANT_Controle, ACTION_Controle } from './controle_action';
import { CONSTANT_Titre, ACTION_Titre } from './titre_action';
import { CONSTANT_Socket, ACTION_Socket } from './socket_action';

//Initialisation of Objects
const CONSTANT = {Error:{ERROR_ARGUMENT : 'ERROR_ARGUMENT'}};
const ACTION = {};

COLLECTIONS.forEach((COLLECTION)=>{

	CONSTANT[ COLLECTION ] ={ 
		ADD : COLLECTION+'_ADD',
		GET : COLLECTION+'_GET',
		GETADD : COLLECTION+'_GETADD',
		GET1 : COLLECTION+ '_GET1',
		COUNT : COLLECTION+'_COUNT',
		RM : COLLECTION+'_RM',
		RM_ALL : COLLECTION+'_RM_ALL',
		UP : COLLECTION+'_UP',
		UPM : COLLECTION+'_UPM',
		UPS : COLLECTION+'_UPS',
		CONTROLE : COLLECTION+'_CONTROLE',

	};

	function add(obj, cbk=()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('add' + COLLECTION, obj ,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( res );
					resolve( { val:{ ...obj, _id:res }, state:null } );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].ADD,
			payload: 	p,
		};
	}
	function add_state(obj,state, cbk=()=>{}){
		
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('add' + COLLECTION, obj ,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( { ...obj, _id:res } );
					resolve( { val:{ ...obj, _id:res }, state } );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].ADD,
			payload: 	p,
		};
	}
	function get(obj = {}, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,null,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET,
			payload: 	p,
		};
	}
	function get_SSL(obj = {}, ssl = null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					cbk( res );
					//console.log("res", res);
					
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET,
			payload: 	p,
		};
	}
	function get_state(obj = {}, state =  null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,null,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET,
			payload: 	p,
		};
	}
	function get_SSL_state(obj = {}, ssl = null, state =  null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET,
			payload: 	p,
		};
	}
	function get_state_SSL(obj = {}, state =  null, ssl = null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET,
			payload: 	p,
		};
	}
	//________________________________-
	function getAdd(obj = {}, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,null,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GETADD,
			payload: 	p,
		};
	}
	function getAdd_SSL(obj = {}, ssl = null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GETADD,
			payload: 	p,
		};
	}
	function getAdd_state(obj = {}, state =  null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,null,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GETADD,
			payload: 	p,
		};
	}
	function getAdd_SSL_state(obj = {}, ssl = null, state =  null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GETADD,
			payload: 	p,
		};
	}
	function getAdd_state_SSL(obj = {}, state =  null, ssl = null, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('get' + COLLECTION,obj,ssl,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GETADD,
			payload: 	p,
		};
	}
	//_____________

	function get1(obj, cbk = () => {}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('get1' + COLLECTION,obj,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( res );
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET1,
			payload: 	p,
		};
	}
	function get1_state(obj, state, cbk = () => {}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('get1' + COLLECTION,obj,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( res );
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].GET1,
			payload: 	p,
		};
	}
	function count(obj={}, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('count' + COLLECTION,obj,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].COUNT,
			payload: 	p,
		};
	}
	function count_state(obj={}, state, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) =>{
			Meteor.call('count' + COLLECTION,obj,(err,res)=>{
				if(err){
					//console.log(err)
					reject( err );
				}else{
					//console.log(res)
					cbk( res );
					
					resolve( { val:res, state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].COUNT,
			payload: 	p,
		};
	}
	function rm(obj, cbk = ()=>{}){
		obj = typeof obj == 'object' && Object.keys(obj).length>0 && Object.keys(obj)[0]=='_id'?obj:false;
		if(obj){
			let p = new Promise( ( resolve, reject ) => {
				Meteor.call('rm' + COLLECTION, obj ,(err)=>{
					if(err){
						reject(err);
					}else{
						cbk(obj);
						resolve( { val:obj, state:null} );
					}
				});
			});
			return {
				type: CONSTANTS[ COLLECTION ].RM,
				payload: 	p,
			};
		}else{
			return {
				type: CONSTANTS.Error.ERROR_ARGUMENT,
				payload:{
					action_type:CONSTANTS[ COLLECTION ].RM,
					action:'RM'
				}
			};
		}
		
	}
	function rm_state(obj, state, cbk = ()=>{}){
		obj = typeof obj == 'object' && Object.keys(obj).length>0 && Object.keys(obj)[0]=='_id'?obj:false;
		if(obj){
			let p = new Promise( ( resolve, reject ) => {
				Meteor.call('rm' + COLLECTION, obj ,(err,res)=>{
					if(err){
						reject(err);
					}else{
						cbk(obj);
						resolve( { val:obj, state} );
					}
				});
			});
			return {
				type: CONSTANTS[ COLLECTION ].RM,
				payload: 	p,
			};
		}else{
			return {
				type: CONSTANTS.Error.ERROR_ARGUMENT,
				payload:{
					action_type:CONSTANTS[ COLLECTION ].RM,
					action:'RM'
				}
			};
		}
	}
		function rmAll( cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('rm' + COLLECTION, {} ,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk();
					resolve( { state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].RM_ALL,
			payload: 	p,
		};
	}
	function rmAll_state( state, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('rm' + COLLECTION, {} ,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk();
					resolve( { state } );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].RM_ALL,
			payload: 	p,
		};
	}
	function up(reco,modif, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('up' + COLLECTION,reco,modif,(err,res)=>{
				if(err){
					reject(err);
				}else{

					cbk( {...modif,_id:res} );
					resolve( { val:{...modif,_id:res},state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].UP,
			payload: 	p,
		};
	}
	function up_state(reco,modif,state, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('up' + COLLECTION,reco,modif,(err,res)=>{
				if(err){
					reject(err);
				}else{

					cbk( {...modif,_id:res} );
					resolve( { val:{...modif,_id:res},state} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].UP,
			payload: 	p,
		};
	}
	function upm(reco, modif, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('upm' + COLLECTION,reco,modif,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( {...modif,_id:res} );
					//console.log('res', res);
					resolve( { val:{...modif,_id:res}, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].UPM,
			payload: 	p,
		};
	}
	function ups(obj, cbk = ()=>{}){
		let p = new Promise( ( resolve, reject ) => {
			Meteor.call('up' + COLLECTION,obj,(err,res)=>{
				if(err){
					reject(err);
				}else{
					cbk( res );
					resolve( { val:res, state:null} );
				}
			});
		});
		return {
			type: CONSTANTS[ COLLECTION ].UP,
			payload: 	p,
		};
	}
	//=========================================================
	function controle(val){
		return {
			type: CONSTANTS[ COLLECTION ].CONTROLE,
			payload: 	val
		};
	}

	ACTION[COLLECTION] = {
		add,
		add_state,
		rm,
		rm_state,
		rmAll,
		rmAll_state,
		get,
		get_SSL,
		get_state,
		get_SSL_state,
		get_state_SSL,
		getAdd,
		getAdd_SSL,
		getAdd_state,
		getAdd_SSL_state,
		getAdd_state_SSL,
		get1,
		get1_state,
		count,
		count_state,
		up,
		up_state,
		upm,
		ups,	
		controle,
	};

});



export const CONSTANTS = { ...CONSTANT, 
	Paque:{ ...CONSTANT.Paque, ...CONSTANT_Paque },
	Users:{ ...CONSTANT.Users, ...CONSTANT_Users },
	Menu:{...CONSTANT_Menu},
	Controle:{...CONSTANT_Controle},
	Titre:{...CONSTANT_Titre},
	Socket:{...CONSTANT_Socket}
};
export const ACTIONS = { ...ACTION,
	Paque:{ ...ACTION.Paque, ...ACTION_Paque },
	Users:{ ...ACTION.Users, ...ACTION_Users },
	Menu:{...ACTION_Menu},
	Controle:{...ACTION_Controle},
	Titre:{...ACTION_Titre},
	Socket:{...ACTION_Socket}
};

