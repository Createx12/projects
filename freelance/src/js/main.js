// DarkMode
const darkModeSwitch = document.querySelector(".header__theme-wrapper");

// Проверка темной темы на уровне системный настроек
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
   darkModeSwitch.classList.add("header__theme-wrapper--active");
   document.body.classList.add("dark");
}

// Проверка какая тема в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
   darkModeSwitch.classList.add("header__theme-wrapper--active");
   document.body.classList.add("dark");
} else if (localStorage.getItem('darkMode') === 'light') {
   darkModeSwitch.classList.remove("header__theme-wrapper--active");
   document.body.classList.remove("dark");
}

// меняется сист. тема, меняем тему здесь в отправляем ее в localStorage
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
   const newColorScheme = event.matches ? "dark" : 'Light';


   if (newColorScheme === 'dark') {
      darkModeSwitch.classList.add("header__theme-wrapper--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark")
   } else {
      darkModeSwitch.classList.remove("header__theme-wrapper--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light")
   }
})

// включение темной темы по кнопке
darkModeSwitch.onclick = function () {
   darkModeSwitch.classList.toggle("header__theme-wrapper--active");
   const isDark = document.body.classList.toggle('dark');

   if (isDark) {
      localStorage.setItem('darkMode', 'dark')
   } else {
      localStorage.setItem('darkMode', "light");
   }
}





