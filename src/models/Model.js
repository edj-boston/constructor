var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Model = function(options) {

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

Model.prototype.defaults = {
	autoReverse	: true,
	comment		: '',
	f			: 0,
	g			: 0,
	height		: 1,
	name		: '',
	k			: 0,
	reflection	: 0,
	amplitude	: 0,
	direction	: 1,
	phase		: 0,
	speed		: 0,
	width		: 1,
	edges		: {},
	vertices	: {}
};

Model.prototype.validate = function() {

	// Validate types against defaults
	for( prop in this.defaults ) {
		if( typeof this[prop] != typeof this.defaults[prop] ) {
			throw new Error('`' + prop + '` must be a ' + typeof this.defaults[prop]);
		}
	}

	// Comment must be a string of some length
	if( this.name.length < 1) {
		throw new Error('`name` length must be greater than 1');
	}

	// Validate the f value
	if( this.f < 0 || this.f > 1 ) {
		throw new Error('`f` must be a number between 0 and 1 (inclusive)');
	}

	// Validate the g value
	if( this.g < -1  || this.g > 1 ) {
		throw new Error('`g` must be a number between -1 and 1 (inclusive)');
	}

	// Validate the height value
	if( this.height <= 0 ) {
		throw new Error('`height` must be a number greater than 0');
	}

	// Validate the k value
	if( this.k < 0 || this.k > 1 ) {
		throw new Error('`k` must be a number between 0 and 1 (inclusive)');
	}

	// Validate the reflection value
	if( this.reflection < 0 || this.reflection > 1 ) {
		throw new Error('`reflection` must be a number between 0 and 1 (inclusive)');
	}

	// Validate the amplitude value
	if( this.amplitude < 0 || this.amplitude > 1 ) {
		throw new Error('`amplitude` must be a number between 0 and 1 (inclusive)');
	}

}

module.exports = Model;