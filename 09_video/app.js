const video = document.querySelector('.video-container')
const switchBtn = document.querySelector('.switch-btn')
switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('slide')
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
})

const preloader = document.querySelector('.preloader')
window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})
