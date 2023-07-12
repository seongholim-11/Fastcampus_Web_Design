const btnEl = document.querySelector('.btn')
const text = document.querySelector('.text')
const loader = document.querySelector('.loader')
// ...
btnEl.addEventListener('click', () => {
  btnEl.classList.add('loading')  
  loader.style.display = 'block'
  text.style.display = 'none'
  setTimeout(()=>{
    btnEl.classList.remove('loading')  
    loader.style.display = 'none'
    text.style.display = 'block'
  }, 3000)

})