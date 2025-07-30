/* 신제품 스와이퍼 */
const newCrocs = new Swiper('.new_container .new_product_crocs',{
    navigation: {
        nextEl: ".new_container .swiper-button-next",
        prevEl: ".new_container .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        hide: false,
    },
    slidesPerView:"5",
    spaceBetween:30,
})
const newJibbitz = new Swiper('.new_container .new_product_jibbitz',{
    navigation: {
        nextEl: ".new_container .swiper-button-next",
        prevEl: ".new_container .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
        hide: false,
    },
    slidesPerView:5,
    spaceBetween:30,
})
const newAcc = new Swiper('.new_container .new_product_acc',{
    navigation: {
        nextEl: ".new_container .swiper-button-next",
        prevEl: ".new_container .swiper-button-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
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