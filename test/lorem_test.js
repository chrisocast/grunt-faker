'use strict';
var grunt = require('grunt');

exports.names = {
 setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).lorem;
    callback();
  },

  words : function(test){  
    var lorem = this.output[0]['Lorem.words(4)'];
    test.expect(2);
    test.ok(lorem.length > 0, 'words created');
    test.strictEqual(typeof(lorem), 'object', 'words is an array');
    test.done();
  },

  sentence : function(test){  
    var lorem = this.output[1]['Lorem.sentence(10)'];
    test.expect(2);
    test.ok(lorem.length > 0, 'sentence created');
    test.strictEqual(typeof(lorem), 'string', 'sentence is a string');
    test.done();
  },

  sentences : function(test){  
    var lorem = this.output[2]['Lorem.sentences(2)'];
    test.expect(2);
    test.ok(lorem.length > 0, 'sentences created');
    test.strictEqual(typeof(lorem), 'string', 'sentences is a string');
    test.done();
  },

  paragraph : function(test){  
    var lorem = this.output[3]['Lorem.paragraph'];
    test.expect(2);
    test.ok(lorem.length > 0, 'paragraph created');
    test.strictEqual(typeof(lorem), 'string', 'paragraph is a string');
    test.done();
  },

  paragraphs : function(test){  
    var lorem = this.output[4]['Lorem.paragraphs'];
    test.expect(2);
    test.ok(lorem.length > 0, 'paragraphs created');
    test.strictEqual(typeof(lorem), 'string', 'paragraphs is a string');
    test.done();
  }

};