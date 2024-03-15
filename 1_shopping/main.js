//find() ->css에서 (.aa .bb) 띄워쓰기와 비슷 
//function 뒤에 ()
$('.gnb>ul>li').hover(
    function () { //마우스를 올렸을 때 할 일 
        $(this)
        //    console.log($(this))
        $(this).find('.submenu').stop().slideDown();
    },
    function () { //마우스가 떠나면 할 일
        $(this).find('.submenu').stop().slideUp();
    }
)


//탭메뉴
//.parent() 부모요소
//.removeClass("class명") --> class 이름 지우기
// $('.btn li').click() --> 클래스명 btn의 자손중 li태그를 클릭하면 어떤 일이 일어난다.
//"어떤 일"은 함수 -->function(){}
// function(){
//     실행문(어떤 일)
// }
// $(this) --> 사용자가 클릭한 li
// .index() --> 태어날 때 부터 가지고 있는 번호를 추출(index 번호)

$('.btn li').click(function () {
        $('.btn li').removeClass('active');
        $(this).addClass('active')
    
//    console.log($(this).index())


// let index = 3; //" = "은 같다는 의미가 아님, 우항을 좌항에 대입하라//
//let --> 변수를 선언하는 방법 (index라는 변수가 생겼다)

// console.log(index + 4)//7
// index = index +10
// console.log(index = index +3)

 let index = $(this).index()
 console.log(index)


// .hide() --> display:none
// .show() --> display:block
// .eq(index번호)
 $('.bwrap>div').hide(); 
 $('.bwrap>div').eq(index).show(); 



})
