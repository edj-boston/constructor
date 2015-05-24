var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Vertex = function(type, x, y, vx, vy) {

	// Validate the type
	if( type == 'free' || type == 'fixed' ) {
		this.type = type;
	} else {
		throw new Error('Invalid type');
	}

	// Validate the x coordinate
	if( typeof x == 'number' ) {
		this.x = x;
	} else {
		throw new Error('x must be a numeric value');
	}

	// Validate the y coordinate
	if( typeof y == 'number' ) {
		this.y = y;
	} else {
		throw new Error('y must be a numeric value');
	}

	// Check the velocities if the vertex is free
	if( type == 'free' && this.validateVelocities(vx, vy)) {
		this.vx = vx;
		this.vy = vy;
	}

	return this;
}

// Helper to validate the velocities
Vertex.prototype.validateVelocities = function(vx, vy) {

	if( typeof vx != 'number' ) {
		throw new Error('Numeric x velocity is required');
	}

	if( typeof vy != 'number' ) {
		throw new Error('Numeric y velocity is required');
	}

	return true;
}

// Helper to convert from fixed to free
Vertex.prototype.free = function(vx, vy) {

	if( this.validateVelocities(vx, vy)) {
		this.type = 'free';
		this.vx = vx;
		this.vy = vy;
	}

	return this;

}

// Helper to convert from free to fixed
Vertex.prototype.fix = function() {

	this.type = 'fixed';
	delete this.vx;
	delete this.vy;

	return this;

}

module.exports = Vertex;