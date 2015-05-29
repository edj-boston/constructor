var should = require('should'),
	Model = require('../src/models/Model.js'),
	uuid = require('uuid');


describe('Model', function() {

	it('should thow an error for an invalid autoReverse value', function() {
		(function() {
			var m = new Model(null);
		}).should.throw('autoReverse must be boolean');
	});

	it('should thow an error for an invalid comment', function() {
		(function() {
			var m = new Model(true, null);
		}).should.throw('comment must be a string');
	});

	it('should thow an error for an f value less than zero', function() {
		(function() {
			var m = new Model(true, "comment", -1);
		}).should.throw('`f` must be a number between 0 and 1 (inclusive)');
	});

	it('should thow an error for an f value greater than 1', function() {
		(function() {
			var m = new Model(true, "comment", 1.5);
		}).should.throw('`f` must be a number between 0 and 1 (inclusive)');
	});

	it('should thow an error for a gravity value less than zero', function() {
		(function() {
			var m = new Model(true, "comment", 0, -1);
		}).should.throw('`gravity` must be a number between 0 and 1 (inclusive)');
	});

	it('should thow an error for a gravity value greater than 1', function() {
		(function() {
			var m = new Model(true, "comment", 0, 1.5);
		}).should.throw('`gravity` must be a number between 0 and 1 (inclusive)');
	});

	it('should thow an error for an invalid gravityDirection value', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 0);
		}).should.throw('`gravityDirection` must be either -1 or 1');
	});

	it('should thow an error for an invalid height value', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 1, "string");
		}).should.throw('`height` must be a number greater than 0');
	});

	it('should thow an error for a height value less than zero', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 1, -1);
		}).should.throw('`height` must be a number greater than 0');
	});

	it('should thow an error for an invalid name', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 1, 1, null);
		}).should.throw('name must be a string');
	});

	it('should thow an error for a k value less than zero', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 1, 1, "name", -1);
		}).should.throw('`k` must be a number between 0 and 1 (inclusive)');
	});

	it('should thow an error for a k value greater than 1', function() {
		(function() {
			var m = new Model(true, "comment", 0, 0, 1, 1, "name", 1.5);
		}).should.throw('`k` must be a number between 0 and 1 (inclusive)');
	});

});