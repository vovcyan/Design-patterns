function factorial(n) {
  return (n !== 1) ? n * factorial(n - 1) : 1;
}

class Proxy {
  constructor() {
    this.store = {};
  }

  getFactorialForNumber(number) {
    if (!this.store[number]) {
      this.store[number] = factorial(number);
      console.log('Calculated');
    } else {
      console.log('From cache');
    }

    return this.store[number];
  }
}

let proxy = new Proxy();
proxy.getFactorialForNumber(1); // Calculated
proxy.getFactorialForNumber(2); // Calculated
proxy.getFactorialForNumber(3); // Calculated
proxy.getFactorialForNumber(4); // Calculated

proxy.getFactorialForNumber(2); // From cache
proxy.getFactorialForNumber(4); // From cache