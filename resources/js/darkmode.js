function setThemeColor(theme) {
    let tSwitch = document.getElementById('themeSwitch');
    let secondChild = document.getElementById('second-div-child');
    let thirdChild = document.getElementById('third-div-child');
    if (tSwitch !== null || tSwitch !== undefined) {
        let html_prop = document.querySelector('html');
        let htmlClasses = html_prop.classList;
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
    let html_prop = document.querySelector('html');
    let htmlClasses = html_prop.classList;
    if (localStorage.theme === 'dark') {
        htmlClasses.add('dark');
    }
    if (localStorage.theme === 'light') {
        htmlClasses.remove('dark');
    }
}
document.addEventListener('DOMContentLoaded', function () {

    let tSwitch = document.getElementById('themeSwitch');
    let secondChild = document.getElementById('second-div-child');
    let thirdChild = document.getElementById('third-div-child');
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
            let html_prop = document.querySelector('html');
            let htmlClasses = html_prop.classList;
            if (localStorage.theme === 'dark') {
                htmlClasses.remove('dark');
                secondChild.style.background = 'bg-green-400';
                thirdChild.classList.remove('translate-x-6');
                localStorage.theme = 'light';
            }
            else {
                htmlClasses.add('dark');
                secondChild.style.background = 'bg-gray-400';
                thirdChild.classList.add('translate-x-6');
                localStorage.theme = 'dark';
            }
        });
    }
});
