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
    document.body.classList.toggle('dark-theme')
  } else {
    document.body.classList.remove('dark-theme')
  }
})

// ===============  FAQ ================== //
const faq = document.getElementsByClassName('faq-page')
let i
for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener('click', function () {
    /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
    this.classList.toggle('active')
    /* Toggle between hiding and showing the active panel */
    const body = this.nextElementSibling
    if (body.style.display === 'block') {
      body.style.display = 'none'
    } else {
      body.style.display = 'block'
    }
  })
}
