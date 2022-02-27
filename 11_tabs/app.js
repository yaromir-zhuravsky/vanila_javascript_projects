const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')
about.addEventListener('click', (e) => {
  const { id } = e.target.dataset
  if (id) {
    // remove active from all buttons
    btns.forEach((btn) => btn.classList.remove('active'))
    e.target.classList.add('active')
    articles.forEach((article) => article.classList.remove('active'))
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
