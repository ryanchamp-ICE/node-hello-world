'use strict';

const chalk = require('chalk');
const generator = require('./name-generator');
const Customer = require('./customer');

const customer = new Customer(generator.name, generator.title);
customer.AddMoney(10);

console.log(generator.name);
console.log(chalk.bgRed(JSON.stringify(customer)));