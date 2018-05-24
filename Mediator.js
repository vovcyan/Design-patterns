'use strict';
const Engineer = require('./Builder');
const HttpService = require('./Singleton');

class Mediator {
  constructor() {
    const httpService = HttpService.getInstance();
    httpService.store = new Map();
  }

  addNewEmployee({name, title, account, salary}) {
    if (HttpService.getInstance().store.has(name)) {
      return;
    }

    const newEmployee = Engineer.Builder()
      .setName(name)
      .setTitle(title)
      .setAccount(account)
      .setSalary(salary)
      .build();

    HttpService.getInstance().store.set(name, newEmployee);
  }
}

const testEmployee1 = {
  name: 'Vladimir Fedin',
  title: 'UI Engineer',
  account: 'Google',
  salary: 'Eat'
};

const testEmployee2 = {
  name: 'Stig Dogs',
  title: 'Director',
  account: 'Apple',
  salary: 'Apples'
};

const mediator = new Mediator();
mediator.addNewEmployee(testEmployee1); // MapIterator { 'Vladimir Fedin' }
mediator.addNewEmployee(testEmployee1); // Ignored

mediator.addNewEmployee(testEmployee2); // MapIterator { 'Vladimir Fedin', 'Stig Dogs' }
