# lazy-logger
[![Version npm](https://img.shields.io/npm/v/lazy-logger.svg?style=flat-square)](https://www.npmjs.com/package/lazy-logger)[![npm Downloads](https://img.shields.io/npm/dm/lazy-logger.svg?style=flat-square)](https://www.npmjs.com/package/lazy-logger)[![Build Status](https://img.shields.io/travis/slysterous/lazy-logger/master.svg?style=flat-square)](https://travis-ci.org/slysterous/lazy-logger)[![Dependencies](https://img.shields.io/david/slysterous/lazy-logger.svg?style=flat-square)](https://david-dm.org/slysterous/lazy-logger)

[![NPM](https://nodei.co/npm/lazy-logger.png?downloads=true&downloadRank=true)](https://nodei.co/npm/lazy-logger/)
[![Known Vulnerabilities](https://snyk.io/test/github/slysterous/lazy-logger/badge.svg)](https://snyk.io/test/github/slysterous/lazy-logger)
a simple wrapper for <a href="https://github.com/winstonjs/winston">winston</a> and <a href="https://github.com/winstonjs/winston-daily-rotate-file">winston-daily-rotate-file</a> that i use as a logger for fast prototyping. Ideal for lazy people.
This module is just a lazy way to switch from the default console to winston while adding simple daily log files. 

If you need a proper module to handle your logging, head over to <a href="https://github.com/winstonjs/winston">winston</a>
## Installation

```bashp
npm install lazy-logger
```
## Usage

The LazyLogger constructor accepts 4 arguments
1. The Winston Logging level as indicated by  <a href="https://github.com/winstonjs/winston">winston</a> check the module's documentation for more.
`NOTE` 1. can be `'silly'`,`'debug'`,`'verbose'`,`'info'`,`'warn'`,`'error'`
2. Boolean that dictates the creation of a daily rotating file
3. In case `2.` is true a path will be required to store the log files
4. the date format of the date that will be part of the logfile name



``` js
var LazyLogger= new require('lazy-logger');
//initialize a logger object with info level of debug, a path, and a pattern for date
var logger= new LazyLogger('silly',true,'./log-','yyyy-MM-dd');


logger.silly('Silly level');

logger.debug('Debug level');

logger.verbose('Verbose level');

logger.info('Info level');

logger.warn('Warn level');

logger.error('Error level');
```