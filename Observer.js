class CustomObservable {
  constructor() {
    this.handlers = [];
  }

  subscribe(callback) {
    this.handlers.push(callback);
  }

  unsubscribe(callback) {
    this.handlers = this.handlers.filter(h => h !== callback);
  }

  alarm(msg, scope) {
    this.handlers.forEach(callback => callback.call(scope || global, msg));
  }
}

function callbackHandler(msg) {
  console.log(msg);
}

let observable = new CustomObservable();
observable.subscribe(callbackHandler);
observable.alarm('Test #1');
observable.subscribe(callbackHandler);
observable.alarm('Test #2');
observable.unsubscribe(callbackHandler);
observable.alarm('Test #3');
observable.subscribe(callbackHandler);
observable.alarm('Test #4');

/*
 Test #1
 Test #2
 Test #2
 Test #4
 */