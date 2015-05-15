var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
expect = chai.expect;

var steps = function() {

  var firstNumber = element(by.model('first'));
  var secondNumber = element(by.model('second'));
  var operador = element(by.model('operator'));
  var goButton = element(by.id('gobutton'));
  var latestResult = element(by.binding('latest'));
  var historic = element.all(by.repeater('result in memory'));

  function calc(a, b, c) {
	firstNumber.sendKeys(a);
	secondNumber.sendKeys(b);
	operador.sendKeys(c);

	return goButton.click();
  }

  this.Given(/^I visit Calculator page$/, function (next) {
	browser.get('http://juliemr.github.io/protractor-demo/');
	next();
  });

  this.When(/^I calc the result of ([^"]*) ([^"]*) ([^"]*)$/, function (number1, operator, number2, next) {
	calc(number1, number2, operator).then(function(){
		next();		
	});
  });

  this.Then(/^the result should be ([^"]*)$/, function (result, next) {
    latestResult.getText().then(function(text){
       expect(text).to.equals(result).and.notify(next); 
    });
  });

  this.Then(/^the historic count should be ([^"]*)$/, function (total, next) {
	  expect(historico.count()).to.equals(2).and.notify(next);
  });

};

module.exports = steps;


