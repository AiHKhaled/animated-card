const container = document.querySelector('.container')
const card = document.querySelector('.card')
const sneaker = document.querySelector('.sneaker img')
const title = document.querySelector('.title')
const description = document.querySelector('.description')
const buttons = document.querySelector('.buttons')
const purchase = document.querySelector('.purchase')
container.addEventListener('mousemove', (e) => {
  console.log('hey')
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener('mouseenter', () => {
  setInterval((card.style.transition = 'none'), 300)
  sneaker.style.transform = 'translateZ(200px) rotate(35deg)'
  title.style.transform = 'translateZ(150px)'
  description.style.transform = 'translateZ(100px)'
  buttons.style.transform = 'translateZ(75px)'
  purchase.style.transform = 'translateZ(50px)'
})

container.addEventListener('mouseleave', () => {
  card.style.transition = 'all 0.5s ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  sneaker.style.transform = 'translateZ(0)'
  title.style.transform = 'translateZ(150px)'
  description.style.transform = 'translateZ(0)'
  buttons.style.transform = 'translateZ(0)'
  purchase.style.transform = 'translateZ(0)'
})
