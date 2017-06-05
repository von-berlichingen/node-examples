'use strict';

class Currency {
  constructor (canadianDollar) {
    this.canadianDollar = canadianDollar
  }

  roundTwoDecimals(amount) {
    return Math.round(amount * 100) / 100;
  }

  canadianToUS(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianDollar);
  }

  USToCanadian(us) {
    return this.roundTwoDecimals(us / this.canadianDollar);
  }
}

//this won't work: node doesn't allow exports to be overwritten
// exports is a global reference to module.exports
// Setting anything to exports will break the reference between
// module.exports and exports
//exports = Currency;

// This will work
module.exports = Currency;

// this will work too: make module.exports reference exports again
// module.exports = exports;
