const section = document.querySelector('section')

section.addEventListener('click', e => {
    e.currentTarget.classList.add('on')
})