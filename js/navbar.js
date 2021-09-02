$(document).ready(function () {

 /* ///////導覽列////////// */

    //////navbar購物車功能////
        if($.cookie("Cart") == null){

            //cookie若無資料，顯是購物車為空
            $('.navbar_shoplist_count').css('display','none')
            $('.shoplist_count_RWD').css('display','none')
            $('.Cart_list_total').css('display','none')
            $('.list_item_empty').css('display','flex')

            // 購物車無商品無法結帳
            $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')
           


        
        }else{

            $('.list_item_empty').css('display','none');
            $('.Cart_list_total').css('display','block');


            //購物車按鈕
            $('.checkout_btn').attr('disabled', false).css('background-color','var(--dark_blue)')
            $('.checkout_btn').on({

                click: function(){
            
                
                    location.href = "../html/checkout.html?step1"
            
                }
            
            })

           
                
            //一開始載入的購物車資料
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            let sum = 0;


            for(let i = 0 ; i < cookieArr.length;i++){
                sum += cookieArr[i].count;
            }

            $('.navbar_shoplist_count').text(sum)//購物車數量
            $('.shoplist_count_RWD').text(sum)//RWD購物車數量
            

            // 載入cookie中的商品
            if(cookieStr){
                $total_price = 0

                for(let i = 0 ; i < cookieArr.length ; i++){

                        let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);

                        let Cart_list_item = `
                        <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}" Item-left="${cookieArr[i].Item_left}">
                            <div class="list_item_pic">
                                <img src="${cookieArr[i].Item_pic}" alt="">
                            </div>
                
                            <div class="list_item_intro">
                                <div class="list_item_title">
                                    <h1>${cookieArr[i].Item_title}</h1>
                                </div>
                
                
                                <div class="list_intro_count d-flex">
                    
                                    <div class="list_countBtn_warp d-flex">

                                        <div class="countBtn countBtn_minus">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                        <div class="list_count">${cookieArr[i].count}</div>
                                        <div class="countBtn countBtn_add">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>

                                    <div class="list_intro_price">
                                        <p>${nowprice}</p>
                                    </div>

                                    <div class="item_delete">
                                        <i class="far fa-trash-alt "></i>
                                    </div>
                                </div>
                                
                            </div>
                        </div> `;
    
    
                        
                        $('.list_item_warps').append(Cart_list_item);
                        $total_price += nowprice
                }


                $('.Cart_list_total').children('p').text($total_price)

            }

        
        }


        //加入購物車
        PROPUCTSWARP.on("click",".add_btn",function(){

        
                let Location =  location.href

                let Cart_Page = Location.substr(-9,9) == 'cart.html'
            

                // 結帳購物車頁面時
                if(Cart_Page){

                    $('.cart_items_warps').empty();

                    let cookieStr = $.cookie('Cart');
                    let cookieArr = JSON.parse(cookieStr);

                    $total_price = 0

                    for(let i = 0 ; i < cookieArr.length;i++){

                       

                        let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);
            
            
                        let cart_item = `
            
                        <div class="cart_items" Item-ID= "${cookieArr[i].pid}" Item-left="${cookieArr[i].Item_left}">
            
                            <div class="cart_item_title">
            
                                <div class="cart_item_pic">
                                    <img src="${cookieArr[i].Item_pic}" alt="">
                                </div>
                                <div class="cart_item_name">
                                    <h1>${cookieArr[i].Item_title}</h1>
                                </div>
            
                            </div>
                            <div class="cart_item_detail">
                                <div class="count_item_price">
                                    <p>${cookieArr[i].Item_price}</p>
                                </div>
                                <div class="cart_item_count">
                                    <div class="list_countBtn_warp d-flex">

                                        <div class="countBtn countBtn_minus">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                        <div class="list_count">${cookieArr[i].count}</div>
                                        <div class="countBtn countBtn_add">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                        
                                    </div>
                                    <div class="count_left">${cookieArr[i].Item_left}</div>
                                </div>
                                <div class="cart_item_total">
                                    <p>${nowprice}</p>
                                </div>
                                <div class="cart_item_delete">
                                    <i class="far fa-trash-alt"></i>
                                </div>
                            </div>
            
                        </div>`
            
            
            
                     $('.cart_items_warps').append(cart_item);
                     $total_price += nowprice
            
                    }

                    $('.total_sum p:nth-of-type(2)').text($total_price)

                    let fee =parseInt($('.total_fee p:nth-of-type(2)').text());
                    let checkout_price = parseInt($total_price) + fee;
                    
                    $('.total_money p:nth-of-type(2)').text(checkout_price)

                     //結帳頁去結帳按鈕
                    $('.cart_checkout_btn').attr('disabled', false).css('background-color','#5aa700')
                    $('.cart_checkout_btn').on({
            
                        click: function(){
                    
                            location.href = "../html/checkout.html?step1"
                    
                        }
                    
                    })




                }else{

                    //navbar購物車


                    //商品庫存
                    let itemLeft = $(this).parent().parent().attr('Item-left')

                    // 若商品缺貨
                    if(itemLeft == 0){

                    
                    }else{

                        $('.list_item_warps').empty();//清空新加入商品

                        // 去結帳按鈕
                        $('.checkout_btn').attr('disabled', false).css('background-color','var(--dark_blue)')
                        $('.checkout_btn').on({
    
                            click: function(){
                        
                                console.log('hi')
                                location.href = "../html/checkout.html?step1"
                        
                            }
                        
                        })

                        let cookieStr = $.cookie('Cart');
                        let cookieArr = JSON.parse(cookieStr);
    
                        $total_price = 0
                        
                        
                        for(let i = 0 ; i < cookieArr.length ; i++){
    
                            let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);
    
                            let Cart_list_item = `
                                <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}" Item-left="${cookieArr[i].Item_left}">
                                    <div class="list_item_pic">
                                        <img src="${cookieArr[i].Item_pic}" alt="">
                                    </div>
                        
                                    <div class="list_item_intro">
                                        <div class="list_item_title">
                                            <h1>${cookieArr[i].Item_title}</h1>
                                        </div>
                        
                        
                                        <div class="list_intro_count d-flex">
                            
                                            <div class="list_countBtn_warp d-flex">
                                                 <div class="countBtn countBtn_minus">
                                                    <i class="fas fa-minus"></i>
                                                </div>
                                                <div class="list_count">${cookieArr[i].count}</div>
                                                <div class="countBtn countBtn_add">
                                                    <i class="fas fa-plus"></i>
                                                </div>
                                            </div>
    
                                            <div class="list_intro_price">
                                                <p>${nowprice}</p>
                                            </div>
    
                                            <div class="item_delete">
                                                <i class="far fa-trash-alt "></i>
                                            </div>
                                        </div>
    
                                    </div>
                                </div> `;
    
                                $('.list_item_warps').append(Cart_list_item);
    
                            
                                $total_price += nowprice
                                
                                
                        }
                            
    
                        $('.Cart_list_total').children('p').text($total_price)

                    }
                    
                 } 
            
            
        });


        //單一商品頁加入購物車
        $(".add_btn_lg").on({

            click: function(){

            //navbar購物車
            //商品庫存
            let itemLeft = $(this).parent().parent().attr('Item-left')

            // 商品數量 //計數器數量
            let itemCount = parseInt($(this).prev().children().children('.product_count').text())

            // 若商品缺貨
            if(itemLeft == 0){

            
            }else if(itemCount == 0){

               
            }
            else{

                $('.list_item_warps').empty();//清空新加入商品

                // 去結帳按鈕
                $('.checkout_btn').attr('disabled', false).css('background-color','var(--dark_blue)')
                $('.checkout_btn').on({

                    click: function(){
                

                        location.href = "../html/checkout.html?step1"
                
                    }
                
                })

                let cookieStr = $.cookie('Cart');
                let cookieArr = JSON.parse(cookieStr);

                $total_price = 0
                
                
                for(let i = 0 ; i < cookieArr.length ; i++){

                    let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);

                    let Cart_list_item = `
                        <div class="Cart_list_item " Item-ID= "${cookieArr[i].pid}" Item-left="${cookieArr[i].Item_left}">
                            <div class="list_item_pic">
                                <img src="${cookieArr[i].Item_pic}" alt="">
                            </div>
                
                            <div class="list_item_intro">
                                <div class="list_item_title">
                                    <h1>${cookieArr[i].Item_title}</h1>
                                </div>
                
                
                                <div class="list_intro_count d-flex">
                    
                                    <div class="list_countBtn_warp d-flex">
                                        <div class="countBtn countBtn_minus">
                                            <i class="fas fa-minus"></i>
                                        </div>
                                        <div class="list_count">${cookieArr[i].count}</div>
                                        <div class="countBtn countBtn_add">
                                            <i class="fas fa-plus"></i>
                                        </div>
                                    </div>

                                    <div class="list_intro_price">
                                        <p>${nowprice}</p>
                                    </div>

                                    <div class="item_delete">
                                        <i class="far fa-trash-alt "></i>
                                    </div>
                                </div>

                            </div>
                        </div> `;

                        $('.list_item_warps').append(Cart_list_item);

                    
                        $total_price += nowprice
                        
                        
                }
                    

                $('.Cart_list_total').children('p').text($total_price)

            }
                    
                
            
            }
        });



        //刪除項目
        ///append架構無法使用功能，須根據append父層下指令
        $(".list_item_warps").on("click",".item_delete",function(){

            // 節點刪除
            let navItem = $(this).parent().parent().parent()
            let navItemID = navItem.attr('Item-ID')

            

            navItem.remove()//視覺刪除
            alert('商品已刪除')


            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){

                    let $sum = parseInt($('.navbar_shoplist_count').text())//抓購物車現在數量

                    let sum_RWD = parseInt($('.shoplist_count_RWD').text())//抓購物車RWD現在數量
                

                    let $oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())


                    $nowsum = $sum - parseInt(cookieArr[i].count) //購物車現在數量減去刪除數量
                    $('.navbar_shoplist_count').text($nowsum)//刪除後數量

                    $nowsumRWD = sum_RWD - parseInt(cookieArr[i].count) //RWD購物車現在數量減去刪除數量
                    $('.navbar_shoplist_count').text(sum_RWD)//RWD刪除後數量
                    

                    $delete_price = parseInt(cookieArr[i].count) *  parseInt(cookieArr[i].Item_price)

                    $newtototal_price = $oldtotal_price - $delete_price;


                    $('.Cart_list_total').children('p').text($newtototal_price)//刪除後總金額
                    

                    cookieArr.splice(i,1);//刪除

                    if( $nowsum <= 0 ||  $nowsumRWD <= 0){ //刪除後數量小於0，計數器消失
                        $('.navbar_shoplist_count').css('display','none');
                        $('.shoplist_count_RWD').css('display','none');

                    }else{

                        $('.navbar_shoplist_count').text($nowsum)
                        $('.shoplist_count_RWD').text($nowsumRWD)

                    }

                    break;
                }

            }

    
            //判斷數組為空
            if( cookieArr.length == 0){

                $.removeCookie('Cart');

                let empty = `<p class="list_item_empty">目前購物車為空</p>`
                $(".list_item_warps").append(empty)//顯示目前沒有商品提示
                
                $('.Cart_list_total').css('display','none')
                $('.checkout_btn').attr('disabled', true).css('background-color','var(--grey)')

            }else{
                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
                
                
            }
            
         });

         //計算器
         //加＋＋
         $(".list_item_warps").on("click",".countBtn_add ",function(){

            //當前所在的ID
            let navItem = $(this).parent().parent().parent().parent();
            let navItemID = navItem.attr('Item-ID')

            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){

                    $oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())//未變化前總金額

                    $old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price)////未變化前商品金額

                    $raw_price = $oldtotal_price - $old_price // 除了變化的商品金額以外的總金額

                    let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Item_left)
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

                        
                    

                        $newprice = cookieArr[i].Item_price
                        * cookieArr[i].count; //新商品金額


                        $newtototal_price = $raw_price + $newprice; //新商品總金額
                    
                        $(this).parent().next().children('p').text($newprice);

                        $('.Cart_list_total').children('p').text($newtototal_price);
                    

                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
    

                    }

                    
                    break;

        
                }


            }



         })



        //減--
         $(".list_item_warps").on("click",".countBtn_minus ",function(){

            //當前所在的ID
            let navItem = $(this).parent().parent().parent().parent()
            let navItemID = navItem.attr('Item-ID')

     

            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(navItemID)){

                    let $oldtotal_price = parseInt( $('.Cart_list_total').children('p').text())//未變化前總金額

                    $old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price)////未變化前商品金額

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
                    let still_left = parseInt(cookieArr[i].Item_left) >  parseInt(cookieArr[i].count)

                    if(still_left){

                        let countBtn_add = $(this).next().next()
                        $(countBtn_add).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')

                    }
                    else{

                        let countBtn_add = $(this).next().next()
                        $(countBtn_add).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')

                    }

                    if(cookieArr[i].count <= 0){
                        navItem.remove()
                        alert('已刪除商品')
                        let delete_price = $oldtotal_price - cookieArr[i].Item_price
                        
                        $('.Cart_list_total').children('p').text(delete_price)

                        cookieArr.splice(i,1);//刪除指定資料

                        if(sum == 0 || sum_RWD == 0){

                            $.removeCookie('Cart');
                            let empty = `<p class="list_item_empty">目前購物車為空</p>`
                            $(".list_item_warps").append(empty)//顯示目前沒有商品提示

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


                    $newprice = cookieArr[i].Item_price * cookieArr[i].count//新商品金額

                    $newtototal_price = $raw_price + $newprice;//新商品總金額


                    $(this).parent().next().children('p').text($newprice)
                   
                    $('.Cart_list_total').children('p').text($newtototal_price);
                    
                    break;
        
                }

            }

         })





         //計算器效果
         $(".list_item_warps").on("mousedown mouseup",".countBtn_add , .countBtn_minus",function(){

            $(this).toggleClass('countBtn_color').css('transition','0.3s')
    
         })

         


   
         /////購物車按鈕效果////



         // 平板版
        if ($(window).width() > 480) {
   
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
        if ($(window).width() < 480) {
                    
            $('.shoplist_RWD').click(function(){
                
                let Location =  location.href

                let Cart_Page = Location.substr(-9,9) == 'cart.html'
                let Checkout_Page= Location.substr(-13,13) == 'checkout.html'

                // 結帳頁只會重新整理
                if(Cart_Page || Checkout_Page){

                    location.reload()


                }else{
                    $('.Cart_list_bar').toggleClass('RWD_open_shoplist')

                    $('.navbar_RWD_items').removeClass('RWD_open')
                    
                }

            })
        }

        
         // 網頁版
         if ($(window).width() >= 992) {
   
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
            $('.Cart_list_bar').removeClass('RWD_open_shoplist')
    
        });

        $('.navbar_RWD_bg').click(function(){
            
            $('.navbar_RWD_items').removeClass('RWD_open')
          
        });
    
    
        $(window).scroll(function () {
    
        let scrollNow = $(window).scrollTop();
        // console.log('scrollTop', scrollNow);
    
    
        // if ($(window).width() <  992){
    
        //     if (scrollNow >= 763){
    
        //         $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
        //     }else{
        //         $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0)').css('transition','0.1s')
    
                
    
        //     }
    
        // }
    
        // 網頁版 
        if ($(window).width() >= 992) {
    
       
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
                    
                        location.href = "../html/Login_sign.html"

            
                }


       })

       $('.icon_member_RWD').on({

                click: function(){
                    

                    if ($(window).width() >480) {
                        
                        location.href = "../html/member.html"

                    }else{

                        location.href = "../html/member.html"

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


    
        if ($(window).width() < 992) {

            $('.RWD_items li:nth-of-type(2)').on({

                click: function () {
    
                 $(this).toggleClass('RWD_listopen');

                 $(this).children('.fa-angle-down').toggleClass('RWD_navUp');
                
                 
                 }
                
         
             })

            $('.RWD_items li:nth-of-type(4').on({

                click: function () {
    
                 $(this).toggleClass('RWD_listopen');
                 $(this).children('.fa-angle-down').toggleClass('RWD_navUp');
                
                 
                 }
                
         
             })


        }


   
        
})