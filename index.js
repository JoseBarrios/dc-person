const Thing = require('@josebarrios/thing');

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
    if(!value || value === "") return;
    this.model.additionalName = value.charAt(0).toUpperCase() + value.slice(1);
  }

  get address(){ return this.model.address; }
  set address(value){
    if(!value || value === "") return;
    this.model.address = value;
  }
  get affiliation(){ return this.model.affiliation; }
  set affiliation(value){
    if(!value || value === "") return;
    this.model.affiliation = value;
  }

  get email(){ return this.model.email; }
  set email(value){
    if(!value || value === "") return;
    this.model.email = value.toLowerCase();
  }

  get familyName(){ return this.model.familyName; }
  set familyName(value){
    if(!value || value === "") return;
    this.model.familyName = value.charAt(0).toUpperCase() + value.slice(1);
  }

  get follows(){ return this.model.follows; }
  set follows(value){
    if(!value || value === "") return;
    this.model.follows = value;
  }


  get gender(){ return this.model.gender; }
  set gender(value){
    if(!value || value === "") return;
    this.model.gender = value;
  }

  get givenName(){ return this.model.givenName; }
  set givenName(value){
    if(!value || value === "") return;
    this.model.givenName = value.charAt(0).toUpperCase() + value.slice(1);
  }

  get jobTitle(){ return this.model.jobTitle; }
  set jobTitle(value){
    if(!value || value === "") return;
    this.model.jobTitle = value;
  }

  get taxID(){ return this.model.taxID; }
  set taxID(value){
    if(!value || value === "") return;
    this.model.taxID = value;
  }

  get telephone(){ return this.model.telephone; }
  set telephone(value){
    if(!value || value === "") return;
    this.model.telephone = value;
  }
  get vatID(){ return this.model.vatID; }
  set vatID(value){
    if(!value || value === "") return;
    this.model.vatID = value;
  }
  get worksFor(){ return this.model.worksFor; }
  set worksFor(value){
    if(!value || value === "") return;
    this.model.worksFor = value;
  }

  get image(){ return this.model.image; }
  set image(value){
    if(!value || value === "") return;
    this.model.image = value;
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
