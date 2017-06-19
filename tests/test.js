'use strict'

var assert = require('assert');
var Person = require('../index.js');

var model = {};
model.givenName = 'jose';
model.familyName = 'barrios';
model.email = 'jose@barrios.io';
model.affiliation = {};
model.affiliation.name = 'BeVisible';
model.vatID = 1234;
model.identifier = '12345'
model.additionalName = "";//EMPTY STRING
let person = new Person(model);



const key = {};
key.fullName = 'Jose Barrios';
key.givenName = 'Jose';
key.familyName = 'Barrios';
key.affiliationName = 'BeVisible';

describe('#serialize', function() {
	it('should return the serialized version of the model', function() {
    let person = new Person(model);
    let serialized = person.serialize();
		assert.equal(person.additionalName, undefined);
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

describe('person.affiliation.name', function() {
	it('should return the name of the organization the person is affiliated to', function() {
		assert.equal(person.affiliation.name, key.affiliationName);
	});
});
