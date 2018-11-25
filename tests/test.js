'use strict'

const assert = require('assert');
const Person = require('../index.js');

var model = {};
model.givenName = 'jose';
model.familyName = 'bArrios';
model.additionalName =' luis';
model.email = 'jose@barrios.io'
let person = new Person(model);
person.muteErrors = true;

const TYPE = "PersonDataController";

describe('Person', function() {

  describe('Static Methods', function() {

    describe('Person.type', function() {
      it('should return the class type', function() {
        assert.equal(Person.type, TYPE);
      });
    });

  });//Static

  describe('Instance', function() {

    describe('person.type', function() {
      it('should return the class type', function() {
        assert.equal(person.type, TYPE );
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
        var model = {};
        model.addressCountry = 'Canada';
        model.addressLocality = 'Victoria';
        model.addressRegion = 'BC';
        model.postOfficeBoxNumber  = 'POBOX123';
        model.postalCode = 'V8W1L6';
        model.streetAddress = '204-759 Yates St';
        //let address = new Address(model);
        person.address = model;
        assert.equal(person.address, model );
      });
    });

    describe('person.birthDay', function() {
      it('should set/get the birthDay property', function() {
          const now = Person.moment();
          person.birthDay = now.format();
          assert.equal(person.birthDay, now.utc().format());
      });
    });

    describe('person.fullName', function() {
      it('should return the given and family names in a single string', function() {
        assert.equal(person.fullName, 'Jose Luis Barrios');
        person.additionalName = null;
        assert.equal(person.fullName, 'Jose Barrios');

      });
    });

    describe('#isValidKey', function() {
      it('should return true if its a valid object property', function() {
        assert.equal(person.isValidKey('givenName'), true);
        assert.equal(person.isValidKey('invalid'), false);

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
