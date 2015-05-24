var should = require('should'),
	Edge = require('../src/models/Edge.js'),
	uuid = require('uuid');


describe('Edge', function() {

	it('should thow an error for an invalid id', function() {
		(function() {
			var e = new Edge('xxxxx');
		}).should.throw('`id` must be a valid type 4 UUID');
	});

	it('should thow an error for an invalid type', function() {
		(function() {
			var e = new Edge(uuid.v4(), null);
		}).should.throw('Invalid type');
	});

	it('should cause an error if the first vertex id is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'spring', 'xxxxx', uuid.v4());
		}).should.throw('`a` must be a valid, type 4 UUID');
	});

	it('should cause an error if the second vertex id is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'spring', uuid.v4(), 'xxxxx');
		}).should.throw('`b` must be a valid, type 4 UUID');
	});

	it('should cause an error if the length is not numeric', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'spring', uuid.v4(), uuid.v4(), null);
		}).should.throw('`length` must be numeric');
	});

	it('should cause an error if the amplitude is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'muscle', uuid.v4(), uuid.v4(), 0, null, 0);
		}).should.throw('`amplitude` must be a number between 0 and 1 (inclusive)');
	});

	it('should cause an error if the phase is invalid', function() {
		(function() {
			var e = new Edge(uuid.v4(), 'muscle', uuid.v4(), uuid.v4(), 0, 0, null);
		}).should.throw('`phase` must be a number between 0 and 1 (inclusive)');
	});

	describe('#springify', function() {

		it('should change the type to spring and delete amplitude and velocity', function() {
			var e = new Edge(uuid.v4(), 'muscle', uuid.v4(), uuid.v4(), 0, 0, 0);
			e.springify();
			e.type.should.equal('spring');
			should.not.exist(e.amplitude);
			should.not.exist(e.phase);
		});

	});

	describe('#musclize', function() {

		it('should change the type to muscle and create amplitude and velocity', function() {
			var e = new Edge(uuid.v4(), 'spring', uuid.v4(), uuid.v4(), 0, 0, 0);
			e.musclize(0, 0);
			e.type.should.equal('muscle');
			should.exist(e.amplitude);
			should.exist(e.phase);
		});

	});

});