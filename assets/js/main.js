// =============== MENU MOBILE ================== //
const navMenu = document.getElementById('menu-mobile')

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

navMenu.addEventListener('click', toggleMenu)

// =========== REMOVE MENU MOBILE ============= //
const navLink = document.querySelectorAll('nav ul li a')

for (const link of navLink) {
  link.addEventListener('click', function () {
    nav.classList.remove('active')
  })
}

// =============== DARK MODE ================== //
const toggle = document.getElementById('btn')

toggle.addEventListener('click', () => {
  if (toggle) {
    document.body.classList.toggle('sun-theme')
  } else {
    document.body.classList.remove('sun-theme')
  }
})

// ===============  FAQ ================== //
const faq = document.getElementsByClassName('faq-page')
let i
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const body = this.nextElementSibling
    if (body.style.display === 'block') {
      body.style.display = 'none'
    } else {
      body.style.display = 'block'
    }
  })
}

// =============== BUY MORE ================== //
let card = document.querySelectorAll('.button-buy')

card.forEach(event => {
  event.addEventListener('click', () => {
    if (event.classList.contains('active')) {
      event.classList.remove('active')
    } else {
      event.classList.add('active')
    }
  })
})


// =============== SCROLL REVEAL  ================== //

// ========== SCROLL TOP  ========= //
const scrollTop = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2000
})

scrollTop.reveal('.delaySmall', { delay: 300 })
scrollTop.reveal('.delayMedium', { delay: 500 })
scrollTop.reveal('.delayLarge', { delay: 700 })
scrollTop.reveal('.delayLargeTopExtra', { delay: 900 })


// ========== SCROLL BOTTOM  ========= //
const scrollBottom = ScrollReveal({
  origin: 'bottom',
  distance: '50px',
  duration: 2200
})

scrollBottom.reveal('.delaySmallBottom', { delay: 300 })
scrollBottom.reveal('.delayMediumBottom', { delay: 500 })
scrollBottom.reveal('.delayLargeBottom', { delay: 700 })
scrollBottom.reveal('.delayLargeBottomExtra', { delay: 900 })


// ========== SCROLL LEFT  ========= //
const scrollLeft = ScrollReveal({
  origin: 'left',
  distance: '50px',
  duration: 2000
})

scrollLeft.reveal('.home-data-img, .sony-left, .about-img, .contact-button, .form-left, .control-about-2', { delay: 550 })


// ========== SCROLL RIGHT  ========= //
const scrollRight = ScrollReveal({
  origin: 'left',
  distance: '-20px',
  duration: 2200
})

scrollRight.reveal('.sony-right, .about-data, .contact-title, .form-right, .data-2', { delay: 550 })


// ========== BUTTON SCROLL TOP  ========= //
const backTopButton = document.querySelector('.scrollup')
function backToTop() {
  if (window.scrollY >= 550) {
    backTopButton.classList.add('show')
  } else {
    backTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function(){
  backToTop()
})
