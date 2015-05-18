var Vertex = function(type, x, y, vx, vy) {

	if( type != 'free' && type != 'fixed' ) {
		throw new Error('Invalid type');
	}

	if( type == 'free' ) {
		if( vx == null || vy == null ) {
			throw new Error('Velocity is required');
		}
	}

	return this;
}


module.exports = Vertex;