const frame = document.querySelector('section');
const list = frame.querySelectorAll('article');
const prev = document.querySelector('.btnPrev')
const next = document.querySelector('.btnNext')
// 이미지 배열 만들기
const names = ['Blizzards', 'Calm', 'Dusty_Road', 'Escape', 'Payday', 'Retreat', 'Seasonal', 'Vespers']

const len = list.length;
const deg = 360 / len;
let num = 0;
let active = 0;

names.forEach((name, index)=>{
    const pic = list[index].querySelector('.pic')
    const h2 = list[index].querySelector('.txt h2')
    // translateY(-100vh) 회전한 기준으로 이동
    list[index].style.transform = `rotate(${deg*index}deg) translateY(-100vh)`
    pic.style.backgroundImage = `url(./img/${name}.jpg)`
    h2.innerText = name;

    const audio = document.createElement('audio');
    audio.setAttribute('src', `music/${name}.mp3`)
    audio.setAttribute('loop', `loop`)
    list[index].append(audio);
})

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

for(let el of list){
    // play, pause, load
    const play = el.querySelector('.play');
    const pause = el.querySelector('.pause');
    const redo = el.querySelector('.redo');

    play.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on')
        e.currentTarget.closest('article').querySelector('audio').play();
    })

    pause.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.remove('on')
        e.currentTarget.closest('article').querySelector('audio').pause();
    })

    redo.addEventListener('click', e => {
        e.currentTarget.closest('article').querySelector('.pic').classList.add('on')
        e.currentTarget.closest('article').querySelector('audio').load();
        e.currentTarget.closest('article').querySelector('audio').play();
    })
}

