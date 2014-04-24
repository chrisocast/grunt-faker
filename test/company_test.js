'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).company;
    callback();
  },

  suffixes : function(test){  
    var company = this.output[0]['Company.suffixes'];
    test.expect(2);
    test.ok(company.length > 0, 'suffixes created');
    test.strictEqual(typeof(company), 'object', 'suffixes is a array');
    test.done();
  },

  companyName : function(test){  
    var company = this.output[1]['Company.companyName'];
    test.expect(2);
    test.ok(company.length > 0, 'companyName created');
    test.strictEqual(typeof(company), 'string', 'companyName is a string');
    test.done();
  },

  companySuffix : function(test){  
    var company = this.output[2]['Company.companySuffix'];
    test.expect(2);
    test.ok(company.length > 0, 'companySuffix created');
    test.strictEqual(typeof(company), 'string', 'companySuffix is a string');
    test.done();
  },

  catchPhrase : function(test){  
    var company = this.output[3]['Company.catchPhrase'];
    test.expect(2);
    test.ok(company.length > 0, 'catchPhrase created');
    test.strictEqual(typeof(company), 'string', 'catchPhrase is a string');
    test.done();
  },

  bs : function(test){  
    var company = this.output[4]['Company.bs'];
    test.expect(2);
    test.ok(company.length > 0, 'bs created');
    test.strictEqual(typeof(company), 'string', 'bs is a string');
    test.done();
  }
};