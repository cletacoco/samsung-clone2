// 할수있는 방식으로 해보기 (슬라이드)

const imgslides = document.querySelector('.imgslides');
const imgcard = document.querySelectorAll('.imgslides li');
let currentIdx = 0;
const imgslideCount = imgcard.length;
const nextBtn = document.querySelector('.rightbutton img');
const prevBtn = document.querySelector('.leftbutton img');
const imgslideWidth = 380;
const imgslidemargin = 24;
      

imgslides.style.width = (imgslideWidth + imgslidemargin) * imgslideCount - imgslidemargin + 'px';

function imgslideMove(num) {
    imgslides.style.left = -num * 404 + 'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){
    if(currentIdx < imgslideCount - 3) {
        imgslideMove(currentIdx + 1);
        imgslides.style.transform = `translateX(-${currentIdx * (imgslideWidth + imgslidemargin)}px)`
    }

});

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        imgslideMove(currentIdx - 1);
        imgslides.style.transform = `translateX(-${currentIdx * (imgslideWidth + imgslidemargin)}px)`
    }else{
        imgslideMove(0);
    }
})

/* 첫번째 슬라이드일때 prev 버튼이 보이지 않게 하거나 
마지막 슬라이드일때 next 버튼이 보이지 않게 설정하는법을 잘 모르겠어요 + 반응형 구현 못했습니다..*/

// 선생님이 알려주신 방법대로 해보기 + 슬라이드 적용하기

makeSubSlide('serial-card', 5,4,2);

function makeSubSlide(slideId,pcSlideCount,tabletSlideCount,mobileSlideCount) {

    const bottonnext = document.querySelector('.rightbutton2');
    const bottonprev = document.querySelector('.leftbutton2');
    const bottomslide = document.getElementById(slideId);
    const bottomslideWrapper = bottomslide.children[0];
    let ind = 0;

    let bottomCount;
    let containerWidth;
    let slideWidth;


    for(let i = 0; i < bottomslideWrapper.childElementCount; i ++){
        bottomslideWrapper.children[i].addEventListener('click', next);
    }

    checkWidth();

    window.addEventListener('resize', ()=>{
        checkWidth();
    })

    function checkWidth() {

        if(window.innerWidth > 1400){
            bottomCount = pcSlideCount ;
        }else if(window.innerWidth > 800){
            bottomCount = tabletSlideCount;
        }else {
            bottomCount = mobileSlideCount;
        }

        containerWidth = bottomslide.clientWidth;

        slideWidth = (containerWidth - (16 *(bottomCount - 1))) / bottomCount;
        for ( let i = 0; i < bottomslideWrapper.childElementCount; i ++) {
            bottomslideWrapper.children[i].style.width = `${slideWidth}px`;
        }
    }

    function next(){
        if (ind < bottomslideWrapper.childElementCount - bottomCount){
            ind ++;
        }
        bottomslideWrapper.style.transform = `translateX(-${ind * (slideWidth + 16)}px)`
        
    }

    function prev(){
        if (ind > 0){
            ind --;
        }
        bottomslideWrapper.style.transform = `translateX(-${ind * (slideWidth + 16)}px)`
    }
    
    
    bottonnext.addEventListener('click', function (){
        next();
    })
    
    bottonprev.addEventListener('click',function (){
        prev();
    })
}








