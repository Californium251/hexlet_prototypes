class Random {
  constructor(start) {
    this.sequence = [];
    this.sequence.push(start);
    this.a = 10;
    this.c = 5;
    this.m = 7;
  }
  getLast() {
    return this.sequence[this.sequence.length - 1];
  }
  getNext() {
    const next = (this.a * this.getLast() + this.c) % this.m;
    this.sequence.push(next);
    return next;
  }
  reset() {
    this.sequence.length = 1;
  }
}

export default Random;
