var Model = require('../../src/models/Model.js'),
	uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Constructor = function(options) {

	if( typeof options == 'undefined' || options == null) {
		throw new Error('You must pass an options object');
	}

	// Populate this with defaults or options
	for( prop in this.defaults) {
		this[prop] = options.hasOwnProperty(prop) ? options[prop] : this.defaults[prop];
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

module.exports = Constructor;