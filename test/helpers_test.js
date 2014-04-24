'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).helpers;
    callback();
  },

  randomNumber : function(test){  
    var helper = this.output[0]['Helpers.randomNumber(10)'];
    test.expect(2);
    test.ok(!isNaN(helper), 'randomNumber created');
    test.strictEqual(typeof(helper), 'number', 'randomNumber is a number');
    test.done();
  },

  randomizeNum : function(test){  
    var helper = this.output[1]['Helpers.randomize([1,2,3,4,5])'];
    test.expect(2);
    test.ok(!isNaN(helper), 'randomize created');
    test.strictEqual(typeof(helper), 'number', 'randomize is a number');
    test.done();
  },

  randomizeString : function(test){  
    var helper = this.output[2]['Helpers.randomize([\"name1\", \"name2\", \"name3\"])'];
    test.expect(2);
    test.ok(helper.length > 0, 'randomizeString created');
    test.strictEqual(typeof(helper), 'string', 'randomizeString is a string');
    test.done();
  },

  slugify : function(test){  
    var helper = this.output[3]['Helpers.slugify(\'test slug & goes here!\')'];
    test.expect(2);
    test.ok(helper.length > 0, 'slugify created');
    test.strictEqual(typeof(helper), 'string', 'slugify is a string');
    test.done();
  },

  replaceSymbolWithNumber1 : function(test){  
    var helper = this.output[4]['Helpers.replaceSymbolWithNumber(\'--#--\', \'-\')'];
    test.expect(2);
    test.ok(helper.length > 0, 'replaceSymbolWithNumber created');
    test.strictEqual(typeof(helper), 'string', 'replaceSymbolWithNumber is a string');
    test.done();
  },

  replaceSymbolWithNumber2 : function(test){  
    var helper = this.output[5]['Helpers.replaceSymbolWithNumber(\'--#--\')'];
    test.expect(2);
    test.ok(helper.length > 0, 'replaceSymbolWithNumber created');
    test.strictEqual(typeof(helper), 'string', 'replaceSymbolWithNumber is a string');
    test.done();
  },

  shuffle : function(test){  
    var helper = this.output[6]['Helpers.shuffle([1,2,3,4,5])'];
    test.expect(2);
    test.strictEqual(helper.length, 5, 'shuffle created');
    test.strictEqual(typeof(helper), 'object', 'shuffle is an array');
    test.done();
  },

  createCard : function(test){  
    var helper = this.output[7]['Helpers.createCard'];
    test.expect(9);
    test.ok(helper['name'].length > 0, 'createCard name created');
    test.ok(helper['username'].length > 0, 'createCard username created');
    test.ok(helper['email'].length > 0, 'createCard email created');
    test.strictEqual(typeof(helper['address']), 'object', 'createCard address is an object');
    test.ok(helper['phone'].length > 0, 'createCard phone created');
    test.ok(helper['website'].length > 0, 'createCard website created');
    test.strictEqual(typeof(helper['company']), 'object', 'createCard company is an object');
    test.strictEqual(typeof(helper['posts']), 'object', 'createCard posts is an object');
    test.strictEqual(typeof(helper), 'object', 'createCard is an object');
    test.done();
  },

  userCard : function(test){  
    var helper = this.output[8]['Helpers.userCard'];
    test.expect(8);
    test.ok(helper['name'].length > 0, 'userCard name created');
    test.ok(helper['username'].length > 0, 'userCard username created');
    test.ok(helper['email'].length > 0, 'userCard email created');
    test.strictEqual(typeof(helper['address']), 'object', 'userCard address is an object');
    test.ok(helper['phone'].length > 0, 'userCard phone created');
    test.ok(helper['website'].length > 0, 'userCard website created');
    test.strictEqual(typeof(helper['company']), 'object', 'userCard company is an object');
    test.strictEqual(typeof(helper), 'object', 'userCard is an object');
    test.done();
  }
};