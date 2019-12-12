// Stack - elementary data structure
// LIFO - Last in First out
// Methods: push, pop, length, top of stack

function Stack() {
  this.storage = '';
}

Stack.prototype.push = function (val) {
  if (this.storage) {
    this.storage = this.storage.concat('---', val);
    return `stack elements after pushing: ${this.storage}`;
  } else {
    this.storage = val;
    return `stack elements after pushing: ${this.storage}`;
  }
}

Stack.prototype.pop = function () {
  if (this.storage) {
    const deletedItem = this.storage.slice(this.storage.lastIndexOf('---') + 3);
    this.storage = this.storage.substring(0, this.storage.lastIndexOf('---'));
    return `deleted item: ${deletedItem}`;
  } else {
    return `empty array. push some elements to pop`;
  }
}

Stack.prototype.size = function () {
  if (this.storage) {
    return `size of stack: ${this.storage.split('---').length}`;
  } else {
    return `size of stack: 0`;
  }
}

Stack.prototype.topElement = function () {
  if (this.storage) {
    const storageData = this.storage.split('---');
    return `element at top of stack: ${storageData[storageData.length - 1]}`;
  } else {
    return `no elements in the stack`;
  }
}

let firstStack = new Stack();
firstStack.push('element1');
firstStack.push('element2');
firstStack.push('element3');
firstStack.push('element4');

firstStack.size();
firstStack.pop();
firstStack.size();
firstStack.topElement();
