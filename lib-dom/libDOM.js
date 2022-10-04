(function(window){

function DOM(elements) {
	if(!(this instanceof DOM))
		return new DOM(elements);

	this.elements = document.querySelectorAll(elements);
};

DOM.isArray = function isArray(objectType) {
	return typeObject(objectType) === '[object Array]';
};

DOM.isObject = function isObject(objectType) {
	return typeObject(objectType) === '[object Object';
};

DOM.isFunction = function isFunction(objectType) {
	return typeObject(objectType) === '[object Function]';
};

DOM.isNumber = function isNumber(objectType) {
	return typeObject(objectType) === '[object Number]';
};

DOM.isString = function isString(objectType) {
	return typeObject(objectType) === '[object String]';
};

DOM.isBoolean = function isBoolean(objectType) {
	return typeObject(objectType) === '[object Boolean]';
};

DOM.isNull = function isNull(objectType) {
	return typeObject(objectType) === '[object Null]' ||
			 typeObject(objectType) === '[object Undefined]' ;
};

DOM.prototype.on = function on(eventType, callback) {
	Array.prototype.forEach.call(this.elements, element => {
		element.addEventListener(eventType, callback, false);
	});
};

DOM.prototype.off = function off(eventType, callback){
	Array.prototype.forEach.call(this.elements, element => {
		element.removeEventListener(eventType, callback, false);
	});
};

DOM.prototype.get = function get(index){
	if(!index)
		return this.elements[0];
	return this.elements[index];
}

DOM.prototype.forEach = function foEach(){
	return Array.prototype.forEach.apply(this.elements, arguments);
}

DOM.prototype.map = function map(){
	return Array.prototype.map.apply(this.elements, arguments);
}

DOM.prototype.filter = function filter(){
	return Array.prototype.filter.apply(this.elements, arguments);
}

DOM.prototype.reduce = function reduce(){
	return Array.prototype.reduce.apply(this.elements, arguments);
}

DOM.prototype.reduceTight = function reduceTight(){
	return Array.prototype.reduceTight.apply(this.elements, arguments);
}


DOM.prototype.every = function every(){
	return Array.prototype.every.apply(this.elements, arguments);
}

DOM.prototype.some = function some(){
	return Array.prototype.some.apply(this.elements, arguments);
}



function typeObject(object) {
	return Object.prototype.toString.call(object);
}
window.DOM = DOM;
})(window);