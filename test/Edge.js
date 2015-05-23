var should = require('should'),
	Edge = require('../src/models/Edge.js'),
	uuid = require('uuid');


describe('Edge', function() {

	it('should thow an error for an invalid id', function() {
		(function() {
			var e = new Edge('xxxxx');
		}).should.throw('The id must be a valid type 4 UUID');
	});

	it('should thow an error for an invalid type', function() {
		(function() {
			var e = new Edge(uuid.v4(), null);
		}).should.throw('Invalid type');
	});

	it('should cause an error if the first vertex id is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'spring', 'xxxxx', uuid.v4());
		}).should.throw('vid1 must be a valid, type 4 UUID');
	});

	it('should cause an error if the second vertex id is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'spring', uuid.v4(), 'xxxxx');
		}).should.throw('vid2 must be a valid, type 4 UUID');
	});

});