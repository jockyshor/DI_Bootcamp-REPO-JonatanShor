const lodash = require('lodash');

const { add, multiply } = require ('./math.js');

const res1 = add(2,5);
const res2 = multiply(3,2);


const res3 = lodash.sum(2,3);
const numbers = [10, 20, 30, 40, 50];
const res4 = lodash.mean(numbers);


