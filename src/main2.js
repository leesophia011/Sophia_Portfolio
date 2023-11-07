$(window).on('scroll',function(){
    if(window.scrollY > 78){
      $('.navbar-brand').css("font-size", "32px");
      $('.header').addClass('header--dark')
    }else if(window.scrollY < 78){
      $('.navbar-brand').css("font-size", "25px");
      $('.header').removeClass('header--dark')
    }
  })

// $(window).on('scroll',function(){
//   console.log($(window).scrollTop())
// })

//Home 섹션을 아래로 스크롤시 투명하게 처리함
// const home = document.querySelector('.home__container');
// const homeHeight = home.offsetHeight;
// document.addEventListener('scroll', () => {
//   home.style.opacity = 1 - window.scrollY / homeHeight;
// });

// const home = $('.home__container');
// const homeHeight = home.height();
// $(document).scroll(function(){
//   home.css('opacity', 1 - $(window).scrollTop() / homeHeight);
// });

const home = $('.home__container');
const homeHeight = home.height();
$(window).scroll(function() {
   home.css('opacity', 1 - $(window).scrollTop() / homeHeight);
 });

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// $(document).ready(function() {
//   const arrowUp = $('.arrow-up');
//   // Calculate or provide the value for homeHeight here

//   $(window).scroll(function() {
//     if ($(window).scrollTop() > homeHeight / 2) {
//       arrowUp.css('opacity', 1);
//     } else {
//       arrowUp.css('opacity', 0);
//     }
//   });
// });





// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
// const header = document.querySelector('.header');
// const headerHeight = header.offsetHeight;
// console.log(headerHeight)
// document.addEventListener('scroll', () => {
//   if (window.scrollY > headerHeight) {
//     header.classList.add('header--dark');
//   } else {
//     header.classList.remove('header--dark');
//   }
// });