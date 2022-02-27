const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')
const giveaway = document.querySelector('.giveaway')

const tempDate = new Date();
const tempYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth() + 1
const tempDay = tempDate.getDay() - 1

const futureDate = new Date(tempYear + 1, tempMonth, tempDay, 17, 32, 0);
const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()]
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`

const futureTime = futureDate.getTime()
function getRemainingTime() {
  const today = new Date().getTime()
  const t = futureTime - today;
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  //------------------------------
  const days = Math.floor(t / oneDay)
  const hours = Math.floor((t % oneDay) / oneHour)
  const minutes = Math.floor((t % oneHour) / oneMinute);
  const seconds = Math.floor((t % oneMinute) / 1000);

  function format(item) {
    if (item < 10) {
      return `0${item}`
    }
    return item
  }
  const values = [days, hours, minutes, seconds]
  items.forEach((item, index) => {
    item.innerHTML = format(values[index])
  })
  if (t < 0) {
    clearInterval(countdown)

    deadline.innerHTML = '<h4 class="expired">sorry, this giveaway has expired</h4>'
  }
}

const countdown = setInterval(getRemainingTime, 1000);
