$(document).ready(function () {

 /* ///////導覽列////////// */
let ListCount = $('.navbar_shoplist_count');//購物車數量
let ListCount_RWD =  $('.shoplist_count_RWD');//購物車數量RWD

let CartTotal = $('.Cart_list_total')//購物車總金額
let CartTotalPrice = $('.Cart_list_total').children('p')//購物車總金額數字

let ListEmptyStatus = $('.list_item_empty')//空購物車狀態


let SEAFOOD_LIST =  $('.seafood_list_warp')//生鮮食品購物車
let ITEM_LIST =  $('.item_list_warp')//釣具購物車
let FISHBOX_LIST = $('.fishbox_list_warp')//海鮮魚箱


// let SEAFOOD_Cart = $('.seafood_list')//生鮮食品欄位
// let ITEM_Cart = $('.item_list')//釣具欄位
// let FISHBOX_Cart = $('.fishbox_list')//海鮮魚箱欄位


let CheckBtn = $('.checkout_btn')//結帳按鈕


// 判斷商品欄位是否出現
function cookiefilter(arr){


    let fishbox =  arr.filter ((p) => p.fishbox == true)
    let seafood =  arr.filter ((p) => p.food == true)
    let item=  arr.filter ((p) => p.food == false)


    // 若生鮮食品為空
    if(seafood.length == 0 ){

        $('.seafood_list').css('display','none');
    }else{

        $('.seafood_list').css('display','block');

    }

    // 若釣具用品為空
    if(item.length == 0  ){

        $('.item_list').css('display','none');
    }else{

        $('.item_list').css('display','block');

    }


    //若海鮮魚箱為空
    if(fishbox.length == 0 ){

        $('.fishbox_list').css('display','none');
    }else{

        $('.fishbox_list').css('display','block');

    }



}


//////navbar購物車功能////

if($.cookie("Cart") == null){

    //cookie若無資料，顯是購物車為空
    ListCount.css('display','none')
    ListCount_RWD.css('display','none')
    CartTotal.css('display','none')
    ListEmptyStatus.css('display','flex')

    // 購物車無商品無法結帳
    CheckBtn.attr('disabled', true).css('background-color','var(--grey)')


    // 商品欄位狀態
    $('.seafood_list').css('display','none');
    $('.fishbox_list').css('display','none');
    $('.item_list').css('display','none');
   


}else{


    //一開始載入的購物車資料
    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);
    let sum = 0;


    for(let i = 0 ; i < cookieArr.length;i++){
        sum += cookieArr[i].count;
    }

    
    ListEmptyStatus.css('display','none');//商品空狀態
    CartTotal.css('display','block');//商品總金額

    ListCount.text(sum)//購物車數量
    ListCount_RWD.text(sum)//RWD購物車數量


   
    // 顯示購物車狀態
    cookiefilter(cookieArr)

 
    



    //購物車按鈕啟動
    CheckBtn.attr('disabled', false).css('background-color','var(--dark_blue)')
    CheckBtn.on({

        click: function(){

        
            location.href = "./checkout.html"

        }
    
    })

    
        
    
// 載入cookie中的商品
if(cookieStr){

    let total_price = 0
    
    for(let i = 0 ; i < cookieArr.length ; i++){

    
        // 計算當前商品金額
        let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);
        total_price += nowprice;


        // 載入購物車商品
        CartProduct(cookieArr[i],total_price)




    }



        //購物車總金額
        CartTotalPrice.text(total_price)

    }


}


