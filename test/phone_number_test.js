'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).phonenumber;
    callback();
  },

  number : function(test){  
    var output = this.output[0]['PhoneNumber.phoneNumber'];
    test.expect(2);
    test.ok(output.length > 0, 'Phone number created');
    test.strictEqual(typeof(output), 'string', 'Phone number is a string');
    test.done();
  },

  format : function(test){  
    var output = this.output[1]['PhoneNumber.phoneNumberFormat(0)'];
    test.expect(2);
    test.ok(output.length > 0, 'Phone number format created');
    test.strictEqual(typeof(output), 'string', 'Phone number format is a string');
    test.done();
  }
};