const Thing = require('dc-thing');
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
        //this.alumniOf = model.alumniOf;
        //this.award = model.award;
        this.birthDay = model.birthDay;
        //this.birthPlace = model.birthPlace;
        //this.brand = model.brand;
        this.children = model.children;
        //this.colleague = model.colleague;
        this.contactPoint = model.contactPoint;
        //this.deathDate = model.deathDate;
        //this.deathPlace = model.deathPlace;
        //this.duns = model.duns;
        this.email = model.email;
        this.familyName = model.familyName;
        this.faxNumber = model.faxNumber;
        //this.follows = model.follows;
        //this.founder = model.funder;
        this.gender = model.gender;
        this.givenName = model.givenName;
        //this.globalLocationNumber = model.globalLocationNumber;
        //this.hasOfferCatalog = model.hasOfferCatalog;
        //this.hasPOS = model.hasPOS;
        //this.height = model.height;
        this.homeLocation = model.homeLocation;
        this.honorificPrefix = model.honorificPrefix;
        //this.honorificSuffix = model.honorificSuffix;
        //this.isicV4 = model.isicV4;
        this.jobTitle = model.jobTitle;
        //this.knows = model.knows;
        //this.makesOffer = model.makesOffer;
        //this.memberOf = model.memberOf;
        //this.naics = model.naics;
        //this.nationality = model.nationality;
        //this.netWorth = model.netWorth;
        //this.owns = model.owns;
        this.parent = model.parent;
        //this.performerIn = model.performerIn;
        //this.relatedTo = model.relatedTo;
        //this.seeks = model.seeks;
        this.sibling = model.sibling;
        //this.sponsor = model.sponsor;
        this.spouse = model.spouse;
        this.taxID = model.taxID;
        this.telephone = model.telephone;
        //this.vatID = model.vatID;
        //this.weight = model.weight;
        //this.workLocation = model.workLocation;
        this.worksFor = model.worksFor;

    }

    get additionalName(){ return this.model.additionalName }
    set additionalName(value){
        if(Thing.isNull(value)){ delete this.model.additionalName; }
        else if(Thing.isString(value)){ this.model.additionalName = Thing.utils.capitalize(value); }
    }

    get address(){ return this.model.address }
    set address(value){
        if(Thing.isNull(value)){ delete this.model.address; }
        else if(Thing.isString(value)){ this.model.address = value }
        else if(Thing.isObject(value)){ this.model.address = value }
        else if(Thing.isPlainObject(value)){ this.model.address = value }
        //else { Thing.logError(this.type+': address must be an object or string', 'type') }
    }

    get affiliation(){ return this.model.affiliation }
    set affiliation(value){
        if(Thing.isNull(value)){ delete this.model.affiliation; }
        else if(Thing.isArray(value)){ this.model.affiliation = value }
        //else { Thing.logError(this.type+': affiliation must be an array of objects', 'type') }
    }

    get alumniOf(){ return this.model.alumniOf; }
    set alumniOf(value){
        if(Thing.isNull(value)){ delete this.model.alumniOf; }
        else if(Thing.isString(value)){ this.model.alumniOf = value }
        else if(Thing.isObject(value)){ this.model.alumniOf = value }
        else if(Thing.isArray(value)){ this.model.alumniOf = value }
        //else { Thing.logError(this.type+': alumniOf must be a string, object, or array', 'type') }
    }

    get award(){ return this.model.award; }
    set award(value){
        if(Thing.isNull(value)){ delete this.model.award; }
        else if(Thing.isString(value)){ this.model.award = value }
        //else { Thing.logError(this.type+': award must be a string', 'type') }
    }

    get birthDay(){ return this.model.birthDay; }
    set birthDay(value){
        console.log("BIRTHDAY", value);
        if(Thing.isNull(value)){ console.log("NULL"); delete this.model.birthDay; }
        else if(Thing.isString(value)){console.log("STRING"); this.model.birthDay = value }
        else if(Thing.isNumber(value)){ console.log("NUM"); this.model.birthDay = value }
        else if(Thing.isObject(value)){ console.log("OBJ"); this.model.birthDay = value }
        //else { Thing.logError(this.type+': birthDay must be an object, or number (timestamp)', 'type') }
    }

    get birthPlace(){ return this.model.birthPlace; }
    set birthPlace(value){
        if(Thing.isNull(value)){ delete this.model.birthPlace; }
        else if(Thing.isString(value)){ this.model.birthPlace = value }
        else if(Thing.isObject(value)){ this.model.birthPlace = value }
        //else { Thing.logError(this.type+': birthPlace must be a string, or object', 'type') }
    }

    get brand(){ return this.model.brand; }
    set brand(value){
        if(Thing.isNull(value)){ delete this.model.brand; }
        else if(Thing.isString(value)){ this.model.brand = value }
        else if(Thing.isObject(value)){ this.model.brand = value }
        //else { Thing.logError(this.type+': brand must be a string or object', 'type') }
    }

    get children(){ return this.model.children; }
    set children(value){
        if(Thing.isNull(value) || Thing.isUndefined(value)){ delete this.model.children; }
        else if(Thing.isString(value)){ this.model.children = value }
        else if(Thing.isObject(value)){ this.model.children = value }
        else if(Thing.isArray(value)){ this.model.children = value }
        //else { Thing.logError(this.type+': children must be a string, object, or array', 'type') }
    }

    get colleague(){ return this.model.colleague; }
    set colleague(value){
        if(Thing.isNull(value)){ delete this.model.colleague; }
        else if(Thing.isString(value)){ this.model.colleague = value }
        else if(Thing.isObject(value)){ this.model.colleague = value }
        else if(Thing.isArray(value)){ this.model.colleague = value }
        //else { Thing.logError(this.type+': colleague must be a string, object, or array', 'type') }
    }

    get contactPoint(){ return this.model.contactPoint; }
    set contactPoint(value){
        if(Thing.isNull(value)){ delete this.model.contactPoint; }
        else if(Thing.isString(value)){ this.model.contactPoint = value }
        else if(Thing.isObject(value)){ this.model.contactPoint = value }
        //else { Thing.logError(this.type+': contactPoint must be a string or object', 'type') }
    }

    get deathDate(){ return this.model.deathDate; }
    set deathDate(value){
        if(Thing.isNull(value)){ delete this.model.deathDate; }
        else if(Thing.isObject(value)){ this.model.deathDate = value }
        else if(Thing.isNumber(value)){ this.model.deathDate = value }
        //else { Thing.logError(this.type+': deathDate must be a number of object', 'type') }
    }

    get deathPlace(){ return this.model.deathPlace; }
    set deathPlace(value){
        if(Thing.isNull(value)){ delete this.model.deathPlace; }
        else if(Thing.isString(value)){ this.model.deathPlace = value }
        else if(Thing.isObject(value)){ this.model.deathPlace = value }
        //else { Thing.logError(this.type+': deathPlace must be a string or object', 'type') }
    }

    get duns(){ return this.model.duns; }
    set duns(value){
        if(Thing.isNull(value)){ delete this.model.duns; }
        else if(Thing.isString(value)){ this.model.duns = value }
        //else { Thing.logError(this.type+': duns must be a string', 'type') }
    }

    get email(){ return this.model.email; }
    set email(value){
        if(Thing.isNull(value)){ delete this.model.email; }
        else if(Thing.isString(value)){
            let email = Person.utils.toLower(value);
            email = Person.utils.trim(email);
            this.model.email = email;
        }
        //else { Thing.logError(this.type+': email must be a string, object, or array', 'type') }
    }

    get familyName(){ return this.model.familyName; }
    set familyName(value){
        if(Thing.isNull(value)){ delete this.model.familyName; }
        else if(Thing.isString(value)){
            this.model.familyName = Person.utils.capitalize(value);
        }
        //else { Thing.logError(this.type+': familyName must be a string', 'type') }
    }

    get faxNumber(){ return this.model.faxNumber; }
    set faxNumber(value){
        if(Thing.isNull(value)){ delete this.model.faxNumber; }
        else if(Thing.isNumber(value)){ this.model.faxNumber = value }
        //else { Thing.logError(this.type+': faxNumber must be a number', 'type') }
    }

    get follows(){ return this.model.follows; }
    set follows(value){
        if(Thing.isNull(value)){ delete this.model.follows; }
        else if(Thing.isString(value)){ this.model.follows = value }
        else if(Thing.isObject(value)){ this.model.follows = value }
        else if(Thing.isArray(value)){ this.model.follows = value }
        //else { Thing.logError(this.type+': follows must be a string, object, or array', 'type') }
    }

    get founder(){ return this.model.founder; }
    set founder(value){
        if(Thing.isNull(value)){ delete this.model.founder; }
        else if(Thing.isString(value)){ this.model.founder = value }
        else if(Thing.isObject(value)){ this.model.founder = value }
        else if(Thing.isArray(value)){ this.model.founder = value }
        //else { Thing.logError(this.type+': founder must be a string, object, or array', 'type') }
    }


    get gender(){ return this.model.gender; }
    set gender(value){
        if(Thing.isNull(value)){ delete this.model.gender; }
        else if(Thing.isString(value)){ this.model.gender = value }
        else if(Thing.isObject(value)){ this.model.gender = value }
        //else { Thing.logError(this.type+': gender must be a string or object', 'type') }
    }

    get givenName(){ return this.model.givenName; }
    set givenName(value){
        if(Thing.isNull(value)){ delete this.model.givenName; }
        else if(Thing.isString(value)){
            this.model.givenName = Person.utils.capitalize(value);
        }
        //else { Thing.logError(this.type+': givenName must be a string', 'type') }
    }

    get globalLocationNumber(){ return this.model.globalLocationNumber; }
    set globalLocationNumber(value){
        if(Thing.isNull(value)){ delete this.model.globalLocationNumber; }
        else if(Thing.isString(value)){ this.model.globalLocationNumber = value }
        else if(Thing.isNumber(value)){ this.model.globalLocationNumber = value }
        //else { Thing.logError(this.type+': globalLocationNumber must be a string or number', 'type') }
    }

    get hasOfferCatalog(){ return this.model.hasOfferCatalog; }
    set hasOfferCatalog(value){
        if(Thing.isNull(value)){ delete this.model.hasOfferCatalog; }
        else if(Thing.isString(value)){ this.model.hasOfferCatalog = value }
        else if(Thing.isObject(value)){ this.model.hasOfferCatalog = value }
        else if(Thing.isArray(value)){ this.model.hasOfferCatalog = value }
        //else { Thing.logError(this.type+': hasOfferCatalog must be a string, object, or array', 'type') }
    }

    get hasPOS(){ return this.model.hasPOS; }
    set hasPOS(value){
        if(Thing.isNull(value)){ delete this.model.hasPOS; }
        else if(Thing.isString(value)){ this.model.hasPOS = value }
        else if(Thing.isObject(value)){ this.model.hasPOS = value }
        else if(Thing.isArray(value)){ this.model.hasPOS = value }
        //else { Thing.logError(this.type+': hasPOS must be a string, object, or array', 'type') }
    }

    get height(){ return this.model.height; }
    set height(value){
        if(Thing.isNull(value)){ delete this.model.height; }
        else if(Thing.isString(value)){ this.model.height = value }
        else if(Thing.isObject(value)){ this.model.height = value }
        else if(Thing.isNumber(value)){ this.model.height = value }
        //else { Thing.logError(this.type+': height must be a string, object, or number', 'type') }
    }

    get homeLocation(){ return this.model.homeLocation; }
    set homeLocation(value){
        if(Thing.isNull(value)){ delete this.model.homeLocation; }
        else if(Thing.isString(value)){ this.model.homeLocation = value }
        else if(Thing.isObject(value)){ this.model.homeLocation = value }
        //else { Thing.logError(this.type+': homeLocation must be a string or object', 'type') }
    }

    get honorificPrefix(){ return this.model.honorificPrefix; }
    set honorificPrefix(value){
        if(Thing.isNull(value)){ delete this.model.honorificPrefix; }
        else if(Thing.isString(value)){ this.model.honorificPrefix = value }
        //else { Thing.logError(this.type+': honorificPrefix must be a string', 'type') }
    }

    get honorificSuffix(){ return this.model.honorificSuffix; }
    set honorificSuffix(value){
        if(Thing.isNull(value)){ delete this.model.honorificSuffix; }
        else if(Thing.isString(value)){ this.model.honorificSuffix = value }
        //else { Thing.logError(this.type+': honorificSuffix must be a string', 'type') }
    }

    get isicV4(){ return this.model.isicV4; }
    set isicV4(value){
        if(Thing.isNull(value)){ delete this.model.isicV4; }
        else if(Thing.isString(value)){ this.model.isicV4 = value }
        //else { Thing.logError(this.type+': isicV4 must be a string', 'type') }
    }

    get jobTitle(){ return this.model.jobTitle; }
    set jobTitle(value){
        if(Thing.isNull(value)){ delete this.model.jobTitle; }
        else if(Thing.isString(value)){ this.model.jobTitle = value }
        //else { Thing.logError(this.type+': jobTitle must be a string', 'type') }
    }

    get knows(){ return this.model.knows; }
    set knows(value){
        if(Thing.isNull(value)){ delete this.model.knows; }
        else if(Thing.isString(value)){ this.model.knows = value }
        else if(Thing.isObject(value)){ this.model.knows = value }
        else if(Thing.isArray(value)){ this.model.knows = value }
        //else { Thing.logError(this.type+': knows must be a string, object, or array', 'type') }
    }

    get makesOffer(){ return this.model.makesOffer; }
    set makesOffer(value){
        if(Thing.isNull(value)){ delete this.model.makesOffer; }
        else if(Thing.isString(value)){ this.model.makesOffer = value }
        else if(Thing.isObject(value)){ this.model.makesOffer = value }
        else if(Thing.isArray(value)){ this.model.makesOffer = value }
        //else { Thing.logError(this.type+': makesOffer must be a string, object, or array', 'type') }
    }

    get memberOf(){ return this.model.memberOf; }
    set memberOf(value){
        if(Thing.isNull(value)){ delete this.model.memberOf; }
        else if(Thing.isString(value)){ this.model.memberOf = value }
        else if(Thing.isObject(value)){ this.model.memberOf = value }
        else if(Thing.isArray(value)){ this.model.memberOf = value }
        //else { Thing.logError(this.type+': memberOf must be a string, object, or array', 'type') }
    }

    get naics(){ return this.model.naics; }
    set naics(value){
        if(Thing.isNull(value)){ delete this.model.naics; }
        else if(Thing.isString(value)){ this.model.naics = value }
        //else { Thing.logError(this.type+': naics must be a string', 'type') }
    }

    get nationality(){ return this.model.nationality; }
    set nationality(value){
        if(Thing.isNull(value)){ delete this.model.nationality; }
        else if(Thing.isString(value)){ this.model.nationality = value }
        else if(Thing.isObject(value)){ this.model.nationality = value }
        else if(Thing.isArray(value)){ this.model.nationality = value }
        //else { Thing.logError(this.type+': nationality must be a string, object, or array', 'type') }
    }

    get netWorth(){ return this.model.netWorth; }
    set netWorth(value){
        if(Thing.isNull(value)){ delete this.model.netWorth; }
        else if(Thing.isString(value)){ this.model.netWorth = value }
        else if(Thing.isObject(value)){ this.model.netWorth = value }
        else if(Thing.isNumber(value)){ this.model.netWorth = value }
        //else { Thing.logError(this.type+': netWorth must be a string, object, or number', 'type') }
    }

    get owns(){ return this.model.owns; }
    set owns(value){
        if(Thing.isNull(value)){ delete this.model.owns; }
        else if(Thing.isString(value)){ this.model.owns = value }
        else if(Thing.isObject(value)){ this.model.owns = value }
        else if(Thing.isArray(value)){ this.model.owns = value }
        //else { Thing.logError(this.type+': owns must be a string, object, or array', 'type') }
    }

    get parent(){ return this.model.parent; }
    set parent(value){
        if(Thing.isNull(value)){ delete this.model.parent; }
        else if(Thing.isString(value)){ this.model.parent = value }
        else if(Thing.isObject(value)){ this.model.parent = value }
        else if(Thing.isArray(value)){ this.model.parent = value }
        //else { Thing.logError(this.type+': parent must be a string, object, or array', 'type') }
    }

    get performerIn(){ return this.model.performerIn; }
    set performerIn(value){
        if(Thing.isNull(value)){ delete this.model.performerIn; }
        else if(Thing.isString(value)){ this.model.performerIn = value }
        else if(Thing.isObject(value)){ this.model.performerIn = value }
        else if(Thing.isArray(value)){ this.model.performerIn = value }
        //else { Thing.logError(this.type+': performerIn must be a string, object, or array', 'type') }
    }

    get relatedTo(){ return this.model.relatedTo; }
    set relatedTo(value){
        if(Thing.isNull(value)){ delete this.model.relatedTo; }
        else if(Thing.isString(value)){ this.model.relatedTo = value }
        else if(Thing.isObject(value)){ this.model.relatedTo = value }
        else if(Thing.isArray(value)){ this.model.relatedTo = value }
        //else { Thing.logError(this.type+': relatedTo must be a string, object, or array') }
    }

    get seeks(){ return this.model.seek; }
    set seeks(value){
        if(Thing.isNull(value)){ delete this.model.seeks; }
        else if(Thing.isString(value)){ this.model.seeks = value }
        else if(Thing.isObject(value)){ this.model.seeks = value }
        else if(Thing.isArray(value)){ this.model.seeks = value }
        //else { Thing.logError(this.type+': seeks must be a string, object, or array', 'type') }
    }

    get sibling(){ return this.model.sibling; }
    set sibling(value){
        if(Thing.isNull(value)){ delete this.model.sibling; }
        else if(Thing.isString(value)){ this.model.sibling = value }
        else if(Thing.isObject(value)){ this.model.sibling = value }
        else if(Thing.isArray(value)){ this.model.sibling = value }
        //else { Thing.logError(this.type+': sibling must be a string, object, or array', 'type') }
    }

    get sponsor(){ return this.model.sponsor; }
    set sponsor(value){
        if(Thing.isNull(value)){ delete this.model.sponsor; }
        else if(Thing.isString(value)){ this.model.sponsor = value }
        else if(Thing.isObject(value)){ this.model.sponsor = value }
        else if(Thing.isArray(value)){ this.model.sponsor = value }
        //else { Thing.logError(this.type+': sponsor must be a string, object, or array', 'type') }
    }

    get spouse(){ return this.model.spouse; }
    set spouse(value){
        if(Thing.isNull(value)){ delete this.model.spouse; }
        else if(Thing.isString(value)){ this.model.spouse = value }
        else if(Thing.isObject(value)){ this.model.spouse = value }
        else if(Thing.isArray(value)){ this.model.spouse = value }
        //else { Thing.logError(this.type+': spouse must be a string, object, or array', 'type') }
    }

    get taxID(){ return this.model.taxID; }
    set taxID(value){
        if(Thing.isNull(value)){ delete this.model.taxID; }
        else if(Thing.isString(value)){ this.model.taxID = value }
        else if(Thing.isObject(value)){ this.model.taxID = value }
        else if(Thing.isArray(value)){ this.model.taxID = value }
        //else { Thing.logError(this.type+': taxID must be a string, object, or array', 'type') }
    }

    get telephone(){ return this.model.telephone; }
    set telephone(value){
        if(Thing.isNull(value)){ delete this.model.telephone; }
        else if(Thing.isString(value)){ this.model.telephone = value }
        else if(Thing.isNumber(value)){ this.model.telephone = value }
        else if(Thing.isObject(value)){ this.model.telephone = value }
        else if(Thing.isArray(value)){ this.model.telephone = value }
        //else { Thing.logError(this.type+': telephone must be a string, object, number or array', 'type') }
    }

    get vatID(){ return this.model.vatID; }
    set vatID(value){
        if(Thing.isNull(value)){ delete this.model.vatID; }
        else if(Thing.isString(value)){ this.model.vatID = value }
        else if(Thing.isObject(value)){ this.model.vatID = value }
        else if(Thing.isArray(value)){ this.model.vatID = value }
        //else { Thing.logError(this.type+': vatID must be a string, object, or array', 'type') }
    }

    get weight(){ return this.model.weight; }
    set weight(value){
        if(Thing.isNull(value)){ delete this.model.weight; }
        else if(Thing.isString(value)){ this.model.weight = value }
        else if(Thing.isObject(value)){ this.model.weight = value }
        else if(Thing.isNumber(value)){ this.model.weight = value }
        //else { Thing.logError(this.type+': weight must be a string, object, or number', 'type') }
    }

    get workLocation(){ return this.model.workLocation; }
    set workLocation(value){
        if(Thing.isNull(value)){ delete this.model.workLocation; }
        else if(Thing.isString(value)){ this.model.workLocation = value }
        else if(Thing.isObject(value)){ this.model.workLocation = value }
        else if(Thing.isArray(value)){ this.model.workLocation = value }
        //else { Thing.logError(this.type+': workLocation must be a string, object, or array', 'type') }
    }

    get worksFor(){ return this.model.worksFor; }
    set worksFor(value){
        if(Thing.isNull(value)){ delete this.model.worksFor; }
        else if(Thing.isString(value)){ this.model.worksFor = value }
        else if(Thing.isObject(value)){ this.model.worksFor = value }
        else if(Thing.isArray(value)){ this.model.worksFor = value }
        //else { Thing.logError(this.type+': worksFor must be a string, object, or array', 'type') }
    }


    //////////////////////
    // COMPUTED PROPERTIES
    //////////////////////

    get fullName(){
        let name = `${this.givenName}${this.additionalName? " "+this.additionalName+" " : " "}${this.familyName}`;
        name = name.replace(/.?\x08/, "");
        return name;
    }

}

module.exports = Person;
