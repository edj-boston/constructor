var Edge = function(type, vid1, vid2) {

	if( type != 'muscle' && type != 'spring' ) {
		throw new Error('Invalid type');
	}

	if( vid1 == undefined || vid2 == undefined ) {
		throw new Error('Both vertex id\'s are required');
	}

	return this;
}


module.exports = Edge;