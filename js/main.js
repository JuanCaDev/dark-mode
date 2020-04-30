const btnSwitch = document.getElementById("switch")
const btnHamburger = document.getElementById("menu")
const btnClose = document.getElementById("menu-close")
const enlaces = document.getElementById('links')

btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle('dark')
  btnSwitch.classList.toggle('active')

  // Guardar el localstorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('dark-mode', 'true')
  } else {
    localStorage.setItem('dark-mode', 'false')
  }
})

// Obtener el modo actual
if (localStorage.getItem('dark-mode') === 'true') {
  document.body.classList.add('dark')
  btnSwitch.classList.add('active')
} else {
  document.body.classList.remove('dark')
  btnSwitch.classList.remove('active')
}

// Menú hamburguesa
btnHamburger.addEventListener('click', () => {
  enlaces.classList.add('active')
  enlaces.style.display = "flex"
  btnHamburger.style.display = "none"
  btnClose.style.display = "inline-block"
  document.body.style.overflow = "hidden"
})
btnClose.addEventListener('click', () => {
  enlaces.classList.remove('active')
  enlaces.style.display = "none"
  btnHamburger.style.display = "inline-block "
  btnClose.style.display = "none"
  document.body.style.overflow = "auto"
})