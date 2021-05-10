// Tree Reduce - Trees

/**
 * ============== About Reduce Method =====================
 *  The reduce() method executes a callback
 * on each value in a collection. It passes an accumulator
 * and the value of the current value to the callback
 * and updates the accumulator with the returned value
 * resulting in a single output value.
 *
 * Here are two examples of how the reduce method works on an array:
 *
 * ---Example #1---
 * var arr = [2, 3, 4]
 *
 * var cb = function (accumulator, currentValue){
 * return accumulator + (currentValue*2)
 * }
 *
 *  arr.reduce(cb, 1) //19
 * // 1+(2*2) >>> 5+(3*2) >>> 11+(4*2) >>> 19
 *
 *
 * ---Example #2---
 * var arr = [2, 3, 4]
 *
 * var cb = function (accumulator, currentValue){
 * return accumulator + currentValue
 * }
 *
 * arr.reduce(cb) //9
 * // 2+3 >>> 5+4 >>> 9
 *
 *
 *  ================== Prompt =========================
 *
 * Implement a `reduce` method for this Tree class,
 * in the ES6 pseudo-classical instantiation style.
 *
 * Add any other methods or properties necessary to
 * make the example code produce the desired output
 * and run without errors.
 *
 * The `reduce` method should accept two arguments:
 * 1. (required) a callback function which will produce
 *    the accumulated result
 * 2. (optional) a starting value for the accumulation
 *
 * Make sure you do not modify the original tree.
 *
 *
 *
 *
 */

class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  addChild(value) {
    var child = new Tree(value);
    this.children.push(child);
    return child;
  }

  reduce(cb, accumulator) {
    // there is no accumulator
    if (accumulator === undefined) {
      // set accumulator too current value
      accumulator = this.value;
    } else {
      // otherwise set the accumulator to result of
      // calling the cb on the accumulator and the current value
      accumulator = cb(accumulator, this.value);
    }

    // iterate over each child node
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      // set the accumulator to the results of invoking reduce
      // on the current child passing it the callback and the accumulator
      accumulator = child.reduce(cb, accumulator);
    }

    // return the accumulator
    return accumulator;
  }
}

// // Example setup:

var root = new Tree(0),
  child1 = root.addChild(1),
  child2 = child1.addChild(2),
  child3 = root.addChild(3),
  child4 = child3.addChild(4),
  child5 = child3.addChild(5),
  child6 = root.addChild(6);

// Example usage:

root.reduce(function (accumulator, currentValue) {
  return accumulator + ' ' + currentValue + ',';
}, 'Values, depth-first:');

// => "Values, depth-first: 0, 1, 2, 3, 4, 5, 6,"

root.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}); // => 21

root.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10); // => 31
