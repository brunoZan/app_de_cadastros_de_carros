(function(win){

function DOM(elements) {
	this.elements = document.querySelectorAll(elements);
}

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

DOM.prototype.get = function get(){
	return this.elements;
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

DOM.prototype.isArray = function isArray(objectType) {
	return typeObject(objectType) === '[object Array]';
}

DOM.prototype.isObject = function isObject(objectType) {
	return typeObject(objectType) === '[object Object';
}

DOM.prototype.isFunction = function isFunction(objectType) {
	return typeObject(objectType) === '[object Function]';
}

DOM.prototype.isNumber = function isNumber(objectType) {
	return typeObject(objectType) === '[object Number]';
}

DOM.prototype.isString = function isString(objectType) {
	return typeObject(objectType) === '[object String]';
}

DOM.prototype.isBoolean = function isBoolean(objectType) {
	return typeObject(objectType) === '[object Boolean]';
}

DOM.prototype.isNull = function isNull(objectType) {
	return typeObject(objectType) === '[object Null]' ||
			 typeObject(objectType) === '[object Undefined]' ;
}

function typeObject(object) {
	return Object.prototype.toString.call(object);
}
win.DOM = DOM;
})(window);