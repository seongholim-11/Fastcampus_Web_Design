const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const prev = document.querySelector('.btnPrev')
const next = document.querySelector('.btnNext')

const len = list.length;
const deg = 360 / len;
let num = 0;
let active = 0;

for(let i = 0; i < len; i++){
    // translateY(-100vh) 회전한 기준으로 이동
    list[i].style.transform = `rotate(${deg*i}deg) translateY(-100vh)`
}

prev.addEventListener('click', ()=>{
    frame.style.transform = `rotate(${deg * ++num}deg)`;

    ((active === 0) ? active = len-1 : active--);
    for(let el of list){
        el.classList.remove('on')
        list[active].classList.add('on')
    }
})
next.addEventListener('click', ()=>{
    frame.style.transform = `rotate(${deg * --num}deg)`;

    ((active === len-1) ? active = 0 : active++);

    for(let el of list){
        el.classList.remove('on')
        list[active].classList.add('on')
    }
})

