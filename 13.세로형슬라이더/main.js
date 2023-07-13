const btnUp = document.querySelector(".btnUp");
const btnDown = document.querySelector(".btnDown");
const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const len = panel_li.length - 1;
let enableClick = true;

btnUp.addEventListener("click", (e) => {
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveUp();
    }
});

function moveUp() {
    // 현재 보이고 있는 li, 인덱스
    let current_item = panel.querySelector(".on");
    let current_index = parseInt(current_item.getAttribute("data-index"));

    // 다음에 보일 인덱스
    let next_index = null;

    // 현재 보이고 있는 인덱스가 마지막이 아니면 +1, 이면 첫화면
    current_index !== len ? (next_index = current_index + 1) : (next_index = 0);

    // 현재 보이고 있는 화면을 지우고 위로 올리는 모션
    current_item.classList.remove("on");
    current_item.classList.add("up");

    // 다음에 보일 인덱스를 미리 밑으로 보내기
    panel_li[next_index].classList.add("down");

    setTimeout(() => {
        // 밑에서 위로 보내는 모션 만들기
        panel_li[next_index].classList.remove("down");
        panel_li[next_index].classList.add("on");
        // 위로 올린 li 안보이게 하기
        panel.querySelector(".up").classList.remove("up");

        enableClick = true;
    }, 800);
}

btnDown.addEventListener("click", (e) => {
    e.preventDefault();

    if(enableClick){
        enableClick = false;
        moveDown();
    }
});

function moveDown() {
    // 현재 보이고 있는 li, 인덱스
    let current_item = panel.querySelector(".on");
    let current_index = parseInt(current_item.getAttribute("data-index"));

    // 다음에 보일 인덱스
    let prev_index = null;

    // 현재 보이고 있는 인덱스가 마지막이 아니면 +1, 이면 첫화면
    current_index !== 0 ? (prev_index = current_index - 1) : (prev_index = len);

    // 현재 보이고 있는 화면을 지우고 위로 올리는 모션
    current_item.classList.remove("on");
    current_item.classList.add("down");

    // 다음에 보일 인덱스를 미리 밑으로 보내기
    panel_li[prev_index].classList.add("up");

    setTimeout(() => {
        // 밑에서 위로 보내는 모션 만들기
        panel_li[prev_index].classList.remove("up");
        panel_li[prev_index].classList.add("on");
        // 위로 올린 li 안보이게 하기
        panel.querySelector(".down").classList.remove("down");

        enableClick = true;
    }, 800);
}