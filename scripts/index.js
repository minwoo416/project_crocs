/* -----------스와이퍼 모음----------- */
/* 신제품 스와이퍼 */
const newCrocs = new Swiper('.new_container .new_product_crocs',{
    navigation: {
        nextEl: ".new_container .new_crocs_wrap .swiper-button-next",
        prevEl: ".new_container .new_crocs_wrap .swiper-button-prev",
    },
    scrollbar: {
        el: ".new_container .new_crocs_wrap .swiper-scrollbar",
        hide: false,
    },
    slidesPerView:3,
    spaceBetween:30,
    breakpoints:{
        1249:{
            slidesPerView:5,
        },
    }
})
window.addEventListener('resize', () => {
    if(newCrocs) newCrocs.update();
});
const newJibbitz = new Swiper('.new_container .new_product_jibbitz',{
    navigation: {
        nextEl: ".new_container .new_jibbitz_wrap .swiper-button-next",
        prevEl: ".new_container .new_jibbitz_wrap .swiper-button-prev",
    },
    scrollbar: {
        el: ".new_container .new_jibbitz_wrap .swiper-scrollbar",
        hide: true,
        hide: false,
    },
    slidesPerView:3,
    spaceBetween:30,
    breakpoints:{
        1249:{
            slidesPerView:5,
        },
    }
})
window.addEventListener('resize', () => {
    if(newJibbitz) newJibbitz.update();
});
const newAcc = new Swiper('.new_container .new_product_acc',{
    navigation: {
        nextEl: ".new_container .new_acc_wrap .swiper-button-next",
        prevEl: ".new_container .new_acc_wrap .swiper-button-prev",
    },
    scrollbar: {
        el: ".new_container .new_acc_wrap .swiper-scrollbar",
        hide: true,
        hide: false,
    },
    slidesPerView:3,
    spaceBetween:30,
    breakpoints:{
        1249:{
            slidesPerView:5,
        },
    }
})
window.addEventListener('resize', () => {
    if(newAcc) newAcc.update();
});
/* 특가세일 스와이퍼 */
const saleWrap = new Swiper('.sale_container .sale_product',{
    navigation: {
        nextEl: ".sale_container .swiper-button-next",
        prevEl: ".sale_container .swiper-button-prev",
    },
    scrollbar: {
        el: ".sale_container .swiper-scrollbar",
        hide: true,
        hide: false,
    },
})
/* 트렌딩 스와이퍼 */
const trendingWrap = new Swiper('.trending_container .trending_swiper',{
    slidesPerView:6,
    spaceBetween:20,
    navigation: {
        nextEl: ".trending_container .swiper-button-next",
        prevEl: ".trending_container .swiper-button-prev",
    },
})
/* 헤더 변수 */
const tabletMenu = document.querySelector('header .header_container .header_top .more_menu');
const tabletMenuHidden = document.querySelector('header .header_container .header_top .hidden_menu_tablet');
const tabletMenuLi = document.querySelectorAll('header .header_container .header_top .hidden_menu_tablet > ul > li');
const tabletDepth2 = document.querySelectorAll('header .header_container .header_top .hidden_menu_tablet > ul > li .depth2');
const tabletMenuBtn = document.querySelector('header .header_container .header_top .hidden_menu_tablet > button');
console.log(tabletMenu,tabletMenuHidden,tabletMenuLi,tabletMenuBtn,tabletDepth2)
/* 1행 배너 변수 */
const headerBanner = document.querySelector('header .long_banner');
const headerBannerBtn = document.querySelector('header .long_banner button');
const headerGnb = document.querySelectorAll('header .header_bottom .gnb_menu_wrap > .depth1');
/* 2행 신제품 변수 */
const newSwiper = document.querySelectorAll('.new_container .new_all_wrap');
const newCateBtn = document.querySelectorAll('.new_container .category button');
const swiperInstances = [newCrocs, newJibbitz, newAcc];
const newChangeCrocs = document.querySelectorAll('.new_container .new_all_wrap .new_product_crocs .new_photo > a img');
const newChangeAcc = document.querySelectorAll('.new_container .new_all_wrap .new_product_acc .new_photo > a img');
/* 4행 특가세일 변수 */
const saleCate = document.querySelectorAll('.sale_container .category button');
const saleChange = document.querySelectorAll('.sale_container .sale_product .swiper-slide .sale_photo > a img');
console.log(saleChange)


/* 4행 카테고리클릯 ㅣ이동, 좌우로 드래그시 카테고리 변경 */
function update(index){
    saleCate.forEach((obj,idx)=>{
        obj.classList.toggle('active', idx === index);
    })
}
saleWrap.on('slideChange',()=>{
    update(saleWrap.activeIndex);
})
saleCate.forEach((btn,idx)=>{
    btn.addEventListener('click',()=>{
        saleWrap.slideTo(idx);
        update(saleWrap.activeIndex)
    })
})
/* 4행 이미지에 마우스 올릴때 이미지 변경 */
for(let i = 0; i < saleChange.length; i++){
    let img = saleChange[i];
    let orignal = img.src;
    img.addEventListener('mouseover',()=>{
        img.src = orignal.replace('main_sale_clog','main_sale_clog_on');
    })
    img.addEventListener('mouseout',()=>{
        img.src = orignal;
    })
}


/* 2행 카테고리 클릭시 변경되기 */
/* 초기 크록스 카테 보이기 */
newCateBtn.forEach((obj,index)=>{
    obj.addEventListener('click',()=>{
        newCateBtn.forEach((btn)=>{
            btn.classList.remove('active')
        })
        newSwiper.forEach((product,idx)=>{
            if(idx == index){
                newSwiper.forEach((e)=>{
                    e.style.display = 'none';
                })
                product.style.display = 'flex';
            }
        })
        swiperInstances[index].slideTo(0);
        swiperInstances[index].update();
        obj.classList.add('active');
    })
})
/* 2행 이미지에 마우스 올릴때 이미지 변경 */
for(let i = 0; i < newChangeCrocs.length; i++){
    let img = newChangeCrocs[i];
    let orignal = img.src;
    img.addEventListener('mouseover',()=>{
        img.src = orignal.replace('main_new','main_new_on')
    })
    img.addEventListener('mouseout',()=>{
        img.src = orignal;
    })
}
for(let i = 0; i < newChangeAcc.length; i++){
    let img = newChangeAcc[i];
    let orignal = img.src;
    img.addEventListener('mouseover',()=>{
        img.src = orignal.replace('main_acc','main_acc_on')
    })
    img.addEventListener('mouseout',()=>{
        img.src = orignal;
    })
}
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
