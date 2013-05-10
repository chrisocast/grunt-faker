/*
 * grunt-faker
 * https://github.com/chrisocast/grunt-faker
 *
 * Copyright (c) 2013 Chris Cast
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var path = require('path');
  var Faker = require('Faker');

  function repeat (num){
    grunt.log.writeln("Faker.repeat");
  };

  function traverseJson(obj) {
    for (var i in obj) {

      if (typeof(obj[i]) === "object") {
        // found an obj or array keep digging
        traverseJson(obj[i], processTag);
      } else {
        if (obj[i] != null){
          // not an obj or array, check for tags and process
          grunt.log.writeln("found a val: " + obj[i]);
          obj[i] = processTag(obj[i]);
        }
      }
    }
    return obj;
  }

  function processTag(value) {
    var pattern = /\{\{(.+?)\}\}/g,
    match;

    grunt.log.writeln("Processing value1: "+value);

    //todo: allow multiple {{tags}} in the same val
    while (match = pattern.exec(value)) {
      grunt.log.writeln("Processing value2: "+ match[0] + ", " + match[1]);
      value = value.replace(match[0], getJsonFromTag(match[1]));
    }

    return value;
  }

  // Remove brackets, grab any args
  function getJsonFromTag(tag){
    //var args = getArgsFromFunction(tag);
    var funcWithoutArgs = tag.replace(/\(\.+?\)/g, '');

    grunt.log.writeln("getJsonFromTag: "+funcWithoutArgs);
    grunt.log.writeln("tag: "+tag);

    if (functionName === 'repeat(7)'){
      return executeFunctionByName(funcWithoutArgs/*, args*/); // make this iterate based on repeat
    }

    return executeFunctionByName(funcWithoutArgs/*, args*/);
  }

  // Return array of args from function string
  // function getArgsFromFunction(funcStr){
  //   var pattern = /\((.+?)\)/g,
  //   arg,
  //   args = [];
  //   while (arg = pattern.exec(funcStr)) {
  //     args.push(arg[1]);
  //   }
  //   return args;
  // }

  // Execute function as string
  function executeFunctionByName(functionName, args) {
    //var args = Array.prototype.slice.call(arguments).splice(2);

    var namespaces = functionName.split(".");
    var nsLength = namespaces.length;
    var context = Faker;
    for(var i = 0; i < nsLength; i++) {
      context = context[namespaces[i]];
          grunt.log.writeln("context: "+context);

    }

    var parentContext = Faker;
    for(var i = 0; i < nsLength - 1; i++) {
      parentContext = parentContext[namespaces[i]];
    }

    //grunt.log.writeln("nsLength: "+nsLength);
    //grunt.log.writeln("parentContext: "+parentContext);

    return context.apply(parentContext, [1]);
  }

  grunt.registerMultiTask('Faker', 'Generate fake JSON with Faker.', function() {
    
    var options = this.options();
    var outputFilePath = options.out;

    // Check for format file
    var jsonFormatPath = options.jsonFormat;
    if (!grunt.file.exists(jsonFormatPath)) {
      grunt.log.warn('Format file "' + jsonFormatPath + '" not found.');
      return false;
    }

    // Create dir if needed
    var destDir = path.dirname(outputFilePath);
    if (!grunt.file.exists(destDir)) {
      grunt.file.mkdir(destDir);
    }

    // Get json and parse with Faker
    var json = grunt.file.readJSON(jsonFormatPath);

    var outputJson = traverseJson(json);

    //var outputJson = processJsonFormat(json);

    // Write file with Faker json data
    grunt.file.write(outputFilePath, JSON.stringify(outputJson));

    // Print a success message
    grunt.log.writeln('File "' + outputFilePath + '" created.');
  });

};
