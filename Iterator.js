class Iterator {
  constructor(items) {
    this.items = items;
    this.index = 0;
  }

  first() {
    this.index = 0;
    return this.next();
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.index <= this.items.length;
  }
}

let items = ['Vladimir Fedin', 'UI Engineer', 'Google', 'Eat'];
let iterator = new Iterator(items);

for (let msg = iterator.first(); iterator.hasNext(); msg = iterator.next()) {
  console.log(msg);
}

/*
    Vladimir Fedin
    UI Engineer
    Google
    Eat
 */