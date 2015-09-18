# spinny #

[![Build Status](https://travis-ci.org/niklabh/spinny.svg)](http://travis-ci.org/niklabh/spinny)

Simple spinner for command line long processing animation


```bash
$ npm install spinner
```

```js
var Spinny = require('spinny')
var spinny = new Spinny();

spinny.start();

// Long ass Processing

spinny.stop();
```

options

* duration: duration of next spin 
* charSet: Characters while spinning

