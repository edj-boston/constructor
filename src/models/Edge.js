var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Edge = function(type, a, b, length, amplitude, phase) {

	// Validate the type
	if( type == 'muscle' || type == 'spring' ) {
		this.type = type;
	} else {
		throw new Error('Invalid type');
	}

	// Validate the first vertex id
	if( validateUUID(a) ) {
		this.a = a;
	} else {
		throw new Error('`a` must be a valid, type 4 UUID');
	}

	// Validate the second vertex id
	if( validateUUID(b) ) {
		this.b = b;
	} else {
		throw new Error('`b` must be a valid, type 4 UUID');
	}

	// Validate the length
	if( typeof length == 'number' ) {
		this.length = length;
	} else {
		throw new Error('`length` must be numeric');
	}

	if( type == 'muscle' ) {

		if( this.validateAmpOrPhase(amplitude) ) {
			this.amplitude = amplitude;
		} else {
			throw new Error('`amplitude` must be a number between 0 and 1 (inclusive)');
		}

		if( this.validateAmpOrPhase(phase) ) {
			this.phase = phase;
		} else {
			throw new Error('`phase` must be a number between 0 and 1 (inclusive)');
		}

	}

	return this;
}

Edge.prototype.validateAmpOrPhase = function(val) {
	return ( typeof val == 'number' && val >= 0  && val <=1 );
}

Edge.prototype.springify = function() {
	this.type = 'spring';
	delete this.amplitude;
	delete this.phase;

	return this;
}

Edge.prototype.musclize = function(amplitude, phase) {

	if( this.validateAmpOrPhase(amplitude) && this.validateAmpOrPhase(phase) ) {
		this.type = 'muscle';
		this.amplitude = amplitude;
		this.phase = phase;
	}

	return this;	
}

module.exports = Edge;