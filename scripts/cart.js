const orderList = document.querySelector('.cart_list_wrap');
const deleteBtn = document.querySelector('.cart_list_content .cart_product_name_wrap .delete_btn');
const colorImg = document.querySelector('.cart_list_content .cart_color_wrap img')
const colorBtn = document.querySelector('.cart_list_content .cart_color_wrap button');
const colorMore = document.querySelector('.cart_list_content .cart_color_wrap .cart_color_list')
const colorMoreBtn = document.querySelector('.cart_list_content .cart_color_wrap .cart_color_list button img')
const minusBtn = document.querySelector('.cart_list_content .cart_num_price_wrap .cart_num .minus');
const plusBtn = document.querySelector('.cart_list_content .cart_num_price_wrap .cart_num .plus');
const orderNum = document.querySelector('.cart_list_content .cart_num_price_wrap .cart_num input');
const orderPrice = document.querySelector('.cart_list_content .cart_num_price_wrap .price');
const sale = document.querySelector('.cart_order_container .order_wrap .sale');
const coponCode = document.querySelector('.cart_order_container .order_wrap .copon_code'); 
const coponBtn = document.querySelector('.cart_order_container .order_wrap .copon_btn');
const coponError = document.querySelector('.cart_order_container .order_wrap .copon_error');
const allPrice = document.querySelector('.cart_order_container .order_wrap .all_price');
const orderBtn = document.querySelector('.cart_all_container .cart_order_container .order_btn');

orderBtn.addEventListener('click',()=>{
    window.alert('주문이 완료되었습니다.');
    orderList.style.display = 'none';
})

const coponDB = 'aaa'
coponBtn.addEventListener('click',()=>{
    if(coponCode.value == coponDB){
        sale.textContent = '-2500'
        salePrice = 2500;
        total = (num * price) - salePrice;
        allPrice.textContent = `￦${total.toLocaleString('ko-kr')}`;
    }else {
        coponError.style.display = 'block';
    }
})

let num = 1;
let price = 49900;
let total = 0;
let salePrice = 0;
plusBtn.addEventListener('click',()=>{
    num++;
    if(num > 0 && num <= 99){
        orderNum.value = num;
        total = (num * price) - salePrice
        allPrice.textContent = `￦${total.toLocaleString('ko-kr')}`;
    }
    if(num > 99){
        window.alert('최대수량은 99개 입니다.');
    }
})
minusBtn.addEventListener('click',()=>{
    num--;
    if(num > 0 && num <= 99){
        orderNum.value = num;
        total = (num * price) - salePrice
        allPrice.textContent = `￦${total.toLocaleString('ko-kr')}`;
    }
    if(num <= 0){
        window.alert('최소 수량은 1개입니다.')
        num = 1;
    }
})
colorBtn.addEventListener('click',()=>{
    colorMore.style.display = 'flex';
    colorMoreBtn.addEventListener('click',()=>{
        colorImg.src =  colorMoreBtn.src;
        colorMore.style.display = 'none';
    })
})
deleteBtn.addEventListener('click',()=>{
    orderList.style.display = 'none';
})