//商品加入navbar購物車
PROPUCTSWARP.on("click",".add_btn",function(){

    ListCount.css('display','flex').removeClass('Bounce');
    ListCount_RWD.css('display','flex').removeClass('Bounce');


    alert('商品已加入購物車！')
    // 結帳加入購物車
    let CheckOut_Page = location.href.substr(-13,13) == 'checkout.html'

    if(CheckOut_Page){

        $('body,html').animate({
            scrollTop: 0
        }, 1 ,'swing');

        $('.cart_checkout_btn').attr('disabled', false).css('background-color','#5aa700')
       
        $('.Cart_items_empty').css('display','none')

        $('.Seafood_items_warp').empty()
        $('.fishbox_items_warp').empty()
        $('.tool_items_warp').empty()

        ListCount.css('display','flex').addClass('Bounce');
        ListCount_RWD.css('display','flex').addClass('Bounce');

        let cookieStr = $.cookie('Cart');
        let cookieArr = JSON.parse(cookieStr);

        if(cookieStr){

            let total_price = 0

            for(let i = 0 ; i < cookieArr.length ;i++){ 


                // 計算當前商品金額
                let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);
                total_price += nowprice;

                // 載入購物車商品
                CheckProduct(cookieArr[i])



            }

            // 購物車總金額
            CartTotalPrice.text(total_price)

            $('.total_sum p:nth-of-type(2)').text(total_price)
        
            // 點數計算
            let getpoint = total_price * 0.1

            //優惠點數
            $('.total_point p:nth-of-type(2)').text(getpoint)
           
            // 合計金額
            $('.total_money p:nth-of-type(2)').text(total_price)
        }
    }

    
    
    // navbar加入購物車
    ListEmptyStatus.css('display','none');
    
    SEAFOOD_LIST.empty();//清空新加入商品
    ITEM_LIST.empty();//清空新加入商品
    FISHBOX_LIST.empty()//清空新加入新魚箱

    // 啟動結帳按鈕
    CheckBtn.attr('disabled', false).css('background-color','var(--dark_blue)')
    CheckBtn.on({

        click: function(){
    
            location.href = "./checkout.html"
    
        }
    
    })

    ListCount.css('display','flex').addClass('Bounce');
    ListCount_RWD.css('display','flex').addClass('Bounce');

    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);

    if(cookieStr){

        let total_price = 0

        for(let i = 0 ; i < cookieArr.length ;i++){ 

    
            // 計算當前商品金額
            let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price);
            total_price += nowprice;

            

            // 載入購物車商品
            CartProduct(cookieArr[i])
                
            

        }

            // 購物車總金額
            CartTotalPrice.text(total_price)

        

    }
 

})


// 選擇釣具型號
$('select[name="All_Item_type"]').change(function(){

    let selected =$(this).children('option:selected').val()

    let cookieStr = $.cookie('Cart');
    let cookieArr = JSON.parse(cookieStr);
    

    console.log(selected);

})


//刪除項目
///append架構無法使用功能，須根據append父層下指令
$(".product_list").on("click",".item_delete",function(){

// 節點刪除
let navProuduct = $(this).parent().parent().parent()
let navProuductID = parseInt(navProuduct.attr('Product-ID'))


let isfood = navProuduct.attr('food')

let isfishbox = navProuduct.attr('fishbox')


navProuduct.remove()//視覺刪除
alert('商品已刪除')



let cookieStr = $.cookie('Cart');
let cookieArr = JSON.parse(cookieStr);



    for(let i = 0 ; i <  cookieArr.length ;i++){

        function deleteCart(arr){

            let sum = parseInt($('.navbar_shoplist_count').text())//抓購物車現在數量

            let sum_RWD = parseInt($('.shoplist_count_RWD').text())//抓購物車RWD現在數量


            let oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())


            let nowsum = sum - parseInt(arr[i].count) //購物車現在數量減去刪除數量
            $('.navbar_shoplist_count').text(nowsum)//刪除後數量

            let nowsumRWD = sum_RWD - parseInt(arr[i].count) //RWD購物車現在數量減去刪除數量
            $('.navbar_shoplist_count').text(nowsumRWD)//RWD刪除後數量
            

            let delete_price = parseInt(arr[i].count) *  parseInt(arr[i].Product_Price)

            let newtototal_price = oldtotal_price - delete_price;


            $('.Cart_list_total').children('p').text(newtototal_price)//刪除後總金額
            

            arr.splice(i,1);//刪除

        

            if( nowsum <= 0 ||  nowsumRWD <= 0){ //刪除後數量小於0，計數器消失
                $('.navbar_shoplist_count').css('display','none');
                $('.shoplist_count_RWD').css('display','none');

            }else{

                $('.navbar_shoplist_count').text(nowsum)
                $('.shoplist_count_RWD').text(nowsumRWD)

            }

        }

    if(isfood == 'true'){

        if( navProuductID == cookieArr[i].pid && cookieArr[i].food){

        
            deleteCart(cookieArr)

        }
    
    
    }else if(isfood == 'false'){


        if( navProuductID == cookieArr[i].pid && cookieArr[i].food == false){

            
            deleteCart(cookieArr)

        }


    }else if(isfishbox == 'true'){

        if( navProuductID == cookieArr[i].pid && cookieArr[i].fishbox){
            
            deleteCart(cookieArr)

        }



    }


}


//判斷數組為空
if( cookieArr.length == 0){

    $.removeCookie('Cart');

    $(".list_item_empty").css('display','flex')//顯示目前沒有商品提示
    
    $('.Cart_list_total').css('display','none')
    $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')

}else{
    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
    
   
}

cookiefilter(cookieArr)

});

