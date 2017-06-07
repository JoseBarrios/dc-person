'use strict'

var assert = require('assert');
var Person = require('../index.js');

var personModel = {};
personModel.givenName = 'jose';
personModel.familyName = 'barrios';
personModel.email = 'jose@barrios.io';
personModel.affiliation = {};
personModel.affiliation.name = 'BeVisible';
let person = new Person(personModel);



const key = {};
key.fullName = 'Jose Barrios';
key.givenName = 'Jose';
key.familyName = 'Barrios';
key.affiliationName = 'BeVisible';


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
