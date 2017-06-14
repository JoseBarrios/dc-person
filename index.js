class Person {

  constructor(model){
    model = model || {};
    this.model = model;
    this.additionalName = model.additionalName;
    this.address = model.address;
    this.affiliation = model.affiliation;
    this.email = model.email;
    this.familyName = model.familyName;
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
  set additionalName(string){
    if(!string) return;
    this.model.additionalName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get address(){ return this.model.address; }
  set address(string){
    if(!string) return;
    this.model.address = string;
  }
  get affiliation(){ return this.model.affiliation; }
  set affiliation(string){
    if(!string) return;
    this.model.affiliation = string;
  }

  get email(){ return this.model.email; }
  set email(string){
    if(!string) return;
    this.model.email = string.toLowerCase();
  }

  get familyName(){ return this.model.familyName; }
  set familyName(string){
    if(!string) return;
    this.model.familyName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get gender(){ return this.model.gender; }
  set gender(string){
    if(!string) return;
    this.model.gender = string;
  }

  get givenName(){ return this.model.givenName; }
  set givenName(string){
    if(!string) return;
    this.model.givenName = string.charAt(0).toUpperCase() + string.slice(1);
  }

  get jobTitle(){ return this.model.jobTitle; }
  set jobTitle(string){
    if(!string) return;
    this.model.jobTitle = string;
  }

  get taxID(){ return this.model.taxID; }
  set taxID(string){
    if(!string) return;
    this.model.taxID = string;
  }

  get telephone(){ return this.model.telephone; }
  set telephone(string){
    if(!string) return;
    this.model.telephone = string;
  }
  get vatID(){ return this.model.vatID; }
  set vatID(string){
    if(!string) return;
    this.model.vatID = string;
  }
  get worksFor(){ return this.model.worksFor; }
  set worksFor(string){
    if(!string) return;
    this.model.worksFor = string;
  }

  get image(){ return this.model.image; }
  set image(string){
    if(!string) return;
    this.model.image = string;
  }


  //////////////////////
  // COMPUTED PROPERTIES
  //////////////////////

  get fullName(){
    let name = `${this.givenName} ${this.additionalName || '\b'} ${this.familyName}`;
    name = name.replace(/.?\x08/, "");
    return name;
  }


  ////////////////
  // CLASS METHODS
  ////////////////

  serialize(){
    let string = JSON.stringify(this.model);
    let obj = JSON.parse(string);
    return obj;
  }
}

module.exports = Person;
