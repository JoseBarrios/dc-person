const Organization = require('@josebarrios/organization');

class Person {

  constructor(model){
    model = model || {};
    this.model = model;
    this.additionalName = model.additionalName;
    this.address = model.address;
    this.affiliation = new Organization(model.affiliation)
    this.email = model.email;
    this.familyName = model.familyName;
    this.gender = model.gender;
    this.givenName = model.givenName;
    this.jobTitle = model.jobTitle;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
    this.worksFor = new Organization(model.worksFor)
    this.image = model.image;
  }

  get givenName(){ return this.model.givenName; }
  set givenName(string){
    if(!string) return;
    this.model.givenName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get additionalName(){ return this.model.additionalName; }
  set additionalName(string){
    if(!string) return;
    this.model.additionalName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get familyName(){ return this.model.familyName; }
  set familyName(string){
    if(!string) return;
    this.model.familyName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get email(){ return this.model.email; }
  set email(string){
    if(!string) return;
    this.model.email = string.toLowerCase();
  }

  get fullName(){
    let name = `${this.givenName} ${this.additionalName || '\b'} ${this.familyName}`;
    name = name.replace(/.?\x08/, "");
    return name;
  }

  stringify(){ return JSON.stringify(this, null, '\t') }
  serialize(){ return JSON.parse(this.stringify()); }
}

module.exports = Person;
