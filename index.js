const Thing = require('@josebarrios/thing');
const Address = require('@josebarrios/postal-address')
const EMPTY = '';
const TYPE = 'Person'

class Person extends Thing {

  static get type(){ return TYPE; }
  //Inherets this.model, and this.emptyProperties

  constructor(model){
    model = model || {};
    super(model);

    this.additionalName = model.additionalName;
    this.address = model.address;
    this.affiliation = model.affiliation;
    this.alumniOf = model.alumniOf;
    this.award = model.award;
    this.birthDay = model.birthDay;
    this.birthPlace = model.birthPlace;
    this.brand = model.brand;
    this.children = model.children;
    this.colleague = model.colleague;
    this.contactPoint = model.contactPoint;
    this.deathDate = model.deathDate;
    this.deathPlace = model.deathPlace;
    this.duns = model.duns;
    this.email = model.email;
    this.familyName = model.familyName;
    this.faxNumber = model.faxNumber;
    this.follows = model.follows;
    this.founder = model.funder;
    this.gender = model.gender;
    this.givenName = model.givenName;
    this.globalLocationNumber = model.globalLocationNumber;
    this.hasOfferCatalog = model.hasOfferCatalog;
    this.hasPOS = model.hasPOS;
    this.height = model.height;
    this.homeLocation = model.homeLocation;
    this.honorificPrefix = model.honorificPrefix;
    this.honorificSuffix = model.honorificSuffix;
    this.isicV4 = model.isicV4;
    this.jobTitle = model.jobTitle;
    this.knows = model.knows;
    this.makesOffer = model.makesOffer;
    this.memberOf = model.memberOf;
    this.naics = model.naics;
    this.nationality = model.nationality;
    this.netWorth = model.netWorth;
    this.owns = model.owns;
    this.parent = model.parent;
    this.performerIn = model.performerIn;
    this.relatedTo = model.relatedTo;
    this.seeks = model.seeks;
    this.sibling = model.sibling;
    this.sponsor = model.sponsor;
    this.spouse = model.spouse;
    this.taxID = model.taxID;
    this.telephone = model.telephone;
    this.vatID = model.vatID;
    this.weight = model.weight;
    this.workLocation = model.workLocation;
    this.worksFor = model.worksFor;

  }

  get additionalName(){ return this.computed.additionalName; }
  set additionalName(value){
    if(Thing.isEmpty(value)){ this.computed.additionalName = EMPTY}
    else if(Thing.isString(value)){ this.computed.additionalName = Person.utils.capitalize(value); }
    else { Thing.logError(this.type+': additionalName must be a string', 'type') }
  }

  get address(){ return this.computed.address; }
  set address(value){
    if(Thing.isEmpty(value)){ this.computed.address = EMPTY}
    else if(Thing.isObject(value)){ this.computed.address = value }
    else if(Thing.isPlainObject(value)){ this.computed.address = value }
    else { Thing.logError(this.type+': address must be an object', 'type') }
  }

  get affiliation(){ return this.computed.affiliation; }
  set affiliation(value){
    if(Thing.isEmpty(value)){ this.computed.affiliation = EMPTY}
    else if(Thing.isObject(value)){ this.computed.affiliation = value }
    else if(Thing.isArray(value)){
      if(Thing.isObject(value[0])){
        this.computed.affiliation = value
      }else{
        Person.logError(this.type+': affiliation must be an array of objects', 'type')
      }
    }
    else { Thing.logError(this.type+': affiliation must be an array of objects', 'type') }
  }

  get alumniOf(){ return this.computed.alumniOf; }
  set alumniOf(value){
    if(Thing.isEmpty(value)){ this.computed.alumniOf = EMPTY}
    else if(Thing.isString(value)){ this.computed.alumniOf = value }
    else if(Thing.isObject(value)){ this.computed.alumniOf = value }
    else if(Thing.isArray(value)){ this.computed.alumniOf = value }
    else { Thing.logError(this.type+': alumniOf must be a string, object, or array', 'type') }
  }

