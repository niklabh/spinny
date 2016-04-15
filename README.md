# spinny #

[![Build Status](https://travis-ci.org/niklabh/spinny.svg)](http://travis-ci.org/niklabh/spinny)

Simple spinner for command line long processing animation


```bash
$ npm install node-spinny
```

```js
var Spinny = require('node-spinny')
var spinny = new Spinny(options);

spinny.start();

// Long ass Processing

spinny.stop();
```

options

* duration: duration of next spin 
* charSet: Characters while spinning

