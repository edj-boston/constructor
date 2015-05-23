var uuid = require('uuid'),
	validateUUID = require('../../lib/validateUUID.js');


var Edge = function(id, type, vid1, vid2) {

	// Validate the id
	if( validateUUID(id) ) {
		this.id = id;
	} else {
		throw new Error('The id must be a valid type 4 UUID');
	}

	// Validate the type
	if( type == 'muscle' || type == 'spring' ) {
		this.type = type;
	} else {
		throw new Error('Invalid type');
	}

	// Validate the first vertex id
	if( validateUUID(vid1) ) {
		this.vid1 = vid1;
	} else {
		throw new Error('vid1 must be a valid, type 4 UUID');
	}

	// Validate the second vertex id
	if( validateUUID(vid2) ) {
		this.vid2 = vid2;
	} else {
		throw new Error('vid2 must be a valid, type 4 UUID');
	}

	return this;
}


module.exports = Edge;