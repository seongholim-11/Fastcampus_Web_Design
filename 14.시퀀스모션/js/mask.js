const wrap = document.querySelector("main");
const btns = document.querySelectorAll("#navi li");
const panels = document.querySelectorAll("section article");

btns.forEach((btn, index)=>{
    btn.addEventListener('click', e=>{
        for(let i = 0; i < btns.length; i++){
            btns[i].classList.remove('on')
            
            if(panels[i].classList.contains('on')){
                panels[i].classList.add('mask')
            }
        }
        btns[index].classList.add('on')
        panels[index].classList.add('lower')

        setTimeout(() => {
            for(let i = 0; i < panels.length; i++){
                if(panels[i].classList.contains('on')){
                    panels[i].classList.remove('on')
                    panels[i].classList.remove('mask')
                }
            } 
            panels[index].classList.remove('lower')
            panels[index].classList.add('on')
        }, 1400)
    })
})

