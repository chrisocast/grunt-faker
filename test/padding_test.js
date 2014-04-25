'use strict';
var grunt = require('grunt');

exports.padding = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).padding;
    callback();
  },

  prefix : function(test){
    var expected = /lorem\d/;
    var output = this.output[0]['padding.prefix'];
    test.expect(3);
    test.ok(output.length > 0, 'prefix created');
    test.strictEqual(typeof(output), 'string', 'prefix is a string');
    test.ok(expected.test(output), 'prefix format is lorem[number]');
    test.done();
  },

  postfix : function(test){
    var expected = /\dlorem/;
    var output = this.output[1]['padding.postfix'];
    test.expect(3);
    test.ok(output.length > 0, 'postfix created');
    test.strictEqual(typeof(output), 'string', 'postfix is a string');
    test.ok(expected.test(output), 'postfix format is [number]lorem');
    test.done();
  }

};