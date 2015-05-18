var should = require('should'),
	Edge = require('../src/models/Edge.js');

describe('Edge', function() {
	it('should thow an error for an invalid type', function() {
		(function() {
			var e = new Edge(null);
		}).should.throw('Invalid type');
	});

	it('should cause an error if the vertex id\'s are missing', function() {
		(function() {
			var e = new Edge('muscle', 'abcdef');
		}).should.throw('Both vertex id\'s are required');
	});
});