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

	it('should thow an error for an invalid friction value', function() {
		(function() {
			var m = new Model(true, "comment", -1);
		}).should.throw('`friction` must be a number between 0 and 1 (inclusive)');
	});

});