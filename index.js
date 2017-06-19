const Thing = require('@josebarrios/thing');
const EMPTY_STRING = "";

class Person extends Thing {

  constructor(model){
    model = model || {};
    super(model);

    this.additionalName = model.additionalName;
    this.address = model.address;
    this.affiliation = model.affiliation;
    this.email = model.email;
    this.familyName = model.familyName;
    this.follows = model.follows;
    this.gender = model.gender;
    this.givenName = model.givenName;
    this.jobTitle = model.jobTitle;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
    this.worksFor = model.worksFor;
    this.image = model.image;
  }

  get additionalName(){ return this.model.additionalName; }
  set additionalName(value){
    if(!value || value === EMPTY_STRING){
      this.model.additionalName = undefined;
    } else {
      let lowerCase = value.toLowerCase();
      this.model.additionalName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  }

  get address(){ return this.model.address || null; }
  set address(value){
    if(!value || value === EMPTY_STRING) { this.model.address = undefined; }
    else { this.model.address = value; }
  }

  get affiliation(){ return this.model.affiliation || null; }
  set affiliation(value){
    if(!value || value === EMPTY_STRING){ this.model.affiliation = undefined }
    else { this.model.affiliation = value; }
  }

  get email(){ return this.model.email || null; }
  set email(value){
    if(!value || value === EMPTY_STRING) { this.model.email = undefined; }
    else { this.model.email = value.toLowerCase(); }
  }

  get familyName(){ return this.model.familyName || null; }
  set familyName(value){
    if(!value || value === EMPTY_STRING) { this.model.familyName = undefined; }
    else{
      let lowerCase = value.toLowerCase();
      this.model.familyName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  }

  get follows(){ return this.model.follows || null; }
  set follows(value){
    if(!value || value === EMPTY_STRING) { this.model.follows = undefined; }
    else { this.model.follows = value; }
  }


  get gender(){ return this.model.gender || null; }
  set gender(value){
    if(!value || value === EMPTY_STRING) { this.model.gender = undefined; }
    else { this.model.gender = value; }
  }

  get givenName(){ return this.model.givenName || null; }
  set givenName(value){
    if(!value || value === EMPTY_STRING) { this.model.givenName = undefined; }
    else {
      let lowerCase = value.toLowerCase();
      this.model.givenName = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    }
  }

  get jobTitle(){ return this.model.jobTitle || null; }
  set jobTitle(value){
    if(!value || value === EMPTY_STRING) { this.model.jobTitle = undefined; }
    else { this.model.jobTitle = value; }
  }

  get taxID(){ return this.model.taxID || null; }
  set taxID(value){
    if(!value || value === EMPTY_STRING) { this.model.taxID = undefined; }
    else { this.model.taxID = value; }
  }

  get telephone(){ return this.model.telephone || null; }
  set telephone(value){
    if(!value || value === EMPTY_STRING) { this.model.telephone = undefined; }
    else { this.model.telephone = value; }
  }

  get vatID(){ return this.model.vatID || null; }
  set vatID(value){
    if(!value || value === EMPTY_STRING) { this.model.vatID = undefined; }
    else { this.model.vatID = value; }
  }

  get worksFor(){ return this.model.worksFor || null; }
  set worksFor(value){
    if(!value || value === EMPTY_STRING) { this.model.worksFor = undefined; }
    else { this.model.worksFor = value; }
  }



  //////////////////////
  // COMPUTED PROPERTIES
  //////////////////////

  get fullName(){
    let name = `${this.givenName} ${this.additionalName || '\b'} ${this.familyName}`;
    name = name.replace(/.?\x08/, "");
    return name;
  }

}

module.exports = Person;
