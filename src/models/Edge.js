var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Edge = function(type, a, b, length, amplitude, phase) {
	this.type = type;
	this.a = a;
	this.b = b;
	this.length = length;
	this.amplitude = amplitude;
	this.phase = phase;

	this.validate();

	return this;
}

Edge.prototype.validate = function(val) {
	// Validate the type
	if( this.type != 'muscle' && this.type != 'spring' ) throw new Error('Invalid type');

	// Validate the first vertex id
	if( !validateUUID(this.a) ) throw new Error('`a` must be a valid, type 4 UUID');

	// Validate the second vertex id
	if( !validateUUID(this.b) ) throw new Error('`b` must be a valid, type 4 UUID');

	// Validate the length
	if( typeof this.length != 'number' ) throw new Error('`length` must be numeric');

	if( this.type == 'muscle' ) {
		if( typeof this.amplitude != 'number' || this.amplitude < 0  || this.amplitude > 1 ) {
			throw new Error('`amplitude` must be a number between 0 and 1 (inclusive)');
		}
		if( typeof this.phase != 'number' || this.phase < 0  || this.phase > 1 ) {
			throw new Error('`phase` must be a number between 0 and 1 (inclusive)');
		}
	}
}

Edge.prototype.springify = function() {
	this.type = 'spring';
	delete this.amplitude;
	delete this.phase;

	this.validate();

	return this;
}

Edge.prototype.musclize = function(amplitude, phase) {
	this.type = 'muscle';
	this.amplitude = amplitude;
	this.phase = phase;

	this.validate();

	return this;	
}

module.exports = Edge;