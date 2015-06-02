var assert = require('assert'),
	should = require('should'),
	Model = require('../src/models/Model.js'),
	uuid = require('uuid');


describe('Model', function() {

	it('The options argument is required', function() {
		(function() {
			var m1 = new Model();
			var m2 = new Model(null);
		}).should.throw('You must pass an options object');
	});

	it('`autoReverse` must be a boolean', function() {
		(function() {
			var m = new Model({ autoReverse: null });
		}).should.throw('`autoReverse` must be a boolean');
	});

	it('`comment` must be a string', function() {
		(function() {
			var m1 = new Model({ name: 'm1' });
			var m2 = new Model({ name: 'm2', comment: null });
		}).should.throw('`comment` must be a string');
	});

	it('`name` length must be greater than 1', function() {
		(function() {
			var m = new Model({ name: '' });
		}).should.throw('`name` length must be greater than 1');
	});

	it('`f` must be greater than or equal to 0', function() {
		(function() {
			var m1 = new Model({ name: 'm1', f: -1 });
			var m2 = new Model({ name: 'm2', f: 1.5 });
		}).should.throw('`f` must be a number between 0 and 1 (inclusive)');
	});

	it('`g` must be greater than or equal to -1', function() {
		(function() {
			var m1 = new Model({ name: 'm1', g: -1.5 });
			var m2 = new Model({ name: 'm2', g: 1.5 });
		}).should.throw('`g` must be a number between -1 and 1 (inclusive)');
	});

	it('`height` must be a number', function() {
		(function() {
			var m = new Model({ name: 'm', height: "string" });
		}).should.throw('`height` must be a number');
	});

	it('`height` must be greater than 0', function() {
		(function() {
			var m = new Model({ name: 'm', height: -1 });
		}).should.throw('`height` must be a number greater than 0');
	});

	it('`name` must be a string', function() {
		(function() {
			var m = new Model({ name: null });
		}).should.throw('`name` must be a string');
	});

	it('`k` must be a number between 0 and 1 (inclusive)', function() {
		(function() {
			var m1 = new Model({ name: 'm1', k: -1 });
			var m2 = new Model({ name: 'm2', k: 1.5 });
		}).should.throw('`k` must be a number between 0 and 1 (inclusive)');
	});

	it('`reflection` must be a number between 0 and 1 (inclusive)', function() {
		(function() {
			var m1 = new Model({ name: 'm1', reflection: -1 });
			var m2 = new Model({ name: 'm2', reflection: 1.5 });
		}).should.throw('`reflection` must be a number between 0 and 1 (inclusive)');
	});

	it('`amplitude` must be a number between 0 and 1 (inclusive)', function() {
		(function() {
			var m1 = new Model({ name: 'm1', amplitude: -1 });
			var m2 = new Model({ name: 'm2', amplitude: 1.5 });
		}).should.throw('`amplitude` must be a number between 0 and 1 (inclusive)');
	});

	it('`phase` must be a number between 0 and 1 (inclusive)', function() {
		(function() {
			var m1 = new Model({ name: 'm1', phase: -1 });
			var m2 = new Model({ name: 'm2', phase: 1.5 });
		}).should.throw('`phase` must be a number between 0 and 1 (inclusive)');
	});

	describe('#vertices', function() {

		it('can be empty', function() {
			var m = new Model({ name: 'm' });
			assert.equal(Object.keys(m.vertices).length, 0);
		});

	});


	describe('#edges', function() {

		it('can be empty', function() {
			var m = new Model({ name: 'm' });
			assert.equal(Object.keys(m.edges).length, 0);
		});

	});
});