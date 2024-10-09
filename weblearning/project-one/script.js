
function toggleMenu() {
  const menu = document.querySelector('.hamburger-menu')
  const icon = document.querySelector('.hamburger-icon')

  menu.classList.toggle('open')
  icon.classList.toggle('open')
}