//計算器
//加＋＋
$(".product_list").on("click",".countBtn_plus ",function(){

//當前所在的ID
let navProuduct = $(this).parent().parent().parent().parent();
let navProuductID = parseInt(navProuduct.attr('Product-ID'))


let cookieStr = $.cookie('Cart');
let cookieArr = JSON.parse(cookieStr);


for(let i = 0 ; i <  cookieArr.length ;i++){
    

    if(cookieArr[i].pid == navProuductID){

        let oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())//未變化前總金額

        let old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額

        let raw_price = oldtotal_price - old_price // 除了變化的商品金額以外的總金額

        let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Product_Left)
        //判斷商品是否超過庫存


        if(Item_over){
            alert('數量超過庫存')
            $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            break;

        }else{

            cookieArr[i].count++;//計算器數量++

            let sum = parseInt($('.navbar_shoplist_count').text()) //抓navbar現在數量

            let sum_RWD = parseInt($('.shoplist_count_RWD').text()) //抓navbar RWD現在數量

        
            sum++ ; //navbar數量＋＋

            sum_RWD++ //navbarRWD數量＋＋

            $(this).prev().text(cookieArr[i].count)//更新計算器數量
        
            $('.navbar_shoplist_count').text(sum)//更新navbar數量
            $('.shoplist_count_RWD').text(sum_RWD++)//更新navbar數量

            
        

            let newprice = cookieArr[i].Product_Price
            * cookieArr[i].count; //新商品金額


            let newtototal_price = raw_price + newprice; //新商品總金額
        
            $(this).parent().next().children('h4').text(newprice);

            $('.Cart_list_total').children('p').text(newtototal_price);
        

            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


        }

        
        break;


    }




}


})



//減--
$(".product_list").on("click",".countBtn_minus ",function(){

//當前所在的ID
let navProuduct = $(this).parent().parent().parent().parent()
let navProuductID = navProuduct.attr('Product-ID')



let cookieStr = $.cookie('Cart');
let cookieArr = JSON.parse(cookieStr);


for(let i = 0 ; i <  cookieArr.length ;i++){

    
    if(parseInt(cookieArr[i].pid) == parseInt(navProuductID)){


        let $oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())//未變化前總金額

        $old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Product_Price)////未變化前商品金額

        $raw_price = $oldtotal_price - $old_price// 除了變化的商品金額以外的總金額

        cookieArr[i].count--;

        let sum = parseInt($('.navbar_shoplist_count').text())
        sum-- ;

        let sum_RWD = parseInt($('.shoplist_count_RWD').text())
        sum_RWD-- ;

        $(this).next().text(cookieArr[i].count)//現在商品數量

        $('.navbar_shoplist_count').text(sum)
        $('.shoplist_count_RWD').text(sum_RWD)


        //計算器數量效果變化
        let still_left = parseInt(cookieArr[i].Product_Left) >  parseInt(cookieArr[i].count)

        if(still_left){

            let countBtn_plus = $(this).next().next()
            $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')

        }
        else{

            let countBtn_plus = $(this).next().next()
            $(countBtn_plus).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')

        }

        if(cookieArr[i].count <= 0){
            navProuduct.remove()
            alert('已刪除商品')
            let delete_price = $oldtotal_price - cookieArr[i].Product_Price
            
            $('.Cart_list_total').children('p').text(delete_price)

            cookieArr.splice(i,1);//刪除指定資料

            // 顯示購物車內狀態
            cookiefilter(cookieArr)

            if(sum == 0 || sum_RWD == 0){

                $.removeCookie('Cart');
                $(".list_item_empty").css('display','flex')//顯示目前沒有商品提示

                $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')

                $('.shoplist_count_RWD').css('display','none')
                $('.navbar_shoplist_count').css('display','none')
                $('.Cart_list_total').css('display','none')
                break;

            }else{
                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                break;
            }
            
            
            
            

        }else{
            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

        }


        $newprice = cookieArr[i].Product_Price * cookieArr[i].count//新商品金額

        $newtototal_price = $raw_price + $newprice;//新商品總金額


        $(this).parent().next().children('h4').text($newprice)
        
        $('.Cart_list_total').children('p').text($newtototal_price);
        
        break;

    }

}

})





