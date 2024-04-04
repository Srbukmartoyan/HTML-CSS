const icon = document.querySelector('.fa-bars');
const ul = document.querySelector('ul')


icon.addEventListener('click', (e) => {
    ul.classList.toggle('show');
    e.target.classList.toggle('open')
})