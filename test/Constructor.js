var assert = require('assert'),
	should = require('should'),
	Constructor = require('../src/models/Constructor.js'),
	fs = require('fs');

describe('Constructor', function() {

	describe('#loadJSON', function() {

		it('The options argument is required', function() {
			var json = fs.readFileSync('test/fixtures/model.json', 'utf-8');
			var c = new Constructor();
			c.loadJSON(json);
			console.log(c.model);
		});

	});

});