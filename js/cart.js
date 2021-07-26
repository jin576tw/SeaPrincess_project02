$(document).ready(function () {


    if($.cookie("Cart") == null){


      $('.cart_empty').css('display','flex')

      $now_total_price = $('.total_sum p:nth-of-type(2)').text()

      let fee =parseInt($('.total_fee p:nth-of-type(2)').text());
      let checkout_price = parseInt($now_total_price) + fee;

        
    //初始總結帳金額
      $('.total_money p:nth-of-type(2)').text(checkout_price)

    // 購物車無商品無法結帳
      $('.cart_checkout_btn').attr('disabled', true).css('background-color','var(--grey)')


    }else{
        $('.cart_empty').css('display','none')

        $('.cart_checkout_btn').attr('disabled', false).css('background-color','#5aa700')
        $('.cart_checkout_btn').on({

            click: function(){
        
                console.log('hi')
                location.href = "../html/checkout.html"
        
            }
        
        })
    
    


        let cookieStr = $.cookie('Cart');
        let cookieArr = JSON.parse(cookieStr);
        $total_price = 0


        for(let i = 0 ; i < cookieArr.length;i++){

            let nowprice = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price);


            let cart_item = `

            <div class="cart_items" Item-ID= "${cookieArr[i].pid}">

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
                            <div class="countBtn countBtn_add">
                                <i class="fas fa-plus"></i>
                            </div>
                            <div class="list_count">${cookieArr[i].count}</div>
                            <div class="countBtn countBtn_minus">
                                <i class="fas fa-minus"></i>
                            </div>
                        </div>
                        <div class="count_left">3</div>
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

        

        
       //刪除商品
       $('.cart_items_warps').on("click",".cart_item_delete ",function(){

             $cartItem = $(this).parent().parent();
             let cartItemID = $cartItem.attr('Item-ID');

             $cartItem.remove()
             alert('商品已刪除')

             let cookieStr = $.cookie('Cart');
             let cookieArr = JSON.parse(cookieStr);
 
             for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(cartItemID)){

                    let $sum = parseInt($('.navbar_shoplist_count').text())//抓購物車現在數量

                    let $oldtotal_price = parseInt( $('.total_sum p:nth-of-type(2)').text())


                    $nowsum = $sum - cookieArr[i].count; //購物車現在數量減去刪除數量
                    $('.navbar_shoplist_count').text($nowsum)//刪除後數量

                    $delete_price = parseInt(cookieArr[i].count) *  parseInt(cookieArr[i].Item_price)


                    $newtototal_price = $oldtotal_price - $delete_price;

                    let checkout_price = parseInt($('.total_money p:nth-of-type(2)').text());

                    // console.log(checkout_price)

                    $delete_checkout_price = checkout_price - $delete_price;

                    
                    $('.total_sum p:nth-of-type(2)').text($newtototal_price)

                    $('.total_money p:nth-of-type(2)').text( $delete_checkout_price)

                    cookieArr.splice(i,1);//刪除資料

                    if( $nowsum <= 0){ //刪除後數量小於0，計數器消失
                        $('.navbar_shoplist_count').css('display','none');

                    }

                    break;
                }

             }

             
             //判斷數組為空
            if( cookieArr.length == 0){

                $.removeCookie('Cart');

                let empty = `<div class="cart_empty">
                                 <p>目前購物車無商品</p>
                            </div>`
                $('.cart_items_warps').append(empty)//顯示目前沒有商品提示
                

            }else{
                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})
                
                
            }



       });




        //計算器
        //加＋＋
        $('.cart_items_warps').on("click",".countBtn_add ",function(){

    
            $cartItem =$(this).parent().parent().parent().parent();

            let cartItemID = $cartItem.attr('Item-ID')

            let fee = parseInt($('.total_fee p:nth-of-type(2)').text());


            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
           

            for(let i = 0 ; i <  cookieArr.length ;i++){
                
                if(parseInt(cookieArr[i].pid) == parseInt(cartItemID)){

                    let $oldtotal_price = $('.total_sum p:nth-of-type(2)').text()
                    //未變化前總金額


                    $old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price)////未變化前商品金額

                    $raw_price = $oldtotal_price - $old_price // 除了變化的商品金額以外的總金額

                    cookieArr[i].count++;//計算器數量++

                    let sum = parseInt($('.navbar_shoplist_count').text()) //抓navbar現在數量
                    sum++ ; //navbar數量＋＋

                    $newprice = cookieArr[i].Item_price
                    * cookieArr[i].count; //新商品金額


                    $newtototal_price = $raw_price + $newprice; //新商品總金額

                    $check_out_price = $newtototal_price + fee;//新總結帳金額


                    $(this).next().text(cookieArr[i].count)//更新計算器數量

                    $('.navbar_shoplist_count').text(sum)//更新navbar數量

                    $(this).parent().parent().next().children('p').text($newprice)//更新商品金額

                    $('.total_sum p:nth-of-type(2)').text( $newtototal_price);//更新結帳金額


                    $('.total_money p:nth-of-type(2)').text($check_out_price) //更新總結帳金額

                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                    break;
                }

            }

           
        })

        //減--
        $(".cart_items_warps").on("click",".countBtn_minus ",function(){

            $cartItem =$(this).parent().parent().parent().parent();

            let cartItemID = $cartItem.attr('Item-ID');

            let fee = parseInt($('.total_fee p:nth-of-type(2)').text());



            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);

            for(let i = 0 ; i <  cookieArr.length ;i++){

                if(parseInt(cookieArr[i].pid) == parseInt(cartItemID)){

                    let $oldtotal_price = $('.total_sum p:nth-of-type(2)').text()
                    //未變化前總金額

                    $old_price = parseInt(cookieArr[i].count) * parseInt(cookieArr[i].Item_price)////未變化前商品金額

                    $raw_price = $oldtotal_price - $old_price // 除了變化的商品金額以外的總金額

                    cookieArr[i].count--;

                    let sum = parseInt($('.navbar_shoplist_count').text())
                    sum-- 

                    $newprice = cookieArr[i].Item_price
                    * cookieArr[i].count; //新商品金額

                    $(this).prev().text(cookieArr[i].count);
                    $('.navbar_shoplist_count').text(sum)
                    $(this).parent().parent().next().children('p').text($newprice)//更新商品金額


                    if(cookieArr[i].count <= 0){
                        $cartItem.remove()

                        let checkout_price = parseInt($('.total_money p:nth-of-type(2)').text());

                        $delete_price = $oldtotal_price - cookieArr[i].Item_price;
                        $delete_checkout_price = checkout_price - cookieArr[i].Item_price;
                        $('.total_sum p:nth-of-type(2)').text($delete_price);
                        $('.total_money p:nth-of-type(2)').text( $delete_checkout_price)
                       

                        alert('已刪除商品')
                        cookieArr.splice(i,1);//刪除指定資料


                        if(sum == 0){

                            $.removeCookie('Cart');
                            let empty = `<div class="cart_empty">
                                             <p>目前購物車無商品</p>
                                        </div>`
                            $('.cart_items_warps').append(empty)//顯示目前沒有商品提示

                            $('.navbar_shoplist_count').css('display','none')
                            
                            break;

                        }else{
                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                            break;
                        }
                        
                
                    }else{
                        $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                    }

                    $newtototal_price = $raw_price + $newprice; //新商品總金額

                    $check_out_price = $newtototal_price + fee;//新總結帳金額

                    $('.total_sum p:nth-of-type(2)').text($newtototal_price)//更新商品總金額

                    $('.total_money p:nth-of-type(2)').text($check_out_price)//更新結帳金額

                    break;

                }

            }

        })
        

        //計算器效果
        $(".cart_items_warps").on("mousedown mouseup",".countBtn_add , .countBtn_minus",function(){

            $(this).toggleClass('countBtn_color').css('transition','0.3s')
    
         })


////購物車總計
    

        //總金額
    
        $('.total_sum p:nth-of-type(2)').text($total_price);

        $now_total_price = $('.total_sum p:nth-of-type(2)').text()


        let fee =parseInt($('.total_fee p:nth-of-type(2)').text());

        console.log($now_total_price)

        let checkout_price = parseInt($now_total_price) + fee;

       
        // //總結帳金額
        $('.total_money p:nth-of-type(2)').text(checkout_price)

    

    }
})