const searchEl = document.querySelector('.search');
// document는 HTML이라고 보면 됨
const searchInputEl = searchEl.querySelector('input');
// 돋보기 클릭하면 포커스
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
                        // html 속성의 이름, 속성의 값
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
                        // html 속성의 이름, 속성의 값
});

   // 현재 날짜 삽입
   const thisYear = document.querySelector('.this-year');
   thisYear.textContent = new Date().getFullYear(); //2021