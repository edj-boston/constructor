var should = require('should'),
	Vertex = require('../src/models/Vertex.js');

describe('Vertex', function() {
	it('should thow an error for an invalid type', function() {
		(function() {
			var v = new Vertex(null, 0, 0);
		}).should.throw('Invalid type');
	});

	it('should cause an error if velocity is missing', function() {
		(function() {
			var v = new Vertex('free', 0, 0);
		}).should.throw('Velocity is required');
	});
});