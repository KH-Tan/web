//

let darkMode = localStorage.getItem('appDarkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  document.body.classList.remove('lightmode');  
  document.body.classList.add('darkmode');
  localStorage.setItem('appDarkMode', 'enabled');
}
const disableDarkMode = () => {
  document.body.classList.remove('darkmode');
  document.body.classList.add('lightmode');
  localStorage.setItem('appDarkMode', 'disabled');
}

if (darkMode == 'enabled') {
  enableDarkMode();  
}
darkModeToggle.addEventListener('click', () => {
  let darkMode = localStorage.getItem('appDarkMode');
  if (darkMode == "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

//