  get award(){ return this.computed.award; }
  set award(value){
    if(Thing.isEmpty(value)){ this.computed.award = EMPTY}
    else if(Thing.isString(value)){ this.computed.award = value }
    else { Thing.logError(this.type+': award must be a string', 'type') }
  }

  get birthDay(){ return this.computed.birthDay; }
  set birthDay(value){
    if(Thing.isEmpty(value)){ this.computed.birthDay = EMPTY}
    else if(Thing.isObject(value)){ this.computed.birthDay = value }
    else if(Thing.isNumber(value)){ this.computed.birthDay = value }
    else { Thing.logError(this.type+': birthDay must be an object, or number (timestamp)', 'type') }
  }

  get birthPlace(){ return this.computed.birthPlace; }
  set birthPlace(value){
    if(Thing.isEmpty(value)){ this.computed.birthPlace = EMPTY}
    else if(Thing.isString(value)){ this.computed.birthPlace = value }
    else if(Thing.isObject(value)){ this.computed.birthPlace = value }
    else { Thing.logError(this.type+': birthPlace must be a string, or object', 'type') }
  }

  get brand(){ return this.computed.brand; }
  set brand(value){
    if(Thing.isEmpty(value)){ this.computed.brand = EMPTY}
    else if(Thing.isString(value)){ this.computed.brand = value }
    else if(Thing.isObject(value)){ this.computed.brand = value }
    else { Thing.logError(this.type+': brand must be a string or object', 'type') }
  }

  get children(){ return this.computed.children; }
  set children(value){
    if(Thing.isEmpty(value)){ this.computed.children = EMPTY}
    else if(Thing.isString(value)){ this.computed.children = value }
    else if(Thing.isObject(value)){ this.computed.children = value }
    else if(Thing.isArray(value)){ this.computed.children = value }
    else { Thing.logError(this.type+': children must be a string, object, or array', 'type') }
  }

  get colleague(){ return this.computed.colleague; }
  set colleague(value){
    if(Thing.isEmpty(value)){ this.computed.colleague = EMPTY}
    else if(Thing.isString(value)){ this.computed.colleague = value }
    else if(Thing.isObject(value)){ this.computed.colleague = value }
    else if(Thing.isArray(value)){ this.computed.colleague = value }
    else { Thing.logError(this.type+': colleague must be a string, object, or array', 'type') }
  }

  get contactPoint(){ return this.computed.contactPoint; }
  set contactPoint(value){
    if(Thing.isEmpty(value)){ this.computed.contactPoint = EMPTY}
    else if(Thing.isString(value)){ this.computed.contactPoint = value }
    else if(Thing.isObject(value)){ this.computed.contactPoint = value }
    else { Thing.logError(this.type+': contactPoint must be a string or object', 'type') }
  }

  get deathDate(){ return this.computed.deathDate; }
  set deathDate(value){
    if(Thing.isEmpty(value)){ this.computed.deathDate = EMPTY}
    else if(Thing.isObject(value)){ this.computed.deathDate = value }
    else if(Thing.isNumber(value)){ this.computed.deathDate = value }
    else { Thing.logError(this.type+': deathDate must be a number of object', 'type') }
  }

  get deathPlace(){ return this.computed.deathPlace; }
  set deathPlace(value){
    if(Thing.isEmpty(value)){ this.computed.deathPlace = EMPTY}
    else if(Thing.isString(value)){ this.computed.deathPlace = value }
    else if(Thing.isObject(value)){ this.computed.deathPlace = value }
    else { Thing.logError(this.type+': deathPlace must be a string or object', 'type') }
  }

  get duns(){ return this.computed.duns; }
  set duns(value){
    if(Thing.isEmpty(value)){ this.computed.duns = EMPTY}
    else if(Thing.isString(value)){ this.computed.duns = value }
    else { Thing.logError(this.type+': duns must be a string', 'type') }
  }

