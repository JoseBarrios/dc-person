'use strict'

var assert = require('assert');
var Person = require('../index.js');

var model = {};
model.givenName = 'jose';
model.familyName = 'barrios';
model.email = 'jose@barrios.io';
model.affiliation = null;
model.vatID = 1234;
model.identifier = undefined;
model.additionalName = "";//EMPTY STRING
model.gender = '';//EMPTY STRING
let person = new Person(model);


const key = {};
key.fullName = 'Jose Barrios';
key.givenName = 'Jose';
key.familyName = 'Barrios';
key.affiliationName = 'BeVisible';

describe('#serialize', function() {
	it('should return the serialized version of the model', function() {
		assert.equal(person.model.givenName, 'Jose');
		assert.equal(person.model.additionalName, '');
	});
});

describe('#getEmptyProperties', function() {
	it('should return a new object with all the empty properties of the person model', function() {
		assert.equal(person.emptyProperties.additionalName, '');
		assert.equal(person.emptyProperties.gender, '');
	});
});

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
