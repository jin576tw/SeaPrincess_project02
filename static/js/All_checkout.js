'use strict'

let Step01 = $('.Cart_step01');
let Step02 = $('.Checkout_step02');
let Step03 = $('.FinishCheck_step03')
let StepLine = $('.Checkout_Step_line')

let check =`<i class="fas fa-check check01"></i>`;
let bounce = `animate__bounceIn animate__animated`;

// let Step1URL = location.href.substr(-6,9) == '?step1'
// let Step2URL = location.href.substr(-6,9) == '?step2'
// let Step3URL = location.href.substr(-6,9) == '?step3'



// if(Step1URL){

//     Step01.css('display','block')
//     Step02.css('display','none')
//     Step03.css('display','none')


// }

// if(Step2URL){

//     Step01.css('display','none')
//     Step02.fadeIn(500)
//     Step03.css('display','none')


//     StepLine.css('width','50%')
//     $('.step_number01').html(check)
//     $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
//     $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')




// }


// if(Step3URL){

//     Step01.css('display','none')
//     Step02.css('display','none')
//     Step03.fadeIn(500)


//     $('.step_number01').html(check)
//     $('.step_number02').css('background-color','var(--dark_blue)').css('transition','2.5s')
//     $('.step_name02 p').css('color','var(--dark_blue)').css('transition','2.5s')

//     StepLine.css('width','100%')
//     $('.step_number02').html(check)
//     $('.step_number03').css('background-color','var(--dark_blue)').css('transition','2.5s')
//     $('.step_name03 p').css('color','var(--dark_blue)').css('transition','2.5s')


//     setTimeout(() => {
//         $('.check01').addClass(bounce)
//         $('.check02').addClass(bounce)
//         $('.check03').addClass(bounce)
    

//     },300)


// }


$('.check_logbtn').on({

click: function(){

    location.href="./Login_sign.html??Login"

}



})



// 相關商品載入
let OtherSeafoodWarp = $('.Other_Seafood_warp')
let OtherItemWarp = $('.Other_Item_warp')

$.get("./static/JSON/Seafood.json", function (data) {

let d = data;

//新隨機商品資料
let rd = []

//商品隨機產生
randomProuducts(4,d,rd)

// 依照商品時間排序
timeSort(rd)


for(let i = 0 ; i < rd.length ;i++){ 
    // 送隨機商品上去
    OtherSeafoodWarp.append(PRODUCT(rd[i]))

}




})


$.get("./static/JSON/Item.json", function (data) {

let d = data;

let rd = []

randomProuducts(4,d,rd)

// 依照商品時間排序
timeSort(rd)

for(let i = 0 ; i < rd.length ;i++){ 
    // 送隨機商品上去
    OtherItemWarp.append(PRODUCT_B(rd[i]))

}



})