  get email(){ return this.computed.email; }
  set email(value){
    if(Thing.isEmpty(value)){ this.computed.email = EMPTY}
    else if(Thing.isString(value)){
      let email = Person.utils.toLower(value);
      email = Person.utils.trim(email);
      this.computed.email = email;
    } else { Thing.logError(this.type+': email must be a string, object, or array', 'type') }
  }

  get familyName(){ return this.computed.familyName; }
  set familyName(value){
    if(Thing.isEmpty(value)){ this.computed.familyName = EMPTY}
    else if(Thing.isString(value)){
      this.computed.familyName = Person.utils.capitalize(value);
    } else { Thing.logError(this.type+': familyName must be a string', 'type') }
  }

  get faxNumber(){ return this.computed.faxNumber; }
  set faxNumber(value){
    if(Thing.isEmpty(value)){ this.computed.faxNumber = EMPTY}
    else if(Thing.isNumber(value)){ this.computed.faxNumber = value }
    else { Thing.logError(this.type+': faxNumber must be a number', 'type') }
  }

  get follows(){ return this.computed.follows; }
  set follows(value){
    if(Thing.isEmpty(value)){ this.computed.follows = EMPTY}
    else if(Thing.isString(value)){ this.computed.follows = value }
    else if(Thing.isObject(value)){ this.computed.follows = value }
    else if(Thing.isArray(value)){ this.computed.follows = value }
    else { Thing.logError(this.type+': follows must be a string, object, or array', 'type') }
  }

  get founder(){ return this.computed.founder; }
  set founder(value){
    if(Thing.isEmpty(value)){ this.computed.founder = EMPTY}
    else if(Thing.isString(value)){ this.computed.founder = value }
    else if(Thing.isObject(value)){ this.computed.founder = value }
    else if(Thing.isArray(value)){ this.computed.founder = value }
    else { Thing.logError(this.type+': founder must be a string, object, or array', 'type') }
  }


  get gender(){ return this.computed.gender; }
  set gender(value){
    if(Thing.isEmpty(value)){ this.computed.gender = EMPTY}
    else if(Thing.isString(value)){ this.computed.gender = value }
    else if(Thing.isObject(value)){ this.computed.gender = value }
    else { Thing.logError(this.type+': gender must be a string or object', 'type') }
  }

  get givenName(){ return this.computed.givenName; }
  set givenName(value){
    if(Thing.isEmpty(value)){ this.computed.givenName = EMPTY}
    else if(Thing.isString(value)){
      this.computed.givenName = Person.utils.capitalize(value);
    } else { Thing.logError(this.type+': givenName must be a string', 'type') }
  }

  get globalLocationNumber(){ return this.computed.globalLocationNumber; }
  set globalLocationNumber(value){
    if(Thing.isEmpty(value)){ this.computed.globalLocationNumber = EMPTY}
    else if(Thing.isString(value)){ this.computed.globalLocationNumber = value }
    else if(Thing.isNumber(value)){ this.computed.globalLocationNumber = value }
    else { Thing.logError(this.type+': globalLocationNumber must be a string or number', 'type') }
  }

  get hasOfferCatalog(){ return this.computed.hasOfferCatalog; }
  set hasOfferCatalog(value){
    if(Thing.isEmpty(value)){ this.computed.hasOfferCatalog = EMPTY}
    else if(Thing.isString(value)){ this.computed.hasOfferCatalog = value }
    else if(Thing.isObject(value)){ this.computed.hasOfferCatalog = value }
    else if(Thing.isArray(value)){ this.computed.hasOfferCatalog = value }
    else { Thing.logError(this.type+': hasOfferCatalog must be a string, object, or array', 'type') }
  }

