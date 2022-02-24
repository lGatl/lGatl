import { Meteor } from 'meteor/meteor'

export const CONSTANT_Paque = { 
	UPDATED_MESSAGE_PAQUE: "Paque_UPDATED_MESSAGE_PAQUE",
};

function updatedMessage(obj, cbk = () => {}) {
	return {
		type: CONSTANT_Paque.UPDATED_MESSAGE_PAQUE,
		payload: obj,
	};
}


export const ACTION_Paque = { 
	updatedMessage
};
