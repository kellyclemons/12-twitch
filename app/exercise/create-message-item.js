export default function(item) {
  const element = document.createElement('li');

  element.innerText = `${item.username} Do your homework`;

  return element;
}

// function createProfileElement(result1) {
//   // Create a new div element in memory
//   const message1 = document.createElement('result');
//
// result.classList.add('result__item');
// result.innerHTML = `username: 'Ryan', message: 'Do your homework'`;
