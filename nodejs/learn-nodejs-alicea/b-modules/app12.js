// 029 Modules and ES6

// may need babel to work properly because of import and export

// TEST THIS LATER WITH BABEL

'use strict';
import { greet as greeter } from './app12-greet.js';
greeter();

// or 

// import * as greeter from 'app12-greet.js';
// greeter.greet();

// or 

// import greet from 'app12-greet';
// greet();