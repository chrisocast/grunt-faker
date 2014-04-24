'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).name;
    callback();
  },

  first : function(test){  
    var name = this.output[0]['Name.firstName'];
    test.expect(2);
    test.ok(name.length > 0, 'First name created');
    test.strictEqual(typeof(name), 'string', 'First name is a string');
    test.done();
  },

  last : function(test){  
    var name = this.output[1]['Name.lastName'];
    test.expect(2);
    test.ok(name.length > 0, 'Last name created');
    test.strictEqual(typeof(name), 'string', 'Last name is a string');
    test.done();
  },

  full : function(test){  
    var name = this.output[2]['Name.findName'];
    test.expect(3);
    test.ok(name.length > 0, 'Full name created');
    test.strictEqual(typeof(name), 'string', 'Full name is a string');
    test.ok(name.indexOf(' ') > 0, 'Full name contains a space');
    test.done();
  }
};