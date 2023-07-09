// 배치하고 싶은 요소의 부모 요소, 객체
// 겹치는 이유: 이미지 높이를 인지하지 못해서, 돔이 출력이 되면 이미지 컨텐츠 높이를 인식해서 배치, 이미지가 아직 로딩이 안돼서
// 실제 돔이 로딩 완료되는거랑, 소스 자료가 출력이 완료가 되는건 별개 

// 이미 활성화된 버튼이 클릭하면 또 실행되는 성능적 누수

// 윈도우 로드 이벤트는 소스 자료가 전부 출력되는거까지
window.addEventListener('load', ()=>{
    const grid = new Isotope("section", {
        itemSelector: "article", // 배치하고 싶은 요소
        columnWidth: "article", // 너비, 요소를 쓰면 알아서 배치
        transitionDuration: "0.5s" // 트랜지션 속도
    })

    const btns = document.querySelectorAll("main ul li")

    btns.forEach(btn => {
        btn.addEventListener("click", (e)=>{
            e.preventDefault()

            const isOn = e.currentTarget.classList.contains('on')

            if(isOn){
                return false
            }

            activation(e);
        })
    })

    function activation(e){
        for(let btn of btns) btn.classList.remove('on')
        e.currentTarget.classList.add('on')
        
        const btn_a = e.currentTarget.querySelector('a');
        const a_href = btn_a.getAttribute("href");

        grid.arrange({filter: a_href})
    }
})