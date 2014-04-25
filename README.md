# grunt-faker [![Build Status](https://api.travis-ci.org/chrisocast/grunt-faker.png?branch=master)](http://travis-ci.org/chrisocast/grunt-faker)


Grunt task for specifying the shape of a JSON object with a basic tag syntax, then generating that object with the [Faker](https://github.com/Marak/Faker.js) library. Each time the task is run the data will look slightly different - making it easy to test against dynamic, ever-changing data scenarios (like the real world!).

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-faker --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-faker');
```

## The "faker" task

### Overview
In your project's Gruntfile, add a section named `faker` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  faker: {
    my_task: {
      options: {
        jsonFormat: "json/test_all.json",
        out: 'tmp/test_all.json'
      }
    },
    my_other_task: {
      options: {
        jsonFormat: "json/example.json",
        out: ['tmp/example1.json', 'tmp/example2.json']
      }
    }
  }
})
```

### Options

Only two options here, both are required.

#### options.jsonFormat
Type: `String`

A string value that is a path to a JSON file with the desired format.

#### options.out
Type: `String|Array`

A string value or an array of string values, that is a path to the resulting JSON output file(s).

### JSON format

To choose how the output JSON will look, a double curly-bracket syntax is used to identify [Faker API](https://github.com/marak/Faker.js/#api) methods. To prefix or postfix values you just add them before or after the curly-bracket. The JSON format below could be used to generate a fake customer data object. The strings ("id", "firstName", etc) will always remain static, while the object values will be randomly generated each time the task is run. If options.out is an array, the values will be randomly generated for each file.

#### Example JSON format file

```js
{
  "customers" : [
    {  
      "id" : "{{random.number(999999)}}",
      "name" : {
          "first" : "{{Name.firstName}} Hubert",
          "last" : "{{Name.lastName}}"
        },
      "address" : {
        "streetAddress" : "{{Address.streetAddress}}",
        "city" : "{{Address.city}}",
        "state" : "{{Address.usState}}",
        "zip" : "{{Address.zipCode}}"
      }
    }
  ]
}
```
#### Outputs as:

```js
{
  "customers": [
    {
      "id": 110021,
      "name": {
        "first": "Emerald Hubert",
        "last": "Hintz"
      },
      "address": {
        "streetAddress": "0922 Huels Inlet",
        "city": "Barneyberg",
        "state": "New Hampshire",
        "zip": "22819"
      }
    }
  ]
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
- 2014-04-25   v0.2.0   Support for writing JSON data into multiple files and pre/post fixing values, updated dependencies, unit tests
- 2013-05-12   v0.1.0   Initial release
 
