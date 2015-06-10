var assert = require('assert'),
	should = require('should'),
	Constructor = require('../src/models/Constructor.js'),
	fs = require('fs');

describe('Constructor', function() {

	describe('#loadModel', function() {

		it('should reject a null argument', function() {
			(function() {
				var c = new Constructor();
				c.loadModel(null);
			}).should.throw('The argument cannot be null');
		});

		it('should detect and load a JSON argument', function() {
			var c = new Constructor();
			var json = fs.readFileSync('test/fixtures/model.json', 'utf-8');
			c.loadModel(json);
			assert.equal(c.model.name, 'model');
		});

		it('should detect and load an object argument', function() {
			var c = new Constructor();
			var json = fs.readFileSync('test/fixtures/model.json', 'utf-8');
			var obj = JSON.parse(json);
			c.loadModel(obj);
			assert.equal(c.model.name, 'model');
		});

	});

	describe('#loadModelJSON', function() {

		it('should reject invalid JSON', function() {
			(function() {
				var c = new Constructor();
				var json = '{';
				c.loadModelJSON(json);
			}).should.throw('Invalid JSON input');
		});

		it('should load a mode from a JSON string', function() {
			var c = new Constructor();
			var json = fs.readFileSync('test/fixtures/model.json', 'utf-8');
			c.loadModelJSON(json);
			assert.equal(c.model.name, 'model');
		});

	});

	describe('#loadModelObject', function() {

		it('should reject an invalid argument', function() {
			(function() {
				var c = new Constructor();
				c.loadModelObject(null);
			}).should.throw('Argument must be an object');
		});

		it('load a model from an object variable', function() {
			var c = new Constructor();
			var json = fs.readFileSync('test/fixtures/model.json', 'utf-8');
			var obj = JSON.parse(json);
			c.loadModelObject(obj);
			assert.equal(c.model.name, 'model');
		});

	});

});