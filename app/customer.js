'use strict'

class Customer {
    constructor (name, title) {
        this.name = name;
        this.title = title;
        this.Amount = 0;
    }

    AddMoney (amount) {
        this.Amount += amount;
        return this.Amount;
    }
}

module.exports = Customer;