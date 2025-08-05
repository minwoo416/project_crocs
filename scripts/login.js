/* 헤더변수 */
const tabletMenu = document.querySelector('header .header_container .header_top .more_menu');
const mobileMenu = document.querySelector('header .header_container .header_top .more_menu2');
const mobileMenuHidden = document.querySelector('header .header_container .header_top .hidden_menu');
const mobileBtn = document.querySelector('header .header_container .header_top .hidden_menu .menu_close_btn')
const tabletMenuHidden = document.querySelector('header .header_container .header_top .hidden_menu_tablet');
const tabletMenuLi = document.querySelectorAll('header .header_container .header_top .hidden_menu_tablet > ul > li');
const tabletDepth2 = document.querySelectorAll('header .header_container .header_top .hidden_menu_tablet > ul > li .depth2');
const tabletMenuBtn = document.querySelector('header .header_container .header_top .hidden_menu_tablet > button');
/* 1행 배너 변수 */
const headerBanner = document.querySelector('header .long_banner');
const headerBannerBtn = document.querySelector('header .long_banner button');
const headerGnb = document.querySelectorAll('header .header_bottom .gnb_menu_wrap > .depth1');
/* 서브 - 로그인페이지 변수 */
const loginId = document.querySelector('.login_container .login_wrap .id');
const loginPw = document.querySelector('.login_container .login_wrap .pw');
const loginBtn = document.querySelector('.login_container .login_wrap .login_btn_wrap .login_btn');
const loginError = document.querySelector('.login_container .login_wrap .error');
const loginAuto = document.querySelector('.login_container .login_wrap .auto_login img');

const userDb = [{
    id:'aaa',
    pw:'aaa',
}]
/* 로그인 오류메세지 출력 */
loginBtn.addEventListener('click',()=>{
    if(loginId.value == '' && loginPw.value == ''){
        loginError.textContent = '아이디와 비밀번호를 입력해주세요';
    }else if(loginPw.value == ''){
        loginError.textContent = '비밀번호를 입력해주세요';
    }else if(loginId.value == ''){
        loginError.textContent = '아이디를 입력해주세요';
    }else if(loginId.value == userDb[0].id && loginPw.value == userDb[0].pw){
        window.location.href= './index.html'
    }else {
        loginError.textContent = '아이디 혹은 비밀번호를 잘못 입력하셨습니다.';
    }
})


/* 자동로그인 토글 */
loginAuto.addEventListener('click',()=>{
    if(loginAuto.src.includes('login_off.png')){
        loginAuto.src = './images/login_on.png'
    }else {
        loginAuto.src = './images/login_off.png'
    }
    
})

/* 배너 닫기버튼 */
headerBannerBtn.addEventListener('click',()=>{
    headerBanner.style.display = 'none';
})
headerGnb.forEach((obj)=>{
    const depth2 = obj.querySelector('.depth2');
    obj.addEventListener('mouseover',()=>{
        depth2.style.display = 'flex';
        obj.style.borderBottom = '1px solid #000';
    })
    obj.addEventListener('mouseout',()=>{
        depth2.style.display = 'none';
        obj.style.borderBottom = 'none';
    })
})
/* 헤더 모바일 */
mobileMenu.addEventListener('click',()=>{
    mobileMenuHidden.style.display = 'flex';
    mobileBtn.addEventListener('click',()=>{
        mobileMenuHidden.style.display = 'none';
    })
window.addEventListener('resize',()=>{
    const windowWidth = window.innerWidth;
    if(windowWidth > 849){
        mobileMenuHidden.style.display = 'none';
    }
})
})
/* 헤더 태블릿 */
tabletMenu.addEventListener('click',()=>{
    tabletMenuHidden.style.display = 'flex';
})
tabletMenuBtn.addEventListener('click',()=>{
    tabletMenuHidden.style.display = 'none';
})
tabletMenuLi.forEach((li,index)=>{
    li.addEventListener('mouseover',()=>{
        tabletDepth2.forEach((depth2,idx)=>{
            if(idx === index){
                depth2.style.display = 'flex';
            }
        })
    })
    li.addEventListener('mouseout',()=>{
        tabletDepth2.forEach((depth2,idx)=>{
            depth2.style.display = 'none';
        })
    })
})
window.addEventListener('resize',()=>{
    const windowWidth = window.innerWidth;
    if(windowWidth > 1249){
        tabletMenuHidden.style.display = 'none';
    }
})