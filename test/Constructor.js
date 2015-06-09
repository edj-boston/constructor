var assert = require('assert'),
	should = require('should'),
	Constructor = require('../src/models/Constructor.js'),
	uuid = require('uuid'),
	validateUUID = require('../lib/validateUUID.js');


describe('Constructor', function() {

	it('The options argument is required', function() {
		(function() {
			var c = new Constructor();
		}).should.throw('You must pass an options object');
	});

});