'use strict';

var piOne = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'; // 100 digits worth

var piTwo = '3.14159265358979323846264338327950288419716939937510582097494459230781640628620899862803482534211706798214808651328230664709384460955058223172535940812848111745028410270193852110555964462294895493038196';  // 200 digits worth


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
    default:
      break;
  }
}