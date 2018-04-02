'use strict';

var piOne = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'; // 100 digits worth

var piTwo = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';  // 200 digits worth

var piThree = '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273'; // 300 digits worth


var inputElem = document.querySelector('.input-wrapper');
var guessElem = document.querySelector('textarea');
var buttonElem = document.querySelector('button');
var answerElem = document.querySelector('#answer');
var selectElem = document.querySelector('select');

buttonElem.addEventListener('click', function() {
  var guess = guessElem.value;
  if (check(guess)) {
    answerElem.innerHTML = `
      <span>Correct!</span>
    `;
  } else {
    answerElem.innerHTML = `
      <span>Incorrect!</span>
    `;
  }
});

function check(str) {
  switch (selectElem.value) {
    case 'one':
      return (str === piOne);
      break;
    case 'two':
      return (str === piTwo);
      break;
    case 'three':
      return (str === piThree);
      break;
    default:
      break;
  }
}