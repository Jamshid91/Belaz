let textList = document.querySelector('.text-info');
let textBox = document.querySelector('.hidden');
let span = document.querySelector('.close');

console.log(span)

textList.addEventListener('mouseenter', toggle);
span.addEventListener('click', close);

function toggle() {
  textBox.style.display = 'block'
}

function close() {
  textBox.style.display = 'none'
}