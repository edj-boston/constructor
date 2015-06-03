var assert = require('assert'),
	should = require('should'),
	Model = require('../src/models/Model.js'),
	uuid = require('uuid'),
	validateUUID = require('../lib/validateUUID.js');


describe('Model', function() {

	it('The options argument is required', function() {
		(function() {
			var m = new Model();
		}).should.throw('You must pass an options object');
	});

	it('`amplitude` must be greater than or equal to 0', function() {
		(function() {
			var m = new Model({ name: 'm', amplitude: -1 });
		}).should.throw('`amplitude` must be a number between 0 and 1 (inclusive)');
	});

	it('`amplitude` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', amplitude: 1.5 });
		}).should.throw('`amplitude` must be a number between 0 and 1 (inclusive)');
	});

	it('`autoReverse` must be a boolean', function() {
		(function() {
			var m = new Model({ autoReverse: null });
		}).should.throw('`autoReverse` must be a boolean');
	});

	it('`comment` must be a string', function() {
		(function() {
			var m = new Model({ name: 'm', comment: null });
		}).should.throw('`comment` must be a string');
	});

	describe('#edges', function() {

		it('can be empty', function() {
			var m = new Model({ name: 'm' });
			assert.equal(Object.keys(m.edges).length, 0);
		});

	});

	it('`f` must be greater than or equal to 0', function() {
		(function() {
			var m = new Model({ name: 'm', f: -1 });
		}).should.throw('`f` must be a number between 0 and 1 (inclusive)');
	});

	it('`f` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', f: 1.5 });
		}).should.throw('`f` must be a number between 0 and 1 (inclusive)');
	});

	it('`g` must be greater than or equal to -1', function() {
		(function() {
			var m = new Model({ name: 'm', g: -1.5 });
		}).should.throw('`g` must be a number between -1 and 1 (inclusive)');
	});

	it('`g` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', g: 1.5 });
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

	it('`k` must be greater than or equal to 0', function() {
		(function() {
			var m = new Model({ name: 'm', k: -1 });
		}).should.throw('`k` must be a number between 0 and 1 (inclusive)');
	});

	it('`k` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', k: 1.5 });
		}).should.throw('`k` must be a number between 0 and 1 (inclusive)');
	});

	it('`name` must be a string', function() {
		(function() {
			var m = new Model({ name: null });
		}).should.throw('`name` must be a string');
	});

	it('`name` length must be greater than 1', function() {
		(function() {
			var m = new Model({ name: '' });
		}).should.throw('`name` length must be greater than 1');
	});

	it('`reflection` must be greater than or equal to 0', function() {
		(function() {
			var m = new Model({ name: 'm', reflection: -1 });
		}).should.throw('`reflection` must be a number between 0 and 1 (inclusive)');
	});

	it('`reflection` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', reflection: 1.5 });
		}).should.throw('`reflection` must be a number between 0 and 1 (inclusive)');
	});

	it('`phase` must be greater than or equal to 0', function() {
		(function() {
			var m = new Model({ name: 'm', phase: -1 });
		}).should.throw('`phase` must be a number between 0 and 1 (inclusive)');
	});

	it('`phase` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', phase: 1.5 });
		}).should.throw('`phase` must be a number between 0 and 1 (inclusive)');
	});

	it('`speed` must be greater than or equal to -1', function() {
		(function() {
			var m1 = new Model({ name: 'm1', speed: -1.5 });
		}).should.throw('`speed` must be a number between -1 and 1 (inclusive)');
	});

	it('`speed` must be less than or equal to 1', function() {
		(function() {
			var m = new Model({ name: 'm', speed: 1.5 });
		}).should.throw('`speed` must be a number between -1 and 1 (inclusive)');
	});

	describe('#vertices', function() {

		it('can be empty', function() {
			var m = new Model({ name: 'm' });
			assert.equal(Object.keys(m.vertices).length, 0);
		});

	});

	it('`width` must be a number', function() {
		(function() {
			var m = new Model({ name: 'm', width: "string" });
		}).should.throw('`width` must be a number');
	});

	it('`width` must be greater than 0', function() {
		(function() {
			var m = new Model({ name: 'm', width: -1 });
		}).should.throw('`width` must be a number greater than 0');
	});

	describe('#addVertex', function() {

		it('should return a type 4 UUID', function() {
			var m = new Model({ name: 'm' });
			var id = m.addVertex('free', 0, 0, 0, 0);
			assert.equal(validateUUID(id), true);
		});

	});

	describe('#addEdge', function() {

		it('should return a type 4 UUID', function() {
			var m = new Model({ name: 'm' });
			var a = m.addVertex('free', 0, 0, 0, 0);
			var b = m.addVertex('free', 0, 0, 0, 0);
			var id = m.addEdge('spring', a, b, 0);
			assert.equal(validateUUID(id), true);
		});

		it('should validate the passed vertices', function() {
			(function() {
				var m = new Model({ name: 'm' });
				var a = m.addVertex('free', 0, 0, 0, 0);
				var b = 'de305d54-75b4-431b-adb2-eb6b9e546014';
				var id = m.addEdge('spring', a, b, 0);
			}).should.throw('Vertex passed to Edge constructor not found in vertices property');
		});

	});

});