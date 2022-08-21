let curPos = 0;  // 현제 보여주는 이미지의 인덱스 번호
let positoinValue = 0;  // 이미지 태그의 위치 값 지정할 변수
const IMAGE_WIDTH = 640;

const prevBtn = document.querySelector(".prev");  //리턴되는 값은 인자를 받아 일치하는 baseElement의 자손의 엘리먼트를 갖고 옵니다.
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

function next(){
    if(curPos > 0){
        prevBtn.removeAttribute('disabled')
        positoinValue += IMAGE_WIDTH;
        images.style.transform = `translateX(${positionValue}px)`;
        curPos -= 1;
    }
}

if(curPos === 0){
    nextBtn.setAttribute('disabled', 'true');
}

function init(){
    prevBtn.setAttribute('disabled', 'true');  // .setAttribute()는 선택한 요소(element)의 속성(attribute) 값을 정합니다
    prevBtn.addEventListener("click", prev);
    nextBtn.addEventListener("click", next);
}

init();