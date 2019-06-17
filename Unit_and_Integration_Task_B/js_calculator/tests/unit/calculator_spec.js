var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  //Unit Tests
  it('can add', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it('can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it('can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  //Integration Tests
  it('can concatenate numberClicks', function(){
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
    assert.strictEqual(calculator.newTotal, false);
  })

  it('can chain multiple operations together', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 8);
    assert.strictEqual(calculator.newTotal, true);
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, 8);
  })

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.clearClick();
    calculator.numberClick(9);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 15);
    assert.strictEqual(calculator.newTotal, true);
    assert.strictEqual(calculator.previousOperator, null);
    assert.strictEqual(calculator.previousTotal, 15);
  })

});