  get hasPOS(){ return this.computed.hasPOS; }
  set hasPOS(value){
    if(Thing.isEmpty(value)){ this.computed.hasPOS = EMPTY}
    else if(Thing.isString(value)){ this.computed.hasPOS = value }
    else if(Thing.isObject(value)){ this.computed.hasPOS = value }
    else if(Thing.isArray(value)){ this.computed.hasPOS = value }
    else { Thing.logError(this.type+': hasPOS must be a string, object, or array', 'type') }
  }

  get height(){ return this.computed.height; }
  set height(value){
    if(Thing.isEmpty(value)){ this.computed.height = EMPTY}
    else if(Thing.isString(value)){ this.computed.height = value }
    else if(Thing.isObject(value)){ this.computed.height = value }
    else if(Thing.isNumber(value)){ this.computed.height = value }
    else { Thing.logError(this.type+': height must be a string, object, or number', 'type') }
  }

  get homeLocation(){ return this.computed.homeLocation; }
  set homeLocation(value){
    if(Thing.isEmpty(value)){ this.computed.homeLocation = EMPTY}
    else if(Thing.isString(value)){ this.computed.homeLocation = value }
    else if(Thing.isObject(value)){ this.computed.homeLocation = value }
    else { Thing.logError(this.type+': homeLocation must be a string or object', 'type') }
  }

  get honorificPrefix(){ return this.computed.honorificPrefix; }
  set honorificPrefix(value){
    if(Thing.isEmpty(value)){ this.computed.honorificPrefix = EMPTY}
    else if(Thing.isString(value)){ this.computed.honorificPrefix = value }
    else { Thing.logError(this.type+': honorificPrefix must be a string', 'type') }
  }

  get honorificSuffix(){ return this.computed.honorificSuffix; }
  set honorificSuffix(value){
    if(Thing.isEmpty(value)){ this.computed.honorificSuffix = EMPTY}
    else if(Thing.isString(value)){ this.computed.honorificSuffix = value }
    else { Thing.logError(this.type+': honorificSuffix must be a string', 'type') }
  }

  get isicV4(){ return this.computed.isicV4; }
  set isicV4(value){
    if(Thing.isEmpty(value)){ this.computed.isicV4 = EMPTY}
    else if(Thing.isString(value)){ this.computed.isicV4 = value }
    else { Thing.logError(this.type+': isicV4 must be a string', 'type') }
  }

  get jobTitle(){ return this.computed.jobTitle; }
  set jobTitle(value){
    if(Thing.isEmpty(value)){ this.computed.jobTitle = EMPTY}
    else if(Thing.isString(value)){ this.computed.jobTitle = value }
    else { Thing.logError(this.type+': jobTitle must be a string', 'type') }
  }

  get knows(){ return this.computed.knows; }
  set knows(value){
    if(Thing.isEmpty(value)){ this.computed.knows = EMPTY}
    else if(Thing.isString(value)){ this.computed.knows = value }
    else if(Thing.isObject(value)){ this.computed.knows = value }
    else if(Thing.isArray(value)){ this.computed.knows = value }
    else { Thing.logError(this.type+': knows must be a string, object, or array', 'type') }
  }

  get makesOffer(){ return this.computed.makesOffer; }
  set makesOffer(value){
    if(Thing.isEmpty(value)){ this.computed.makesOffer = EMPTY}
    else if(Thing.isString(value)){ this.computed.makesOffer = value }
    else if(Thing.isObject(value)){ this.computed.makesOffer = value }
    else if(Thing.isArray(value)){ this.computed.makesOffer = value }
    else { Thing.logError(this.type+': makesOffer must be a string, object, or array', 'type') }
  }

  get memberOf(){ return this.computed.memberOf; }
  set memberOf(value){
    if(Thing.isEmpty(value)){ this.computed.memberOf = EMPTY}
    else if(Thing.isString(value)){ this.computed.memberOf = value }
    else if(Thing.isObject(value)){ this.computed.memberOf = value }
    else if(Thing.isArray(value)){ this.computed.memberOf = value }
    else { Thing.logError(this.type+': memberOf must be a string, object, or array', 'type') }
  }

