/*
 * grunt-faker
 * https://github.com/chrisocast/grunt-faker
 *
 * Copyright (c) 2013 Chris Cast
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var path = require('path');
  var Faker = require('Faker');

  //Loop through entire json object
  function processJson(obj) {
    for (var i in obj) {
      if (typeof(obj[i]) === "object") {
        processJson(obj[i]); // found an obj or array keep digging
      } else if (obj[i] !== null){
        obj[i] = getFunctionNameAndArgs(obj[i]);// not an obj or array, check contents
      }
    }
    return obj;
  }

  // Get func name, extract args, and exec on their values
  function getFunctionNameAndArgs(value) {
    var pattern = /^(.*)\{\{([^()]+?)(\((.+)\))?\}\}(.*)$/g,
    match, func, args;
    var argArray = [], surroundings = [];
    var retValue;

    while (match = pattern.exec(value)) {
      surroundings[0] = match[1];
      func = match[2];
      args = match[4];
      surroundings[1] = match[5];
    }

    if (args !== undefined ){
      if (args.indexOf("[") !== -1){
        // is an array as string
        args = JSON.parse(args);
        argArray.push(args);
      } else {
        // one or more string/number params
        args = args.replace(/, /gi, ",");
        args = args.replace(/'/gi, "", "gi");
        argArray = args.split(',');
      }
    }
    // return value if no Faker method is detected
    retValue = func ?
      executeFunctionByName(func,argArray) :
      value;

    if(surroundings[0]) {	// prefix
      retValue = surroundings[0] + retValue;
    }

    if(surroundings[1]) {	// postfix
      retValue += surroundings[1];
    }

    return retValue;
  }

  // Execute function as string
  function executeFunctionByName(functionName, args) {
    var namespaces = functionName.split(".");
    var nsLength = namespaces.length;
    var context = Faker;
    var parentContext = Faker;

    if (namespaces[0].toLowerCase() === 'definitions'){
      grunt.log.warn('The definitions module from Faker.js is not avail in this task.');
      return;
    }

    for(var i = 0; i < nsLength; i++) {
      context = context[namespaces[i]];
    }

    for(var j = 0; j < nsLength - 1; j++) {
      parentContext = parentContext[namespaces[j]];
    }

    return context.apply(parentContext, args);
  }

  grunt.registerMultiTask('faker', 'Generate fake JSON with faker.', function() {
    
    var options = this.options();
    var outs = Array.isArray(options.out) ? options.out : [options.out];

    // Check that options were provided 
    if(!options.hasOwnProperty("out")){
      grunt.log.warn('"out" option not specified.');
      return false;
    }
    if(Array.isArray(options.jsonFormat)){
      grunt.log.warn('"jsonFormat" option has to be a single file.');
      return false;
    }
    if(!options.hasOwnProperty("jsonFormat")){
      grunt.log.warn('"jsonFormat" option not specified.');
      return false;
    }

    // Check for json format file
    var jsonFormatPath = options.jsonFormat;
    if (!grunt.file.exists(jsonFormatPath)) {
      grunt.log.warn('Format file "' + jsonFormatPath + '" not found.');
      return false;
    }

    outs.forEach(function(outputFilePath) {
      // Create dir if needed
      var destDir = path.dirname(outputFilePath);
      if (!grunt.file.exists(destDir)) {
        grunt.file.mkdir(destDir);
      }

      // Get json and parse with faker
      var json = grunt.file.readJSON(jsonFormatPath);
      var outputJson = processJson(json);

      // Write file with faker json data
      grunt.file.write(outputFilePath, JSON.stringify(outputJson));

      // Print a success message
      grunt.verbose.writeln('File "' + outputFilePath + '" created.');
    });
  });

};