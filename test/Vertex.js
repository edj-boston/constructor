var should = require('should'),
	Vertex = require('../src/models/Vertex.js'),
	uuid = require('uuid');


describe('Vertex', function() {

	it('should thow an error for an invalid type', function() {
		(function() {
			var v = new Vertex(null);
		}).should.throw('Invalid type');
	});

	it('should thow an error for an invalid x coordinate', function() {
		(function() {
			var v = new Vertex('free', null);
		}).should.throw('x must be a numeric value');
	});

	it('should thow an error for an invalid y coordinate', function() {
		(function() {
			var v = new Vertex('free', 0, null);
		}).should.throw('y must be a numeric value');
	});

	it('should cause an error if the x velocity is invalid', function() {
		(function() {
			var v = new Vertex('free', 0, 0, null);
		}).should.throw('Numeric x velocity is required');
	});

	it('should cause an error if the y velocity is invalid', function() {
		(function() {
			var v = new Vertex('free', 0, 0, 0, null);
		}).should.throw('Numeric y velocity is required');
	});

	describe('#free()', function() {

		it('should change the type to free and create velocities', function() {
			var v = new Vertex('fixed', 0, 0);
			v.free(0, 0);
			v.type.should.equal('free');
			should.exist(v.vx);
			should.exist(v.vy);
		});

	});

	describe('#fix()', function() {

		it('should change the type to fixed and destroy velocities', function() {
			var v = new Vertex('free', 0, 0, 0, 0);
			v.fix();
			v.type.should.equal('fixed');
			should.not.exist(v.vx);
			should.not.exist(v.vy);
		});

	});

});