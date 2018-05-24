'use strict';
class Builder {
  constructor() {}

  setName(name) {
    this.name = name;
    return this;
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setSalary(salary) {
    this.salary = salary;
    return this;
  }

  setAccount(account) {
    this.account = account;
    return this;
  }

  build() {
    return new Engineer(this);
  }
}

class Engineer {
  constructor(raw) {
    if (raw) {
      this.name = raw.name;
      this.title = raw.title;
      this.salary = raw.salary;
      this.account = raw.account;
    }
  }

  static Builder() {
    return new Builder;
  }
}

console.log(
  Engineer.Builder()
    .setName('Vladimir Fedin')
    .setTitle('UI Engineer')
    .setAccount('Google')
    .setSalary('Eat')
    .build()
);

/*
    Engineer {
      name: 'Vladimir Fedin',
      title: 'UI Engineer',
      account: 'Google',
      salary: 'Eat'
    }
 */

module.exports = Engineer;