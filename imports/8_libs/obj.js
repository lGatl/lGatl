export const set = (obj, path, value) => {
	path = path.split(".");
	for (i = 0; i < path.length - 1; i++){ 
		if(!obj.hasOwnProperty(path[i])){
			obj[path[i]]={}
		}
		obj = obj[path[i]]
	};

	obj[path[i]] = value;
};
