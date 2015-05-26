var Vertex = function(type, x, y, vx, vy) {
	this.type = type;
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;

	this.validate();

	return this;
}

// Helper to validate the velocities
Vertex.prototype.validate = function() {

	// Validate the type
	if( this.type != 'free' && this.type != 'fixed' ) throw new Error('Invalid type');

	// Validate the x coordinate
	if( typeof this.x != 'number' ) throw new Error('x must be a numeric value');

	// Validate the y coordinate
	if( typeof this.y != 'number' ) throw new Error('y must be a numeric value');

	// Check the velocities if the vertex is free
	if( this.type == 'free' ) {
		if( typeof this.vx != 'number' ) {
			throw new Error('Numeric x velocity is required');
		}
		if( typeof this.vy != 'number' ) {
			throw new Error('Numeric y velocity is required');
		}
	}

	return true;
}

// Helper to convert from fixed to free
Vertex.prototype.free = function(vx, vy) {
	this.type = 'free';
	this.vx = vx;
	this.vy = vy;

	this.validate();

	return this;
}

// Helper to convert from free to fixed
Vertex.prototype.fix = function() {
	this.type = 'fixed';
	delete this.vx;
	delete this.vy;

	this.validate();

	return this;
}

module.exports = Vertex;