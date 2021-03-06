/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ./resources/js/darkmode.js ***!
  \**********************************/
function setThemeColor(theme) {
  var tSwitch = document.getElementById('themeSwitch');
  var secondChild = document.getElementById('second-div-child');
  var thirdChild = document.getElementById('third-div-child');

  if (tSwitch !== null || tSwitch !== undefined) {
    var html_prop = document.querySelector('html');
    var htmlClasses = html_prop.classList;

    if (theme === 'dark') {
      htmlClasses.add('dark');
      secondChild.style.background = 'bg-green-400';
      thirdChild.classList.add('translate-x-6');
    }

    if (theme === 'light') {
      htmlClasses.remove('dark');
      secondChild.style.background = 'bg-gray-400';
    }
  }
}

if (localStorage.theme === undefined) {
  localStorage.theme = 'light';
}

if (localStorage.theme !== undefined) {
  var html_prop = document.querySelector('html');
  var htmlClasses = html_prop.classList;

  if (localStorage.theme === 'dark') {
    htmlClasses.add('dark');
  }

  if (localStorage.theme === 'light') {
    htmlClasses.remove('dark');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var tSwitch = document.getElementById('themeSwitch');
  var secondChild = document.getElementById('second-div-child');
  var thirdChild = document.getElementById('third-div-child');

  if (tSwitch !== null || tSwitch !== undefined) {
    if (localStorage.theme !== null) {
      if (localStorage.theme === 'dark') {
        secondChild.style.background = 'bg-green-400';
        thirdChild.classList.add('translate-x-6');
      }

      if (localStorage.theme === 'light') {
        secondChild.style.background = 'bg-gray-400';
        thirdChild.classList.remove('translate-x-6');
      }
    }

    tSwitch.addEventListener('click', function () {
      var html_prop = document.querySelector('html');
      var htmlClasses = html_prop.classList;

      if (localStorage.theme === 'dark') {
        htmlClasses.remove('dark');
        secondChild.style.background = 'bg-green-400';
        thirdChild.classList.remove('translate-x-6');
        localStorage.theme = 'light';
      } else {
        htmlClasses.add('dark');
        secondChild.style.background = 'bg-gray-400';
        thirdChild.classList.add('translate-x-6');
        localStorage.theme = 'dark';
      }
    });
  }
});
/******/ })()
;