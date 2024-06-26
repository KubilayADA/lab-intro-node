class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
}

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0){
      throw new Error("Empty SortedList")
    }
    return Math.min(...this.items);
  }

  sum() {
    
    if (this.length === 0){
      return 0;
    }
    return this.items.reduce((total, item) => total + item, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error("Empty SortedList")
    }
    const total = this.sum();
    return total / this.length;

  }
}

module.exports = SortedList;
