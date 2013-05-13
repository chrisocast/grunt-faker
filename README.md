# grunt-faker

Grunt task for specifying the shape of a JSON object with a basic tag syntax, then generating that object with the [Faker](https://github.com/Marak/Faker.js) library.

## Getting Started
This plugin requires Grunt `~0.4.0`

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
        out: 'tmp/example.json'
      }
    }
  },
})
```

### Options

#### options.jsonFormat
Type: `String`

A string value that is a path to a JSON file with the desired format.

#### options.out
Type: `String`

A string value that is a path to the resulting JSON output file.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
 
