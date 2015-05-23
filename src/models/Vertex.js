var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Vertex = function(id, type, x, y, vx, vy) {

	// Validate the id
	if( validateUUID(id) ) {
		this.id = id;
	} else {
		throw new Error('The id must be a valid type 4 UUID');
	}

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
	if( type == 'free' ) {

		if( typeof vx == 'number' ) {
			this.vx = vx;
		} else {
			throw new Error('Numeric x velocity is required');
		}

		if( typeof vy == 'number' ) {
			this.vy = vy;
		} else {
			throw new Error('Numeric y velocity is required');
		}

	}

	return this;
}


module.exports = Vertex;