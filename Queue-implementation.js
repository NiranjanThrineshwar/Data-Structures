// Queue - elementary data structure
// FIFO - First in First out
// Methods: enqueue, dequeue, size

function Queue() {
  this.storage = [];
  this.count = 0;
}

Queue.prototype.enqueue = function(val) {
  if (this.count <= 10) {
    this.storage.push(val);
    this.count++;
  } else {
    return `Queue is completely full. Delete queue to add elements.`;
  }
}

Queue.prototype.dequeue = function() {
  if (this.count !== 0) {
    const dequeuedElement = this.storage.shift();
    this.count--;
    return `Dequeued element: ${dequeuedElement}`;
  } else {
    return  `Queue is empty. Add elements to clear queue.`
  }
}

Queue.prototype.size = function() {
  if (this.storage) {
    return `Queue size: ${this.storage.length}`
  } else {
    return `Queue is empty.`;
  }
}