'use strict'
$(document).ready(function () {

    //計算器
    //加＋＋
    $(".product_countBtn_warp").on("click",".product_countBtn_add",function(){

        //商品庫存
        let itemLeft =  parseInt($(this).next().next().next().attr('Item-left'))
        
        let sum = parseInt($(this).next().text());
        

        if(sum < itemLeft){
            sum++
            $(this).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
            
        }else{
           alert('數量超過庫存')
           $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
        }

        $(this).next().text(sum);

        
        if(sum >= 0){
            let countBtn_minus = $(this).next().next()
            $(countBtn_minus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
        }

    })
    //減--
    $(".product_countBtn_warp").on("click",".product_countBtn_minus",function(){


        //商品庫存
        let itemLeft =  parseInt($(this).next().attr('Item-left'))

        let sum = parseInt($(this).prev().text());

    

        if(sum <=0 ){
            $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            
        }else if(sum <= itemLeft){
            sum--;
            let addBtn = $(this).prev().prev()
            addBtn.css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')

        }
        else{
            sum--;
        }
        
        $(this).prev().text(sum);

    })

  

     //計算器效果
     $(".product_countBtn_warp").on("mousedown mouseup",".product_countBtn_add , .product_countBtn_minus",function(){

        $(this).toggleClass('countBtn_color').css('transition','0.3s')

     })


    

    //單一商品頁加入購物車
    $('.add_btn_lg').on({

        click:function(){

            // 顯示navbar數量 
            $('.navbar_shoplist_count').css('display','flex').addClass('Bounce');


            // 商品名稱
            let itemTitle = $(this).prev().prev().prev().children('h1').text()


            //商品圖片
            let itemPic = $(this).parent().prev().children('.other_product_pic_warp').children('.other_product_pic01').children().attr('src')

        
            //商品價格
            let itemPrice = $(this).prev().prev().children('.product_intro_price').children('p').text()

            
            // 商品ID
            let itemID = $(this).parent().attr('Item-ID')

    
            //商品庫存
            let itemLeft =  $(this).prev().children().children('.product_left').attr('Item-left')

            // 商品數量 //計數器數量
            let itemCount = parseInt($(this).prev().children().children('.product_count').text())

            // console.log(itemCount)

            
            let arr =[{Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,Item_left:itemLeft,count:itemCount}]
            //商品名稱、商品圖片、商品價格、商品ID、商品庫存、商品數量
            
            // console.log(arr)


            
             // 判斷商品是否缺貨
             if(itemLeft == 0){
                alert('商品缺貨中')

            }else if(itemCount == 0){

                alert('請選擇數量')
            }
            else{

                //寫入cookie
                if($.cookie('Cart') == null ){

                    // 第一次加入
                    $.cookie('Cart',JSON.stringify(arr),{expire : 1})
                

                }else{

                    // 抓cookie購物車資料
                    let cookieStr = $.cookie('Cart')

                    // 若不是第一次加入
                    let cookieArr = JSON.parse(cookieStr);//先轉成物件

                    let same = false //假設沒有添加過商品 


                    // 通過迴圈判斷是否符合重復
                    // 若有，增加數量
                    for(let i =0 ; i < cookieArr.length; i++){
                        if(itemID == cookieArr[i].pid){

                            same = true;
                            
                            let old_count = cookieArr[i].count;

                            cookieArr[i].count = old_count + itemCount;

                            console.log(cookieArr[i].count )
                            break;
                                
                        
                        }

                    }

                    if(!same){
                        if(itemLeft == 0){
                            alert('商品缺貨中')
                        }else{
                            cookieArr.push({Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,Item_left:itemLeft,count:itemCount})

                        }

                        
                    }


                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


                }   
                

            }

            //navbar購物車
            if($.cookie("Cart") == null){

                //cookie若無資料，顯是購物車為空
                $('.navbar_shoplist_count').css('display','none')
                $('.Cart_list_total').css('display','none')
                $('.list_item_empty').css('display','flex')



            }else{

                $('.list_item_empty').css('display','none');
                $('.Cart_list_total').css('display','block');
                
                // 抓cookie購物車資料
                let cookieStr = $.cookie('Cart');
                let cookieArr = JSON.parse(cookieStr);
                let sum = 0;


                for(let i = 0 ; i < cookieArr.length;i++){
                    sum += cookieArr[i].count;
                }

                let navItem_count = parseInt($('.navbar_shoplist_count').text())

                let new_count = itemCount+ navItem_count

                $('.navbar_shoplist_count').text(new_count)


            }


        }


    })



});