// =============== MENU MOBILE ================== //
const navMenu = document.getElementById('menu-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav')
  nav.classList.toggle('active')
}

navMenu.addEventListener('click', toggleMenu)


// =========== REMOVE MENU MOBILE ============= //
const navLink = document.querySelectorAll('nav ul li a');

for(const link of navLink){
  link.addEventListener('click', function (){
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
