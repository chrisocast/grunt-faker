'use strict';
var grunt = require('grunt');

exports.address = {
  setUp: function (callback) {
    var testOutputFile = grunt.file.read('tmp/test_all.json');
    this.output = JSON.parse(testOutputFile).address;
    callback();
  },

  zipCode : function(test){  
    var address = this.output[0]['Address.zipCode'];
    test.expect(2);
    test.ok(address.length > 0, 'Zipcode is 5 digits long');
    test.strictEqual(typeof(address), 'string', 'Zipcode is a string');
    test.done();
  },

  zipCodeFormat : function(test){  
    var address = this.output[1]['Address.zipCodeFormat(0)'];
    test.expect(2);
    test.strictEqual(address.length, 5, 'Zipcode format is 5 digits long');
    test.strictEqual(typeof(address), 'string', 'Zipcode format is a string');
    test.done();
  },

  city : function(test){  
    var address = this.output[2]['Address.city'];
    test.expect(2);
    test.ok(address.length > 0, 'City name created');
    test.strictEqual(typeof(address), 'string', 'City is a string');
    test.done();
  },

  streetName : function(test){  
    var address = this.output[3]['Address.streetName'];
    test.expect(2);
    test.ok(address.length > 0, 'Street name created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  streetAddress : function(test){  
    var address = this.output[4]['Address.streetAddress'];
    test.expect(2);
    test.ok(address.length > 0, 'Street address created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  secondaryAddress : function(test){  
    var address = this.output[5]['Address.secondaryAddress'];
    test.expect(2);
    test.ok(address.length > 0, 'Secondary address created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  brState : function(test){  
    var address = this.output[6]['Address.brState'];
    test.expect(2);
    test.ok(address.length > 0, 'Br state created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  ukCounty : function(test){  
    var address = this.output[7]['Address.ukCounty'];
    test.expect(2);
    test.ok(address.length > 0, 'UK County created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  ukCountry : function(test){  
    var address = this.output[8]['Address.ukCountry'];
    test.expect(2);
    test.ok(address.length > 0, 'UK Country created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  usState : function(test){  
    var address = this.output[9]['Address.usState'];
    test.expect(2);
    test.ok(address.length > 0, 'US state created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  latitude : function(test){  
    var address = this.output[10]['Address.latitude'];
    test.expect(2);
    test.ok(address.length > 0, 'Latitude created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  },

  longitude : function(test){  
    var address = this.output[11]['Address.longitude'];
    test.expect(2);
    test.ok(address.length > 0, 'Longitude created');
    test.strictEqual(typeof(address), 'string', 'Format is a string');
    test.done();
  }
};