const dropDown = document.querySelector(".fa-chevron-circle-down")
const ul = document.querySelector('ul')

dropDown.addEventListener('click', (e) => {
    ul.classList.toggle('ul-menu-visible');
    e.target.classList.toggle('open')
})