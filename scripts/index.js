/* -----------스와이퍼 모음----------- */
/* 신제품 스와이퍼 */
const newCrocs = new Swiper('.new_container .new_product_crocs',{
    navigation: {
        nextEl: ".new_container .new_crocs_wrap .swiper-button-next",
        prevEl: ".new_container .new_crocs_wrap .swiper-button-prev",
    },
    scrollbar: {
        el: ".new_container .new_crocs_wrap .swiper-scrollbar",
        hide: true,
        hide: false,
    },
    slidesPerView:5,
    spaceBetween:30,
})
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
    slidesPerView:5,
    spaceBetween:30,
})
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
    slidesPerView:5,
    spaceBetween:30,
})
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
    slidesPerView:4,
    spaceBetween:30,
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

/* 1행 배너 변수 */
const headerBanner = document.querySelector('header .long_banner');
const headerBannerBtn = document.querySelector('header .long_banner button');
const headerGnb = document.querySelectorAll('header .header_bottom .gnb_menu_wrap > .depth1');
/* 2행 신제품 변수 */
const newSwiper = document.querySelectorAll('.new_container .new_all_wrap');
const newCateBtn = document.querySelectorAll('.new_container .category button');
const swiperInstances = [newCrocs, newJibbitz, newAcc];
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
