'use strict';
class HttpService {
  static getInstance() {
    if (!HttpService._instance) {
      return HttpService._instance = new HttpService;
    }
    return HttpService._instance;
  }
}

let obj1 = HttpService.getInstance();
let obj2 = HttpService.getInstance();

obj1.url = 'http://griddynamics.com/';

console.log(obj1 === obj2, obj1.url, obj2.url); // true 'http://griddynamics.com/' 'http://griddynamics.com/'
