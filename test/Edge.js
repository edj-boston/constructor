var should = require('should'),
	Edge = require('../src/models/Edge.js'),
	uuid = require('uuid');


describe('Edge', function() {

	it('`type` must be a certain string', function() {
		(function() {
			var e = new Edge(null);
		}).should.throw('Invalid `type`');
	});

	it('`a` must be a type 4 UUID', function() {
		(function() {
			var e = new Edge('spring', 'xxxxx', uuid.v4());
		}).should.throw('`a` must be a type 4 UUID');
	});

	it('`b` must be a type 4 UUID', function() {
		(function() {
			var e = new Edge('spring', uuid.v4(), 'xxxxx');
		}).should.throw('`b` must be a type 4 UUID');
	});

	it('`length` must be a number', function() {
		(function() {
			var e = new Edge('spring', uuid.v4(), uuid.v4(), null);
		}).should.throw('`length` must be a number');
	});

	it('`amplitude` must be a number', function() {
		(function() {
			var e = new Edge('muscle', uuid.v4(), uuid.v4(), 0, null, 0);
		}).should.throw('`amplitude` must be a number between 0 and 1 (inclusive)');
	});

	it('`phase` must be a number', function() {
		(function() {
			var e = new Edge('muscle', uuid.v4(), uuid.v4(), 0, 0, null);
		}).should.throw('`phase` must be a number between 0 and 1 (inclusive)');
	});

	describe('#springify()', function() {

		it('should change the type to "spring" and delete `amplitude` and `velocity`', function() {
			var e = new Edge('muscle', uuid.v4(), uuid.v4(), 0, 0, 0);
			e.springify();
			e.type.should.equal('spring');
			should.not.exist(e.amplitude);
			should.not.exist(e.phase);
		});

	});

	describe('#musclize()', function() {

		it('should change the `type` to "muscle" and create `amplitude` and `velocity`', function() {
			var e = new Edge('spring', uuid.v4(), uuid.v4(), 0, 0, 0);
			e.musclize(0, 0);
			e.type.should.equal('muscle');
			should.exist(e.amplitude);
			should.exist(e.phase);
		});

	});

});