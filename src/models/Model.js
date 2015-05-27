var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Model = function(autoReverse, comment, f, gravity, gravityDirection, height, name, k, friction, reflection, amplitude, direction, phase, speed, width) {
	this.autoReverse = autoReverse;
	this.comment = comment;
	this.f = f;
	this.gravity = gravity;
	this.gravityDirection = gravityDirection;
	this.height = height;
	this.name = name;
	this.k = k;

	/*this.reflection = reflection;
	this.amplitude = amplitude;
	this.direction = direction;
	this.phase = phase;
	this.speed = speed;
	this.width = width;*/

	this.validate();

	return this;
}

Model.prototype.validate = function() {
	
	// Validate that autoReverse is Boolean
	if( typeof this.autoReverse != 'boolean' ) throw new Error('autoReverse must be boolean');

	// Validate the comment
	if( typeof this.comment != 'string' ) throw new Error('comment must be a string');

	// Validate the f value
	if( typeof this.f != 'number' || this.f < 0 || this.f > 1 ) {
		throw new Error('`f` must be a number between 0 and 1 (inclusive)');
	}

	// Validate the gravity value
	if( typeof this.gravity != 'number' || this.gravity < 0  || this.gravity > 1 ) {
		throw new Error('`gravity` must be a number between 0 and 1 (inclusive)');
	}

	// Validate the gravityDirection
	if( this.gravityDirection != 1 && this.gravityDirection != -1 ) {
		throw new Error('`gravityDirection` must be either -1 or 1');
	}

	// Validate the height value
	if( typeof this.height != 'number' || this.height <= 0 ) {
		throw new Error('`height` must be a number greater than 0');
	}

	// Validate the name
	if( typeof this.name != 'string' ) throw new Error('name must be a string');

	// Validate the k value
	if( typeof this.k != 'number' || this.k < 0 || this.k > 1 ) {
		throw new Error('`k` must be a number between 0 and 1 (inclusive)');
	}
}

module.exports = Model;