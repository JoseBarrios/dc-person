const ThingDataController = require('dc-thing');

class PersonDataController extends ThingDataController {

    //Override ThingDataController's type
    static get type(){ return new PersonDataController().type; }
    //Inherets this.model, and this.emptyProperties

    constructor(model){
        super(model);
        this.model = model || {};

        this.additionalName = this.model.additionalName;
        this.address = this.model.address;
        this.affiliation = this.model.affiliation;
        //this.alumniOf = this.model.alumniOf;
        //this.award = this.model.award;
        this.birthDay = this.model.birthDay;
        //this.birthPlace = this.model.birthPlace;
        //this.brand = this.model.brand;
        this.children = this.model.children;
        //this.colleague = this.model.colleague;
        this.contactPoint = this.model.contactPoint;
        //this.deathDate = this.model.deathDate;
        //this.deathPlace = this.model.deathPlace;
        //this.duns = this.model.duns;
        this.email = this.model.email;
        this.familyName = this.model.familyName;
        this.faxNumber = this.model.faxNumber;
        //this.follows = this.model.follows;
        //this.founder = this.model.funder;
        this.gender = this.model.gender;
        this.givenName = this.model.givenName;
        //this.globalLocationNumber = this.model.globalLocationNumber;
        //this.hasOfferCatalog = this.model.hasOfferCatalog;
        //this.hasPOS = this.model.hasPOS;
        //this.height = this.model.height;
        this.homeLocation = this.model.homeLocation;
        this.honorificPrefix = this.model.honorificPrefix;
        //this.honorificSuffix = this.model.honorificSuffix;
        //this.isicV4 = this.model.isicV4;
        this.jobTitle = this.model.jobTitle;
        //this.knows = this.model.knows;
        //this.makesOffer = this.model.makesOffer;
        //this.memberOf = this.model.memberOf;
        //this.naics = this.model.naics;
        //this.nationality = this.model.nationality;
        //this.netWorth = this.model.netWorth;
        //this.owns = this.model.owns;
        this.parent = this.model.parent;
        //this.performerIn = this.model.performerIn;
        //this.relatedTo = this.model.relatedTo;
        //this.seeks = this.model.seeks;
        this.sibling = this.model.sibling;
        //this.sponsor = this.model.sponsor;
        this.spouse = this.model.spouse;
        this.taxID = this.model.taxID;
        this.telephone = this.model.telephone;
        //this.vatID = this.model.vatID;
        //this.weight = this.model.weight;
        //this.workLocation = this.model.workLocation;
        this.worksFor = this.model.worksFor;

    }

