'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).internet;
    callback();
  },

  email : function(test){  
    var output = this.output[0]['Internet.email'];
    test.expect(2);
    test.ok(output.length > 0, 'email created');
    test.strictEqual(typeof(output), 'string', 'email is a string');
    test.done();
  },

  userName : function(test){  
    var output = this.output[1]['Internet.userName'];
    test.expect(2);
    test.ok(output.length > 0, 'userName created');
    test.strictEqual(typeof(output), 'string', 'userName is a string');
    test.done();
  },

  domainName : function(test){  
    var output = this.output[2]['Internet.domainName'];
    test.expect(2);
    test.ok(output.length > 0, 'domainName created');
    test.strictEqual(typeof(output), 'string', 'domainName is a string');
    test.done();
  },

  domainWord : function(test){  
    var output = this.output[3]['Internet.domainWord'];
    test.expect(2);
    test.ok(output.length > 0, 'domainWord created');
    test.strictEqual(typeof(output), 'string', 'domainWord is a string');
    test.done();
  },

  ip : function(test){  
    var output = this.output[4]['Internet.ip'];
    test.expect(2);
    test.ok(output.length > 0, 'ip created');
    test.strictEqual(typeof(output), 'string', 'ip is a string');
    test.done();
  }
};