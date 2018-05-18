class Intern {
  constructor() {}

  getSalary() {
    return 'NOT FOUND';
  }
}

class RJContractor extends Intern {
  constructor(basic) {
    super();
    this.basic = basic;
  }

  getSalary() {
    return 'KICKER TABLE <- ' + this.basic.getSalary();
  }
}

class GoogleContractor extends Intern {
  constructor(basic) {
    super();
    this.basic = basic;
  }

  getSalary() {
    return 'EAT <- ' + this.basic.getSalary();
  }
}

let intern = new Intern();
let rjContractor = new RJContractor(intern);
let googleContractor = new GoogleContractor(rjContractor);

console.log(googleContractor.getSalary()); // EAT <- KICKER TABLE <- NOT FOUND
