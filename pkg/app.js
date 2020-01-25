const log = require("./log");
log("Ahmed");

const _ = require('lodash');
let a = [2,3,4,5,6,7];
_.each(a, (z, i) => a[i] =  2 * z);
log(a);