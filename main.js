'use strict';

const pi = '3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273'; // 300 digits worth

const elem = {
  input: document.querySelector('textarea'),
  count: document.getElementById('count')
};

elem.input.addEventListener('keyup', event => {
  const guess = elem.input.value;
  if (guess.length > 0) {
    if (check(guess)) {
      processCorrect();
      elem.count.innerText = guess.length;
    } else {
      processIncorrect();
    }
  } else if (guess.length > 300) {
    if (check(guess.slice(0, 300))) {
      processCorrect();
      elem.count.innerText = '300 (stopped counting after 300...)';
    } else {
      processIncorrect();
    }
  } else {
    clearInput();
  }
});

function check(guess) {
  const slice = pi.slice(0, guess.length);
  return (slice === guess);
}

function processCorrect() {
  const classList = elem.input.classList;
  classList.contains('valid') ? null : classList.add('valid');
  classList.contains('invalid') ? classList.remove('invalid') : null;
}

function processIncorrect() {
  const classList = elem.input.classList;
  classList.contains('invalid') ? null : classList.add('invalid');
  classList.contains('valid') ? classList.remove('valid') : null;
}

function clearInput() {
  classList.contains('invalid') ? classList.remove('invalid') : null;
  classList.contains('valid') ? classList.remove('valid') : null;
  elem.count.innerText = 0;
}

// buttonElem.addEventListener('click', function() {
//   var guess = guessElem.value;
//   if (check(guess)) {
//     answerElem.innerHTML = `
//       <span>Correct!</span>
//     `;
//   } else {
//     answerElem.innerHTML = `
//       <span>Incorrect!</span>
//     `;
//   }
// });

// function check(str) {
//   switch (selectElem.value) {
//     case 'one':
//       return (str === piOne);
//       break;
//     case 'two':
//       return (str === piTwo);
//       break;
//     case 'three':
//       return (str === piThree);
//       break;
//     default:
//       break;
//   }
// }