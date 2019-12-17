// Implementing Queues with two stacks.

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

// Queue implementation

function Queue_TwoStacks() {
  this._stackIn = new Stack();
  this._stackOut = new Stack();
}

Queue_TwoStacks.prototype.enqueue = function(val) {
  this._stackIn.push(val);
}

Queue_TwoStacks.prototype.transferStack = function() {
  while (this._stackIn.storage.length > 0) {
    this._stackOut.push(this._stackIn.pop())
  }
}

Queue_TwoStacks.prototype.dequeue = function() {
  if (this._stackOut.storage.length === 0) {
    this.transferStack();
  }
  return this._stackOut.pop();
}

let queueSTack = new Queue_TwoStacks();
queueSTack.enqueue(1);
queueSTack.enqueue(2);
queueSTack.enqueue(3);

queueSTack.dequeue();