  get naics(){ return this.computed.naics; }
  set naics(value){
    if(Thing.isEmpty(value)){ this.computed.naics = EMPTY}
    else if(Thing.isString(value)){ this.computed.naics = value }
    else { Thing.logError(this.type+': naics must be a string', 'type') }
  }

  get nationality(){ return this.computed.nationality; }
  set nationality(value){
    if(Thing.isEmpty(value)){ this.computed.nationality = EMPTY}
    else if(Thing.isString(value)){ this.computed.nationality = value }
    else if(Thing.isObject(value)){ this.computed.nationality = value }
    else if(Thing.isArray(value)){ this.computed.nationality = value }
    else { Thing.logError(this.type+': nationality must be a string, object, or array', 'type') }
  }

  get netWorth(){ return this.computed.netWorth; }
  set netWorth(value){
    if(Thing.isEmpty(value)){ this.computed.netWorth = EMPTY}
    else if(Thing.isString(value)){ this.computed.netWorth = value }
    else if(Thing.isObject(value)){ this.computed.netWorth = value }
    else if(Thing.isNumber(value)){ this.computed.netWorth = value }
    else { Thing.logError(this.type+': netWorth must be a string, object, or number', 'type') }
  }

  get owns(){ return this.computed.owns; }
  set owns(value){
    if(Thing.isEmpty(value)){ this.computed.owns = EMPTY}
    else if(Thing.isString(value)){ this.computed.owns = value }
    else if(Thing.isObject(value)){ this.computed.owns = value }
    else if(Thing.isArray(value)){ this.computed.owns = value }
    else { Thing.logError(this.type+': owns must be a string, object, or array', 'type') }
  }

  get parent(){ return this.computed.parent; }
  set parent(value){
    if(Thing.isEmpty(value)){ this.computed.parent = EMPTY}
    else if(Thing.isString(value)){ this.computed.parent = value }
    else if(Thing.isObject(value)){ this.computed.parent = value }
    else if(Thing.isArray(value)){ this.computed.parent = value }
    else { Thing.logError(this.type+': parent must be a string, object, or array', 'type') }
  }

  get performerIn(){ return this.computed.performerIn; }
  set performerIn(value){
    if(Thing.isEmpty(value)){ this.computed.performerIn = EMPTY}
    else if(Thing.isString(value)){ this.computed.performerIn = value }
    else if(Thing.isObject(value)){ this.computed.performerIn = value }
    else if(Thing.isArray(value)){ this.computed.performerIn = value }
    else { Thing.logError(this.type+': performerIn must be a string, object, or array', 'type') }
  }

  get relatedTo(){ return this.computed.relatedTo; }
  set relatedTo(value){
    if(Thing.isEmpty(value)){ this.computed.relatedTo = EMPTY}
    else if(Thing.isString(value)){ this.computed.relatedTo = value }
    else if(Thing.isObject(value)){ this.computed.relatedTo = value }
    else if(Thing.isArray(value)){ this.computed.relatedTo = value }
    else { Thing.logError(this.type+': relatedTo must be a string, object, or array') }
  }

  get seeks(){ return this.computed.seek; }
  set seeks(value){
    if(Thing.isEmpty(value)){ this.computed.seeks = EMPTY}
    else if(Thing.isString(value)){ this.computed.seeks = value }
    else if(Thing.isObject(value)){ this.computed.seeks = value }
    else if(Thing.isArray(value)){ this.computed.seeks = value }
    else { Thing.logError(this.type+': seeks must be a string, object, or array', 'type') }
  }

  get sibling(){ return this.computed.sibling; }
  set sibling(value){
    if(Thing.isEmpty(value)){ this.computed.sibling = EMPTY}
    else if(Thing.isString(value)){ this.computed.sibling = value }
    else if(Thing.isObject(value)){ this.computed.sibling = value }
    else if(Thing.isArray(value)){ this.computed.sibling = value }
    else { Thing.logError(this.type+': sibling must be a string, object, or array', 'type') }
  }

