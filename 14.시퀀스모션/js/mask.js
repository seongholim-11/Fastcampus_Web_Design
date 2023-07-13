const wrap = document.querySelector("main");
const btns = document.querySelectorAll("#navi li");

btns.forEach((btn, index)=>{
    btn.addEventListener('click', e=>{
        for(let button of btns) button.classList.remove('on')
        btns[index].classList.add('on')
    })
})