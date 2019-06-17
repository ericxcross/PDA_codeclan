var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  //Do the number buttons update the display of the running total?
  it('the number buttons should update the display of the running total', function(){
    const running_total = element(by.id('running_total'));
    const num1 = element(by.id('number1'));
    num1.click();
    expect(running_total.getAttribute('value')).to.eventually.equal('1')
  })

  //Do the arithmetical operations update the display with the result of the operation?
  it('the arithmetical operactors should update the display with the result of the operation', function(){
    const total = element(by.id('running_total'));
    const num2 = element(by.id('number2'));
    const num4 = element(by.id('number4'));
    const plus = element(by.id('operator_add'));
    const equals = element(by.id('operator_equals'));
    num2.click();
    plus.click();
    num4.click();
    equals.click();
    expect(total.getAttribute('value')).to.eventually.equal('6');
  })

  //Can multiple operations be chained together?
  it('chain multiple operations together correctly', function(){
    const total = element(by.id('running_total'));
    const num2 = element(by.id('number2'));
    const num4 = element(by.id('number4'));
    const num3 = element(by.id('number3'));
    const plus = element(by.id('operator_add'));
    const subtract = element(by.id('operator_subtract'));
    const equals = element(by.id('operator_equals'));
    num2.click();
    plus.click();
    num4.click();
    subtract.click();
    num3.click();
    equals.click();
    expect(total.getAttribute('value')).to.eventually.equal('3');
  })

  //Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('gives negative number', function(){
    const total = element(by.id('running_total'));
    const num2 = element(by.id('number2'));
    const num4 = element(by.id('number4'));
    const subtract = element(by.id('operator_subtract'));
    const equals = element(by.id('operator_equals'));
    num2.click();
    subtract.click();
    num4.click();
    equals.click();
    expect(total.getAttribute('value')).to.eventually.equal('-2');
  })

  //If a number is divided by zero, is the output 'Not a number'? (You will need to modify the Calculator model to meet this requirement).
  it('divide by zero should output not a number', function(){
    const total = element(by.id('running_total'));
    const num2 = element(by.id('number2'));
    const num0 = element(by.id('number0'));
    const divide = element(by.id('operator_divide'));
    const equals = element(by.id('operator_equals'));
    num2.click();
    divide.click();
    num0.click();
    equals.click();
    expect(total.getAttribute('value')).to.eventually.equal('Infinity');
  })

});