  get sponsor(){ return this.computed.sponsor; }
  set sponsor(value){
    if(Thing.isEmpty(value)){ this.computed.sponsor = EMPTY}
    else if(Thing.isString(value)){ this.computed.sponsor = value }
    else if(Thing.isObject(value)){ this.computed.sponsor = value }
    else if(Thing.isArray(value)){ this.computed.sponsor = value }
    else { Thing.logError(this.type+': sponsor must be a string, object, or array', 'type') }
  }

  get spouse(){ return this.computed.spouse; }
  set spouse(value){
    if(Thing.isEmpty(value)){ this.computed.spouse = EMPTY}
    else if(Thing.isString(value)){ this.computed.spouse = value }
    else if(Thing.isObject(value)){ this.computed.spouse = value }
    else if(Thing.isArray(value)){ this.computed.spouse = value }
    else { Thing.logError(this.type+': spouse must be a string, object, or array', 'type') }
  }

  get taxID(){ return this.computed.taxID; }
  set taxID(value){
    if(Thing.isEmpty(value)){ this.computed.taxID = EMPTY}
    else if(Thing.isString(value)){ this.computed.taxID = value }
    else if(Thing.isObject(value)){ this.computed.taxID = value }
    else if(Thing.isArray(value)){ this.computed.taxID = value }
    else { Thing.logError(this.type+': taxID must be a string, object, or array', 'type') }
  }

  get telephone(){ return this.computed.telephone; }
  set telephone(value){
    if(Thing.isEmpty(value)){ this.computed.telephone = EMPTY}
    else if(Thing.isString(value)){ this.computed.telephone = value }
    else if(Thing.isNumber(value)){ this.computed.telephone = value }
    else if(Thing.isObject(value)){ this.computed.telephone = value }
    else if(Thing.isArray(value)){ this.computed.telephone = value }
    else { Thing.logError(this.type+': telephone must be a string, object, number or array', 'type') }
  }

  get vatID(){ return this.computed.vatID; }
  set vatID(value){
    if(Thing.isEmpty(value)){ this.computed.vatID = EMPTY}
    else if(Thing.isString(value)){ this.computed.vatID = value }
    else if(Thing.isObject(value)){ this.computed.vatID = value }
    else if(Thing.isArray(value)){ this.computed.vatID = value }
    else { Thing.logError(this.type+': vatID must be a string, object, or array', 'type') }
  }

  get weight(){ return this.computed.weight; }
  set weight(value){
    if(Thing.isEmpty(value)){ this.computed.weight = EMPTY}
    else if(Thing.isString(value)){ this.computed.weight = value }
    else if(Thing.isObject(value)){ this.computed.weight = value }
    else if(Thing.isNumber(value)){ this.computed.weight = value }
    else { Thing.logError(this.type+': weight must be a string, object, or number', 'type') }
  }

  get workLocation(){ return this.computed.workLocation; }
  set workLocation(value){
    if(Thing.isEmpty(value)){ this.computed.workLocation = EMPTY}
    else if(Thing.isString(value)){ this.computed.workLocation = value }
    else if(Thing.isObject(value)){ this.computed.workLocation = value }
    else if(Thing.isArray(value)){ this.computed.workLocation = value }
    else { Thing.logError(this.type+': workLocation must be a string, object, or array', 'type') }
  }

  get worksFor(){ return this.computed.worksFor; }
  set worksFor(value){
    if(Thing.isEmpty(value)){ this.computed.worksFor = EMPTY}
    else if(Thing.isString(value)){ this.computed.worksFor = value }
    else if(Thing.isObject(value)){ this.computed.worksFor = value }
    else if(Thing.isArray(value)){ this.computed.worksFor = value }
    else { Thing.logError(this.type+': worksFor must be a string, object, or array', 'type') }
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
