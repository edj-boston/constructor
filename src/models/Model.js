var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Model = function(autoReverse, comment, friction, gravity, gravityDirection, height, name, k, friction, reflection, amplitude, direction, phase, speed, width) {
	this.autoReverse = autoReverse;
	this.comment = comment;
	this.friction = friction;
	this.gravity = gravity;
	this.gravityDirection = gravityDirection;
	this.height = height;
	this.name = name;
	this.k = k;
	this.friction = friction;
	this.reflection = reflection;
	this.amplitude = amplitude;
	this.direction = direction;
	this.phase = phase;
	this.speed = speed;
	this.width = width;

	this.validate();

	return this;
}

Model.prototype.validate = function() {
	
	// Validate that autoReverse is Boolean
	if( typeof this.autoReverse != 'boolean' ) throw new Error('autoReverse must be boolean');

	// Validate the comment
	if( typeof this.comment != 'string' ) throw new Error('comment must be a string');

	// Validate the friction value
	if( typeof this.friction != 'number' || this.friction < 0  || this.friction > 1 ) {
		throw new Error('`friction` must be a number between 0 and 1 (inclusive)');
	}

}

module.exports = Model;