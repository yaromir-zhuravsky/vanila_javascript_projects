const btn = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

btn.addEventListener('click', () => {
  // get random number between 0 - 3
  // const randomNumber = rgb(getRandomInt(256), getRandomInt(256), getRandomInt(256));
  const red = getRandomInt(256).toString(16);
  const blue = getRandomInt(256).toString(16);
  const green = getRandomInt(256).toString(16);
  const hex = `#${red}${green}${blue}`
  document.body.style.backgroundColor = hex
  color.innerHTML = hex
})
