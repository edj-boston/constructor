var should = require('should'),
	Vertex = require('../src/models/Vertex.js'),
	uuid = require('uuid');


describe('Vertex', function() {

	it('should thow an error for an invalid id', function() {
		(function() {
			var v = new Vertex('xxxxx');
		}).should.throw('The id must be a valid type 4 UUID');
	});

	it('should thow an error for an invalid type', function() {
		(function() {
			var v = new Vertex(uuid.v4(), null);
		}).should.throw('Invalid type');
	});

	it('should thow an error for an invalid x coordinate', function() {
		(function() {
			var v = new Vertex(uuid.v4(), 'free', null);
		}).should.throw('x must be a numeric value');
	});

	it('should thow an error for an invalid y coordinate', function() {
		(function() {
			var v = new Vertex(uuid.v4(), 'free', 0, null);
		}).should.throw('y must be a numeric value');
	});

	it('should cause an error if the x velocity is invalid', function() {
		(function() {
			var v = new Vertex(uuid.v4(), 'free', 0, 0, null);
		}).should.throw('Numeric x velocity is required');
	});

	it('should cause an error if the y velocity is invalid', function() {
		(function() {
			var v = new Vertex(uuid.v4(), 'free', 0, 0, 0, null);
		}).should.throw('Numeric y velocity is required');
	});

});