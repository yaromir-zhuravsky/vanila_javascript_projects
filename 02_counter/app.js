let counter = 0
const value = document.getElementById('value')
const decreaseButton = document.getElementById('decrease-btn')
const resetButton = document.getElementById('reset-btn')
const increaseButton = document.getElementById('increase-btn')
const form = document.getElementById('values')
const counterClasses = {
  positive: 'positive',
  negative: 'negative',
  neutral: 'neutral',
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
});

function setCounterClass(newClass) {
  let classes = Object.values(counterClasses)
  classes = classes.filter((klass) => klass !== newClass)
  classes.forEach((klass) => value.classList.remove(klass))
  value.classList.add(newClass)
}

function colorCounter() {
  if (counter > 0) {
    setCounterClass(counterClasses.positive)
  } else if (counter < 0) {
    setCounterClass(counterClasses.negative)
  } else {
    setCounterClass(counterClasses.neutral)
  }
}

function setCounter() {
  colorCounter()
  value.innerHTML = counter
}

decreaseButton.addEventListener('click', () => {
  counter -= Number(form.elements.step.value)
  setCounter()
})

resetButton.addEventListener('click', () => {
  counter = Number(form.elements.reset.value)
  setCounter()
})

increaseButton.addEventListener('click', () => {
  counter += Number(form.elements.step.value)
  setCounter()
})
