let dark = document.querySelector('.page')
let themeButton = document.querySelector('.theme-button');
themeButton.onclick = function() {
  dark.classList.toggle('light-theme');
  dark.classList.toggle('dark-theme');
}