    get additionalName(){ return this.model.additionalName }
    set additionalName(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.additionalName; }
        else if(ThingDataController.isString(value)){ this.model.additionalName = ThingDataController.lodash.capitalize(value); }
    }

    get address(){ return this.model.address }
    set address(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.address; }
        else if(ThingDataController.isString(value)){ this.model.address = value }
        else if(ThingDataController.isObject(value)){ this.model.address = value }
        else if(ThingDataController.isPlainObject(value)){ this.model.address = value }
        else { ThingDataController.logError(this.type+': address must be an object or string', 'type') }
    }

    get affiliation(){ return this.model.affiliation }
    set affiliation(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.affiliation; }
        else if(ThingDataController.isArray(value)){ this.model.affiliation = value }
        else { ThingDataController.logError(this.type+': affiliation must be an array of objects', 'type') }
    }

    get alumniOf(){ return this.model.alumniOf; }
    set alumniOf(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.alumniOf; }
        else if(ThingDataController.isString(value)){ this.model.alumniOf = value }
        else if(ThingDataController.isObject(value)){ this.model.alumniOf = value }
        else if(ThingDataController.isArray(value)){ this.model.alumniOf = value }
        else { ThingDataController.logError(this.type+': alumniOf must be a string, object, or array', 'type') }
    }

    get award(){ return this.model.award; }
    set award(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.award; }
        else if(ThingDataController.isString(value)){ this.model.award = value }
        else { ThingDataController.logError(this.type+': award must be a string', 'type') }
    }

    get birthDay(){ return this.model.birthDay; }
    set birthDay(value){
        //if(ThingDataController.isNullOrUndefined(value)){ delete this.model.birthDay; }
        if(ThingDataController.isDate(value)){ this.model.birthDay = new ThingDataController.dateTime(value).value; }
        else { ThingDataController.logError(this.type+': birthDay must be a date', 'type') }
    }

    get birthPlace(){ return this.model.birthPlace; }
    set birthPlace(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.birthPlace; }
        else if(ThingDataController.isString(value)){ this.model.birthPlace = value }
        else if(ThingDataController.isObject(value)){ this.model.birthPlace = value }
        else { ThingDataController.logError(this.type+': birthPlace must be a string, or object', 'type') }
    }

    get brand(){ return this.model.brand; }
    set brand(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.brand; }
        else if(ThingDataController.isString(value)){ this.model.brand = value }
        else if(ThingDataController.isObject(value)){ this.model.brand = value }
        else { ThingDataController.logError(this.type+': brand must be a string or object', 'type') }
    }

    get children(){ return this.model.children; }
    set children(value){
        if(ThingDataController.isNullOrUndefined(value) || ThingDataController.isUndefined(value)){ delete this.model.children; }
        else if(ThingDataController.isString(value)){ this.model.children = value }
        else if(ThingDataController.isObject(value)){ this.model.children = value }
        else if(ThingDataController.isArray(value)){ this.model.children = value }
        else { ThingDataController.logError(this.type+': children must be a string, object, or array', 'type') }
    }

    get colleague(){ return this.model.colleague; }
    set colleague(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.colleague; }
        else if(ThingDataController.isString(value)){ this.model.colleague = value }
        else if(ThingDataController.isObject(value)){ this.model.colleague = value }
        else if(ThingDataController.isArray(value)){ this.model.colleague = value }
        else { ThingDataController.logError(this.type+': colleague must be a string, object, or array', 'type') }
    }

    get contactPoint(){ return this.model.contactPoint; }
    set contactPoint(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.contactPoint; }
        else if(ThingDataController.isString(value)){ this.model.contactPoint = value }
        else if(ThingDataController.isObject(value)){ this.model.contactPoint = value }
        else { ThingDataController.logError(this.type+': contactPoint must be a string or object', 'type') }
    }

    get deathDate(){ return this.model.deathDate; }
    set deathDate(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.deathDate; }
        else if(ThingDataController.isObject(value)){ this.model.deathDate = value }
        else if(ThingDataController.isNumber(value)){ this.model.deathDate = value }
        else { ThingDataController.logError(this.type+': deathDate must be a number of object', 'type') }
    }

    get deathPlace(){ return this.model.deathPlace; }
    set deathPlace(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.deathPlace; }
        else if(ThingDataController.isString(value)){ this.model.deathPlace = value }
        else if(ThingDataController.isObject(value)){ this.model.deathPlace = value }
        else { ThingDataController.logError(this.type+': deathPlace must be a string or object', 'type') }
    }

    get duns(){ return this.model.duns; }
    set duns(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.duns; }
        else if(ThingDataController.isString(value)){ this.model.duns = value }
        else { ThingDataController.logError(this.type+': duns must be a string', 'type') }
    }

    get email(){ return this.model.email; }
    set email(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.email; }
        else if(ThingDataController.isString(value)){
            let email = PersonDataController.lodash.toLower(value);
            email = PersonDataController.lodash.trim(email);
            this.model.email = email;
        }
        else { ThingDataController.logError(this.type+': email must be a string, object, or array', 'type') }
    }

    get familyName(){ return this.model.familyName; }
    set familyName(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.familyName; }
        else if(ThingDataController.isString(value)){
            this.model.familyName = PersonDataController.lodash.capitalize(value);
        }
        else { ThingDataController.logError(this.type+': familyName must be a string', 'type') }
    }

    get faxNumber(){ return this.model.faxNumber; }
    set faxNumber(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.faxNumber; }
        else if(ThingDataController.isNumber(value)){ this.model.faxNumber = value }
        else { ThingDataController.logError(this.type+': faxNumber must be a number', 'type') }
    }

    get follows(){ return this.model.follows; }
    set follows(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.follows; }
        else if(ThingDataController.isString(value)){ this.model.follows = value }
        else if(ThingDataController.isObject(value)){ this.model.follows = value }
        else if(ThingDataController.isArray(value)){ this.model.follows = value }
        else { ThingDataController.logError(this.type+': follows must be a string, object, or array', 'type') }
    }

    get founder(){ return this.model.founder; }
    set founder(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.founder; }
        else if(ThingDataController.isString(value)){ this.model.founder = value }
        else if(ThingDataController.isObject(value)){ this.model.founder = value }
        else if(ThingDataController.isArray(value)){ this.model.founder = value }
        else { ThingDataController.logError(this.type+': founder must be a string, object, or array', 'type') }
    }


    get gender(){ return this.model.gender; }
    set gender(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.gender; }
        else if(ThingDataController.isString(value)){ this.model.gender = value }
        else if(ThingDataController.isObject(value)){ this.model.gender = value }
        else { ThingDataController.logError(this.type+': gender must be a string or object', 'type') }
    }

    get givenName(){ return this.model.givenName; }
    set givenName(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.givenName; }
        else if(ThingDataController.isString(value)){
            this.model.givenName = PersonDataController.lodash.capitalize(value);
        }
        else { ThingDataController.logError(this.type+': givenName must be a string', 'type') }
    }

    get globalLocationNumber(){ return this.model.globalLocationNumber; }
    set globalLocationNumber(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.globalLocationNumber; }
        else if(ThingDataController.isString(value)){ this.model.globalLocationNumber = value }
        else if(ThingDataController.isNumber(value)){ this.model.globalLocationNumber = value }
        else { ThingDataController.logError(this.type+': globalLocationNumber must be a string or number', 'type') }
    }

    get hasOfferCatalog(){ return this.model.hasOfferCatalog; }
    set hasOfferCatalog(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.hasOfferCatalog; }
        else if(ThingDataController.isString(value)){ this.model.hasOfferCatalog = value }
        else if(ThingDataController.isObject(value)){ this.model.hasOfferCatalog = value }
        else if(ThingDataController.isArray(value)){ this.model.hasOfferCatalog = value }
        else { ThingDataController.logError(this.type+': hasOfferCatalog must be a string, object, or array', 'type') }
    }

    get hasPOS(){ return this.model.hasPOS; }
    set hasPOS(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.hasPOS; }
        else if(ThingDataController.isString(value)){ this.model.hasPOS = value }
        else if(ThingDataController.isObject(value)){ this.model.hasPOS = value }
        else if(ThingDataController.isArray(value)){ this.model.hasPOS = value }
        else { ThingDataController.logError(this.type+': hasPOS must be a string, object, or array', 'type') }
    }

    get height(){ return this.model.height; }
    set height(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.height; }
        else if(ThingDataController.isString(value)){ this.model.height = value }
        else if(ThingDataController.isObject(value)){ this.model.height = value }
        else if(ThingDataController.isNumber(value)){ this.model.height = value }
        else { ThingDataController.logError(this.type+': height must be a string, object, or number', 'type') }
    }

    get homeLocation(){ return this.model.homeLocation; }
    set homeLocation(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.homeLocation; }
        else if(ThingDataController.isString(value)){ this.model.homeLocation = value }
        else if(ThingDataController.isObject(value)){ this.model.homeLocation = value }
        else { ThingDataController.logError(this.type+': homeLocation must be a string or object', 'type') }
    }

    get honorificPrefix(){ return this.model.honorificPrefix; }
    set honorificPrefix(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.honorificPrefix; }
        else if(ThingDataController.isString(value)){ this.model.honorificPrefix = value }
        else { ThingDataController.logError(this.type+': honorificPrefix must be a string', 'type') }
    }

    get honorificSuffix(){ return this.model.honorificSuffix; }
    set honorificSuffix(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.honorificSuffix; }
        else if(ThingDataController.isString(value)){ this.model.honorificSuffix = value }
        else { ThingDataController.logError(this.type+': honorificSuffix must be a string', 'type') }
    }

    get isicV4(){ return this.model.isicV4; }
    set isicV4(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.isicV4; }
        else if(ThingDataController.isString(value)){ this.model.isicV4 = value }
        else { ThingDataController.logError(this.type+': isicV4 must be a string', 'type') }
    }

    get jobTitle(){ return this.model.jobTitle; }
    set jobTitle(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.jobTitle; }
        else if(ThingDataController.isString(value)){ this.model.jobTitle = value }
        else { ThingDataController.logError(this.type+': jobTitle must be a string', 'type') }
    }

    get knows(){ return this.model.knows; }
    set knows(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.knows; }
        else if(ThingDataController.isString(value)){ this.model.knows = value }
        else if(ThingDataController.isObject(value)){ this.model.knows = value }
        else if(ThingDataController.isArray(value)){ this.model.knows = value }
        else { ThingDataController.logError(this.type+': knows must be a string, object, or array', 'type') }
    }

    get makesOffer(){ return this.model.makesOffer; }
    set makesOffer(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.makesOffer; }
        else if(ThingDataController.isString(value)){ this.model.makesOffer = value }
        else if(ThingDataController.isObject(value)){ this.model.makesOffer = value }
        else if(ThingDataController.isArray(value)){ this.model.makesOffer = value }
        else { ThingDataController.logError(this.type+': makesOffer must be a string, object, or array', 'type') }
    }

    get memberOf(){ return this.model.memberOf; }
    set memberOf(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.memberOf; }
        else if(ThingDataController.isString(value)){ this.model.memberOf = value }
        else if(ThingDataController.isObject(value)){ this.model.memberOf = value }
        else if(ThingDataController.isArray(value)){ this.model.memberOf = value }
        else { ThingDataController.logError(this.type+': memberOf must be a string, object, or array', 'type') }
    }

    get naics(){ return this.model.naics; }
    set naics(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.naics; }
        else if(ThingDataController.isString(value)){ this.model.naics = value }
        else { ThingDataController.logError(this.type+': naics must be a string', 'type') }
    }

    get nationality(){ return this.model.nationality; }
    set nationality(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.nationality; }
        else if(ThingDataController.isString(value)){ this.model.nationality = value }
        else if(ThingDataController.isObject(value)){ this.model.nationality = value }
        else if(ThingDataController.isArray(value)){ this.model.nationality = value }
        else { ThingDataController.logError(this.type+': nationality must be a string, object, or array', 'type') }
    }

    get netWorth(){ return this.model.netWorth; }
    set netWorth(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.netWorth; }
        else if(ThingDataController.isString(value)){ this.model.netWorth = value }
        else if(ThingDataController.isObject(value)){ this.model.netWorth = value }
        else if(ThingDataController.isNumber(value)){ this.model.netWorth = value }
        else { ThingDataController.logError(this.type+': netWorth must be a string, object, or number', 'type') }
    }

    get owns(){ return this.model.owns; }
    set owns(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.owns; }
        else if(ThingDataController.isString(value)){ this.model.owns = value }
        else if(ThingDataController.isObject(value)){ this.model.owns = value }
        else if(ThingDataController.isArray(value)){ this.model.owns = value }
        else { ThingDataController.logError(this.type+': owns must be a string, object, or array', 'type') }
    }

    get parent(){ return this.model.parent; }
    set parent(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.parent; }
        else if(ThingDataController.isString(value)){ this.model.parent = value }
        else if(ThingDataController.isObject(value)){ this.model.parent = value }
        else if(ThingDataController.isArray(value)){ this.model.parent = value }
        else { ThingDataController.logError(this.type+': parent must be a string, object, or array', 'type') }
    }

    get performerIn(){ return this.model.performerIn; }
    set performerIn(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.performerIn; }
        else if(ThingDataController.isString(value)){ this.model.performerIn = value }
        else if(ThingDataController.isObject(value)){ this.model.performerIn = value }
        else if(ThingDataController.isArray(value)){ this.model.performerIn = value }
        else { ThingDataController.logError(this.type+': performerIn must be a string, object, or array', 'type') }
    }

    get relatedTo(){ return this.model.relatedTo; }
    set relatedTo(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.relatedTo; }
        else if(ThingDataController.isString(value)){ this.model.relatedTo = value }
        else if(ThingDataController.isObject(value)){ this.model.relatedTo = value }
        else if(ThingDataController.isArray(value)){ this.model.relatedTo = value }
        else { ThingDataController.logError(this.type+': relatedTo must be a string, object, or array') }
    }

    get seeks(){ return this.model.seek; }
    set seeks(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.seeks; }
        else if(ThingDataController.isString(value)){ this.model.seeks = value }
        else if(ThingDataController.isObject(value)){ this.model.seeks = value }
        else if(ThingDataController.isArray(value)){ this.model.seeks = value }
        else { ThingDataController.logError(this.type+': seeks must be a string, object, or array', 'type') }
    }

    get sibling(){ return this.model.sibling; }
    set sibling(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.sibling; }
        else if(ThingDataController.isString(value)){ this.model.sibling = value }
        else if(ThingDataController.isObject(value)){ this.model.sibling = value }
        else if(ThingDataController.isArray(value)){ this.model.sibling = value }
        else { ThingDataController.logError(this.type+': sibling must be a string, object, or array', 'type') }
    }

    get sponsor(){ return this.model.sponsor; }
    set sponsor(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.sponsor; }
        else if(ThingDataController.isString(value)){ this.model.sponsor = value }
        else if(ThingDataController.isObject(value)){ this.model.sponsor = value }
        else if(ThingDataController.isArray(value)){ this.model.sponsor = value }
        else { ThingDataController.logError(this.type+': sponsor must be a string, object, or array', 'type') }
    }

    get spouse(){ return this.model.spouse; }
    set spouse(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.spouse; }
        else if(ThingDataController.isString(value)){ this.model.spouse = value }
        else if(ThingDataController.isObject(value)){ this.model.spouse = value }
        else if(ThingDataController.isArray(value)){ this.model.spouse = value }
        else { ThingDataController.logError(this.type+': spouse must be a string, object, or array', 'type') }
    }

    get taxID(){ return this.model.taxID; }
    set taxID(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.taxID; }
        else if(ThingDataController.isString(value)){ this.model.taxID = value }
        else if(ThingDataController.isObject(value)){ this.model.taxID = value }
        else if(ThingDataController.isArray(value)){ this.model.taxID = value }
        else { ThingDataController.logError(this.type+': taxID must be a string, object, or array', 'type') }
    }

    get telephone(){ return this.model.telephone; }
    set telephone(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.telephone; }
        else if(ThingDataController.isString(value)){ this.model.telephone = value }
        else if(ThingDataController.isNumber(value)){ this.model.telephone = value }
        else if(ThingDataController.isObject(value)){ this.model.telephone = value }
        else if(ThingDataController.isArray(value)){ this.model.telephone = value }
        else { ThingDataController.logError(this.type+': telephone must be a string, object, number or array', 'type') }
    }

    get vatID(){ return this.model.vatID; }
    set vatID(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.vatID; }
        else if(ThingDataController.isString(value)){ this.model.vatID = value }
        else if(ThingDataController.isObject(value)){ this.model.vatID = value }
        else if(ThingDataController.isArray(value)){ this.model.vatID = value }
        else { ThingDataController.logError(this.type+': vatID must be a string, object, or array', 'type') }
    }

    get weight(){ return this.model.weight; }
    set weight(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.weight; }
        else if(ThingDataController.isString(value)){ this.model.weight = value }
        else if(ThingDataController.isObject(value)){ this.model.weight = value }
        else if(ThingDataController.isNumber(value)){ this.model.weight = value }
        else { ThingDataController.logError(this.type+': weight must be a string, object, or number', 'type') }
    }

    get workLocation(){ return this.model.workLocation; }
    set workLocation(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.workLocation; }
        else if(ThingDataController.isString(value)){ this.model.workLocation = value }
        else if(ThingDataController.isObject(value)){ this.model.workLocation = value }
        else if(ThingDataController.isArray(value)){ this.model.workLocation = value }
        else { ThingDataController.logError(this.type+': workLocation must be a string, object, or array', 'type') }
    }

    get worksFor(){ return this.model.worksFor; }
    set worksFor(value){
        if(ThingDataController.isNullOrUndefined(value)){ delete this.model.worksFor; }
        else if(ThingDataController.isString(value)){ this.model.worksFor = value }
        else if(ThingDataController.isObject(value)){ this.model.worksFor = value }
        else if(ThingDataController.isArray(value)){ this.model.worksFor = value }
        else { ThingDataController.logError(this.type+': worksFor must be a string, object, or array', 'type') }
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

module.exports = PersonDataController;
