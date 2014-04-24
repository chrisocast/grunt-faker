'use strict';
var grunt = require('grunt');

exports.random = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).random;
    callback();
  },

  number : function(test){
    var random = this.output[0]['random.number(20)'];
    test.expect(2);
    test.ok(!isNaN(random), 'number created');
    test.strictEqual(typeof(random), 'number', 'number is a number');
    test.done();
  },

  array_element : function(test){
    var random = this.output[1]['random.array_element([1,2,3,4,5])'];
    test.expect(2);
    test.ok(!isNaN(random), 'array_element created');
    test.strictEqual(typeof(random), 'number', 'array_element is a number');
    test.done();
  },

  city_prefix : function(test){
    var random = this.output[2]['random.city_prefix'];
    test.expect(2);
    test.ok(random.length > 0, 'city_prefix created');
    test.strictEqual(typeof(random), 'string', 'city_prefix is a string');
    test.done();
  },

  city_suffix : function(test){
    var random = this.output[3]['random.city_suffix'];
    test.expect(2);
    test.ok(random.length > 0, 'city_suffix created');
    test.strictEqual(typeof(random), 'string', 'city_suffix is a string');
    test.done();
  },

  street_suffix : function(test){
    var random = this.output[4]['random.street_suffix'];
    test.expect(2);
    test.ok(random.length > 0, 'street_suffix created');
    test.strictEqual(typeof(random), 'string', 'street_suffix is a string');
    test.done();
  },

  br_state : function(test){
    var random = this.output[5]['random.br_state'];
    test.expect(2);
    test.ok(random.length > 0, 'br_state created');
    test.strictEqual(typeof(random), 'string', 'br_state is a string');
    test.done();
  },

  br_state_abbr : function(test){
    var random = this.output[6]['random.br_state_abbr'];
    test.expect(2);
    test.ok(random.length > 0, 'br_state_abbr created');
    test.strictEqual(typeof(random), 'string', 'br_state_abbr is a string');
    test.done();
  },

  us_state : function(test){
    var random = this.output[7]['random.us_state'];
    test.expect(2);
    test.ok(random.length > 0, 'us_state created');
    test.strictEqual(typeof(random), 'string', 'us_state is a string');
    test.done();
  },

  us_state_abbr : function(test){
    var random = this.output[8]['random.us_state_abbr'];
    test.expect(2);
    test.ok(random.length > 0, 'us_state_abbr created');
    test.strictEqual(typeof(random), 'string', 'us_state_abbr is a string');
    test.done();
  },

  uk_county : function(test){
    var random = this.output[9]['random.uk_county'];
    test.expect(2);
    test.ok(random.length > 0, 'uk_county created');
    test.strictEqual(typeof(random), 'string', 'uk_county is a string');
    test.done();
  },

  uk_country : function(test){
    var random = this.output[10]['random.uk_country'];
    test.expect(2);
    test.ok(random.length > 0, 'uk_country created');
    test.strictEqual(typeof(random), 'string', 'uk_country is a string');
    test.done();
  },

  first_name : function(test){
    var random = this.output[11]['random.first_name'];
    test.expect(2);
    test.ok(random.length > 0, 'first_name created');
    test.strictEqual(typeof(random), 'string', 'first_name is a string');
    test.done();
  },

  last_name : function(test){
    var random = this.output[12]['random.last_name'];
    test.expect(2);
    test.ok(random.length > 0, 'last_name created');
    test.strictEqual(typeof(random), 'string', 'last_name is a string');
    test.done();
  },

  name_prefix : function(test){
    var random = this.output[13]['random.name_prefix'];
    test.expect(2);
    test.ok(random.length > 0, 'name_prefix created');
    test.strictEqual(typeof(random), 'string', 'name_prefix is a string');
    test.done();
  },

  name_suffix : function(test){
    var random = this.output[14]['random.name_suffix'];
    test.expect(2);
    test.ok(random.length > 0, 'name_suffix created');
    test.strictEqual(typeof(random), 'string', 'name_suffix is a string');
    test.done();
  },

  catch_phrase_adjective : function(test){
    var random = this.output[15]['random.catch_phrase_adjective'];
    test.expect(2);
    test.ok(random.length > 0, 'catch_phrase_adjective created');
    test.strictEqual(typeof(random), 'string', 'catch_phrase_adjective is a string');
    test.done();
  },

  catch_phrase_descriptor : function(test){
    var random = this.output[16]['random.catch_phrase_descriptor'];
    test.expect(2);
    test.ok(random.length > 0, 'catch_phrase_descriptor created');
    test.strictEqual(typeof(random), 'string', 'catch_phrase_descriptor is a string');
    test.done();
  },

  catch_phrase_noun : function(test){
    var random = this.output[17]['random.catch_phrase_noun'];
    test.expect(2);
    test.ok(random.length > 0, 'catch_phrase_noun created');
    test.strictEqual(typeof(random), 'string', 'catch_phrase_noun is a string');
    test.done();
  },

  bs_adjective : function(test){
    var random = this.output[18]['random.bs_adjective'];
    test.expect(2);
    test.ok(random.length > 0, 'bs_adjective created');
    test.strictEqual(typeof(random), 'string', 'bs_adjective is a string');
    test.done();
  },

  bs_buzz : function(test){
    var random = this.output[19]['random.bs_buzz'];
    test.expect(2);
    test.ok(random.length > 0, 'bs_buzz created');
    test.strictEqual(typeof(random), 'string', 'bs_buzz is a string');
    test.done();
  },

  bs_noun : function(test){
    var random = this.output[20]['random.bs_noun'];
    test.expect(2);
    test.ok(random.length > 0, 'bs_noun created');
    test.strictEqual(typeof(random), 'string', 'bs_noun is a string');
    test.done();
  },

  phone_formats : function(test){
    var random = this.output[21]['random.phone_formats'];
    test.expect(2);
    test.ok(random.length > 0, 'phone_formats created');
    test.strictEqual(typeof(random), 'string', 'phone_formats is a string');
    test.done();
  },

  domain_suffix : function(test){
    var random = this.output[22]['random.domain_suffix'];
    test.expect(2);
    test.ok(random.length > 0, 'domain_suffix created');
    test.strictEqual(typeof(random), 'string', 'domain_suffix is a string');
    test.done();
  }
};