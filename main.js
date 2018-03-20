'use strict';

var pi = '3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679'; // 100 digits worth

var inputElem = document.querySelector('.input-wrapper');
var guessElem = document.querySelector('textarea');
var buttonElem = document.querySelector('button');
var answerElem = document.querySelector('#answer');

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
  return (str === pi);
}