//計算器效果
$(".product_list").on("mousedown mouseup",".countBtn_plus , .countBtn_minus",function(){

$(this).toggleClass('countBtn_color').css('transition','0.3s')

})

         


   
         /////購物車按鈕效果////



         // 平板版
        if ($(window).width() >= 768) {
   
            $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
    
    
            $('.shoplist_RWD').click(function(){

                let Location =  location.href
               
                let Cart_Page = Location.substr(-9,9) == 'cart.html'
                let Checkout_Page = Location.substr(-13,13) == 'checkout.html'

                // 結帳頁只會重新整理
                if(Cart_Page || Checkout_Page){

                    location.reload()


                }else{
                    $('.Cart_list').fadeIn(100);
                    $('.Cart_list_bar').css('transform','translateX(0px)').css('transition','0.5s')
                    $('.navbar_RWD_items').removeClass('RWD_open')
                }
    
                
                

            })
    
            $('.cancle_btn').click(function(){
                
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
                
    
            })
            $('.Cart_bg').click(function(){
            
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
            
                
    
            })
    

    
        }

    

        //手機版
        if ($(window).width() < 768) {
                    
            $('.shoplist_RWD').click(function(){
                
                let Location =  location.href

                let Cart_Page = Location.substr(-9,9) == 'cart.html'
                let Checkout_Page= Location.substr(-13,13) == 'checkout.html'

                // 結帳頁只會重新整理
                if(Cart_Page || Checkout_Page){

                    location.reload()


                }else{
                    $('.Cart_list').toggleClass('RWD_open_shoplist')

                    $('.navbar_RWD_items').removeClass('RWD_open')
                    
                }

            })


            $('.Cart_bg').click(function(){
                $('.Cart_list').removeClass('RWD_open_shoplist')

            })
        }

        
         // 網頁版
         if ($(window).width() > 1024) {
   
            $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
    
    
            $('.navbar_icon_shoplist').click(function(){
                let Location =  location.href
               
                let Cart_Page = Location.substr(-9,9) == 'cart.html'
                let Checkout_Page = Location.substr(-13,13) == 'checkout.html'

                // 結帳頁只會重新整理
                if(Cart_Page || Checkout_Page){

                    location.reload()


                }else{
                    $('.Cart_list').fadeIn(100);
                    $('.Cart_list_bar').css('transform','translateX(0px)').css('transition','0.5s')
                }
    
                
                

            })
    
            $('.cancle_btn').click(function(){
                
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
                
    
            })
            $('.Cart_bg').click(function(){
            
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
            
                
    
            })
    

    
        }

    
    

         
        

        
      
       
        // navbar視覺
        //手機版
        $('.navbar_RWD_icon').click(function(){
            
            $('.navbar_RWD_items').toggleClass('RWD_open');
            $('.Cart_list').removeClass('RWD_open_shoplist')
    
        });

        $('.navbar_RWD_bg').click(function(){
            
            $('.navbar_RWD_items').removeClass('RWD_open')
          
        });
    
    
        $(window).scroll(function () {
    
        let scrollNow = $(window).scrollTop();
        // console.log('scrollTop', scrollNow);
    
    
        // if ($(window).width() <  1024){
    
        //     if (scrollNow >= 763){
    
        //         $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
        //     }else{
        //         $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0)').css('transition','0.1s')
    
                
    
        //     }
    
        // }
    
        // 網頁版 
        if ($(window).width() > 1024) {
    
       
            if (scrollNow >= 425){
    
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
            }else{
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0)').css('transition','0.1s')
    
                
    
            }

            // 其他分頁navbar
            if (scrollNow >= 304){
    
                $('.navbar_Logo').css('width','80px').css('transition','0.3s')
                $('.Navbar').css('background-color','rgba(255, 255, 255,0.8)').css('transition','0.3s')
            }else{
                $('.navbar_Logo').css('width','140px').css('transition','0.1s')
                $('.Navbar').css('background-color','rgba(255, 255, 255,1)').css('transition','0.3s')
                
    
            }

            // 首頁navbar效果
            let Location  =  location.href
            if( Location.substr(-10,10) == 'index.html'){
                if (scrollNow >= 854){
    
                    $('.navbar_Logo').css('width','80px').css('transition','0.3s')
                    $('.Navbar').css('background-color','rgba(255, 255, 255,0.8)').css('transition','0.3s')
                }else{
                    $('.navbar_Logo').css('width','140px').css('transition','0.1s')
                    $('.Navbar').css('background-color','rgba(255, 255, 255,1)').css('transition','0.3s')
                    
        
                }
            }

          
            
        }
    
        })
    
       
    
        // navbar會員登入

       $('.member_icon').on({

                click: function(){
                    
                        location.href = "./Login_sign.html"

            
                }


       })

       $('.icon_member_RWD').on({

                click: function(){
                    

                    if ($(window).width() >768) {
                        
                        location.href = "./member.html"

                    }else{

                        location.href = "./member.html"

                    }

            
                }


       })

       $('.navbar_icon_member , .navbar_member_list_warp ,.member_icon').on({

            mouseenter: function () {
               $('.navbar_member_list_warp').fadeIn(100)
            

            },

            mouseleave: function () {
                $('.navbar_member_list_warp').fadeOut(100)

                
            }

           

       })


    //    navbar選單

       $('.navbar_items li:nth-of-type(2), .prouduct_list_warp').on({

        mouseenter: function () {
           $(this).children('.navbar_list_warp').fadeIn(100);
           $(this).children('a').children('.navDown').css('transform','rotate(180deg)').css('transition','0.3s');
        
           

        },

        mouseleave: function () {
            $(this).children('.navbar_list_warp').fadeOut(100)
            $(this).children('a').children('.navDown').css('transform','rotate(0deg)').css('transition','0.3s');

            
        }


        })

       $('.navbar_items li:nth-of-type(4), .blog_list_warp').on({

        mouseenter: function () {
            $(this).children('.navbar_list_warp').fadeIn(100);
            $(this).children('a').children('.navDown').css('transform','rotate(180deg)').css('transition','0.3s');
        },

        mouseleave: function () {
            $(this).children('.navbar_list_warp').fadeOut(100)
            $(this).children('a').children('.navDown').css('transform','rotate(0deg)').css('transition','0.3s');

            
        }

       

        })


    
        if ($(window).width() < 1024) {

            $('.RWD_items li:nth-of-type(2)').on({

                click: function () {
    
                 $(this).toggleClass('RWD_listopen01');

                 $(this).children('.fa-angle-down').toggleClass('RWD_navUp');
                
                 
                 }
                
         
             })

            $('.RWD_items li:nth-of-type(4').on({

                click: function () {
    
                 $(this).toggleClass('RWD_listopen02');
                 $(this).children('.fa-angle-down').toggleClass('RWD_navUp');
                
                 
                 }
                
         
             })


        }


   
        
})