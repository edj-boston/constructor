var Model = require('../../src/models/Model.js'),
	uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Constructor = function(options) {

	// Populate this with defaults or options
	for( prop in this.defaults) {
		this[prop] = ( options && options.hasOwnProperty(prop) ) ? options[prop] : this.defaults[prop];
	}

	this.validate();

	return this;

}

Constructor.prototype.defaults = {
	model		: {},
	models		: []
};

Constructor.prototype.validate = function() {

	// Validate types against defaults
	for( prop in this.defaults ) {
		if( typeof this[prop] != typeof this.defaults[prop] ) {
			throw new Error('`' + prop + '` must be a ' + typeof this.defaults[prop]);
		}
	}

}

Constructor.prototype.loadModel = function(arg) {

	if(arg == null) throw new Error('The argument cannot be null');

	switch( typeof arg ) {
		case 'string':
			this.loadModelJSON(arg);
			break;
		case 'object':
			this.loadModelObject(arg);
			break;
		default:
			throw new Error('Cannot load this model');
			break;
	}

	return this;

}

Constructor.prototype.loadModelJSON = function(json) {

	try {
		var obj = JSON.parse(json);
		this.model = new Model(obj);
	} catch(e) {
		throw new Error('Invalid JSON input');
	}

	return this;

}

Constructor.prototype.loadModelObject = function(obj) {

	if( typeof obj != 'object' || obj == null ) {
		throw new Error('Argument must be an object');
	}

	this.model = new Model(obj);

	return this;

}

module.exports = Constructor;