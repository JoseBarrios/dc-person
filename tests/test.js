'use strict'

const assert = require('assert');
const Person = require('../index.js');
const Address = require('@josebarrios/postal-address');
const Organization = require('@josebarrios/organization');
const ObjectID = require('mongodb').ObjectID;


var model = {};
let person = new Person(model);
person.muteErrors = true;


describe('Person', function() {

  describe('Static Methods', function() {

    describe('Person.type', function() {
      it('should return the class type', function() {
        assert.equal(Person.type, 'Person' );
      });
    });

  });//Static

  describe('Instance', function() {


    describe('person.type', function() {
      it('should return the class type', function() {
        assert.equal(person.type, 'Person' );
        assert.equal(Person.type, person.type );
      });
    });

    describe('person.additionalName', function() {
      it('should set/get the additionalName property', function() {
        person.additionalName = 'luis';
        assert.equal(person.additionalName, 'Luis');
      });
    });

    describe('person.address', function() {
      it('should set/get the address property', function() {
        let address = new Address({})
        person.address = Address.model(address);
        assert.equal(person.address, Address.model(address) );
        address = ObjectID('59486504191573839556bf19');
        person.address = address;
        assert.deepEqual(person.address, address );
        person.address = '1234 Random St.';
        assert.deepEqual(person.address, address );
      });
    });

/*    describe('person.affiliation', function() {*/
      //it('should set/get the affiliation property', function() {
        //let organization = new Organization({})
        //person.affiliation.push(Organization.model(organization))
        //let key = [];
        //key.push(Organization.model(organization));
        //assert.deepEqual(person.affiliation, key);
        //person.affiliation = [];
        //assert.deepEqual(person.affiliation, []);
        //person.affiliation = {};
        //assert.deepEqual(person.affiliation, []);
      //});
    //});


    //describe('person.xxx', function() {
      //it('should set/get the xxx property', function() {
        //assert.equal(person.xxx, true);
      //});
    //});



    //describe('person.fullName', function() {
      //it('should return the given and family names in a single string', function() {
        //assert.equal(person.fullName, key.fullName);
      //});
    //});

    //describe('person.givenName', function() {
      //it('should capitalize given name', function() {
        //assert.equal(person.givenName, key.givenName);
      //});
    //});

    //describe('person.familyName', function() {
      //it('should capitalize family name', function() {
        //assert.equal(person.familyName, key.familyName);
      //});
    //});

    //describe('person.fullName', function() {
      //it('should return the given and family names in a single string', function() {
        //assert.equal(person.fullName, key.fullName);
      //});
    //});

  });//Instance

});//Person
