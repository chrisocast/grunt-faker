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
  var faker = require('faker');

  // Remove brackets, grab any args
  function getJsonFromTag(tag){
    var func = tag.replace('{{', '').replace('}}', '');
    var args = getArgsFromFunction(func);
    var funcWithoutArgs = func.replace(/\(\.+?\)/g, '');

    // grunt.log.writeln('args: ' + args);
    // grunt.log.writeln('func: ' + func);
    // grunt.log.writeln('funcWithoutArgs: ' + funcWithoutArgs);

    return executeFunctionByName(funcWithoutArgs, faker, args);
  }

  // Return array of args from function string
  function getArgsFromFunction(funcStr){
    var pattern = /\((.+?)\)/g,
    arg,
    args = [];
    
    while (arg = pattern.exec(funcStr)) {
      args.push(arg[1]);
    }

    return args;
  }

  // Execute function as string
  function executeFunctionByName(functionName, context, args) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    //return faker["Address"]["city"].apply(this);
    return context[func].apply(this, args);
  }

  function processJsonFormat(jsonFormatStr){
    var pattern = /\{\{(.+?)\}\}/g,
    match;
    var jsonStr = JSON.stringify(jsonFormatStr);
    
    while (match = pattern.exec(jsonStr)) {
      jsonStr = jsonStr.replace(match[0], getJsonFromTag(match[1]));
    }
    return jsonStr;
  }

  grunt.registerMultiTask('faker', 'Generate fake JSON with Faker.', function() {
    
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

    // Get json and parse with faker
    var jsonFormatStr = grunt.file.readJSON(jsonFormatPath);
    var outputJson = processJsonFormat(jsonFormatStr);

    // Write file with faker json data
    grunt.file.write(outputFilePath, outputJson);

    // Print a success message
    grunt.log.writeln('File "' + outputFilePath + '" created.');
  });

};
