'use strict'

var assert = require('assert');
var Person = require('../index.js');

var model = {};
model.givenName = 'jose';
model.familyName = 'barrios';
model.email = 'jose@barrios.io';
let person = new Person(model);

const key = {};
key.fullName = 'Jose Barrios';
key.givenName = 'Jose';
key.familyName = 'Barrios';


describe('person.fullName', function() {
	it('should return the given and family names in a single string', function() {
		assert.equal(person.fullName, key.fullName);
	});
});

describe('person.givenName', function() {
	it('should capitalize given name', function() {
		assert.equal(person.givenName, key.givenName);
	});
});

describe('person.familyName', function() {
	it('should capitalize family name', function() {
		assert.equal(person.familyName, key.familyName);
	});
});
