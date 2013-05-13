# grunt-faker

Grunt task for specifying the shape of a JSON object with a basic tag syntax, then generating that object with the [Faker](https://github.com/Marak/Faker.js) library. Each time the task is run, the data will look slightly different, encouraging testing with real-world data scenarios.

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

### JSON format

To choose how the output JSON will look, a double curly-bracket syntax is used to identify [Faker API](https://github.com/marak/Faker.js/#api) methods.

#### Example JSON format file

The JSON format below could be used to generate a fake customer data object. The strings ("id", "firstName", etc) will always remain static, while the object values will be randomly generated each time the task is run. 

```js
{
  "customers" : [
    {  
      "id" : "{{random.number(999999)}}",
      "firstName" : "{{Name.firstName}}",
      "lastName" : "{{Name.lastName}}",
      "streetAddress" : "{{Address.streetAddress}}",
      "city" : "{{Address.city}}",
      "state" : "{{Address.usState}}",
      "zip" : "{{Address.zipCode}}"
    }
  ]
}
```
#### Outputs as:

```js
{
  "customers": [
    {
      "id": 269754,
      "firstName": "Hester",
      "lastName": "Kulas",
      "streetAddress": "5750 Francis Manors",
      "city": "Port Caylahaven",
      "state": "New Mexico",
      "zip": "20784-7095"
    }
  ]
}
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
 
