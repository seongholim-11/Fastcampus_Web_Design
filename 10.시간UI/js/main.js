/* 
    main.className = ''; // 클래스 초기화
    forEach, forOf

*/

const main = document.querySelector('main')
const menus = document.querySelectorAll('nav span')
const numbers = document.querySelectorAll('.screen span');
// 비구조할당
const [am, pm] = document.querySelectorAll('.screen em');

setInterval(()=>{
    let now = new Date();
    let hr = now.getHours();

    const data = [
        {condition: hr >= 5 && hr < 11, name: 'morning'},
        {condition: hr >= 11  && hr < 16, name: 'afternoon'},
        {condition: hr >= 16  && hr < 20, name: 'evening'},
        {condition: hr >= 20 || hr < 5, name: 'night'},
    ]

    data.forEach((item, index) => {
        if(item.condition){
            main.className = '';
            main.classList.add(item.name);

            for(let menu of menus) menu.classList.remove('on');
            menus[index].classList.add('on')
        }
    })

    if(main.classList.contains('afternoon')){
        main.classList.add('dark_text')
    }else{
        main.classList.remove('dark_text')
    }

    const times = setTime(now);

    times.forEach((time, index)=>{
        getTime(time, index)
    })
}, 1000)

function setTime(now){
    let hr2 = null;
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr > 12){
        hr2 = hr - 12;
        pm.classList.add('on')
        am.classList.remove('on')
    }else{
        hr2 = hr;
        pm.classList.remove('on')
        am.classList.add('on')
    }

    return [hr2, min, sec]
}

function getTime(num, index){
    if(num < 10) num = '0'+ num
    numbers[index].innerText = num
}

// 가독성 높이기
// 반복되는 로직 함수로 묶기
// 반복되는 변수 인수로 전달하기
/* 
const numbers = document.querySelectorAll('.screen span');

setInterval(()=>{
    let now = new Date();
    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if(hr < 10) hr = '0'+ hr;
    if(min < 10) min = '0'+ min;
    if(sec < 10) sec = '0'+ sec;

    numbers[0].innerText = hr;
    numbers[1].innerText = min;
    numbers[2].innerText = sec;
}, 1000) 
*/