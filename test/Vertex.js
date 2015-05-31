var should = require('should'),
	Vertex = require('../src/models/Vertex.js'),
	uuid = require('uuid');


describe('Vertex', function() {

	it('`type` must be a certain string', function() {
		(function() {
			var v = new Vertex(null);
		}).should.throw('Invalid `type`');
	});

	it('`x` must be a number', function() {
		(function() {
			var v = new Vertex('free', null);
		}).should.throw('`x` must be a number');
	});

	it('`y` must be a number', function() {
		(function() {
			var v = new Vertex('free', 0, null);
		}).should.throw('`y` must be a number');
	});

	it('`vx` must be a number', function() {
		(function() {
			var v = new Vertex('free', 0, 0, null);
		}).should.throw('`vx` must be a number');
	});

	it('`vy` must be a number', function() {
		(function() {
			var v = new Vertex('free', 0, 0, 0, null);
		}).should.throw('`vy` must be a number');
	});

	describe('#free()', function() {

		it('should change the `type` to "free" and create `vx` and `vy`', function() {
			var v = new Vertex('fixed', 0, 0);
			v.free(0, 0);
			v.type.should.equal('free');
			should.exist(v.vx);
			should.exist(v.vy);
		});

	});

	describe('#fix()', function() {

		it('should change the `type` to "fixed" and destroy `vx` and `vy`', function() {
			var v = new Vertex('free', 0, 0, 0, 0);
			v.fix();
			v.type.should.equal('fixed');
			should.not.exist(v.vx);
			should.not.exist(v.vy);
		});

	});

});