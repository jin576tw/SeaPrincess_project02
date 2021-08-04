'use strict'
$(document).ready(function () {


    // 售完項目顯示售完
    let empty_item = $(".item[Item-left='0']")
    if(empty_item){
        empty_item.children('.item_detail').children('.sold').css('display','block')
        empty_item.children('.item_detail02').children('.sold').css('display','block')
        empty_item.children('.item_detail').children('p:nth-of-type(1)').css('display','none')
        empty_item.css('opacity','0.7')
        empty_item.children('.item_detail02').children('p:nth-of-type(1)').css('display','none')
        empty_item.css('opacity','0.7')
        
    }
  
///////////////////加入購物車/////////////

    $(".add_btn").on({

        click: function(){

            // 商品名稱
            let itemTitle = $(this).next().next().children().children().text()

            //商品圖片
            let itemPic = $(this).next().children().children().attr('src')


            //商品價格
            let itemPrice = $(this).parent().next().children('p:nth-of-type(1)').text()

            // 商品ID
            let itemID = $(this).parent().parent().attr('Item-ID')

            //商品庫存
            let itemLeft = $(this).parent().parent().attr('Item-left')

            
            let arr =[{Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,Item_left:itemLeft,count:1}]
            //商品名稱、商品圖片、商品價格、商品ID、商品庫存、商品數量初始值

        
            // 判斷商品是否缺貨
            if(itemLeft == 0){
                alert('商品缺貨中')

            }else{

                // 顯示navbar數量 
                $('.navbar_shoplist_count').css('display','flex').addClass('Bounce');
                $('.shoplist_count_RWD').css('display','flex').addClass('Bounce');


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
                            
                            let Item_over = parseInt(cookieArr[i].count) >= parseInt(cookieArr[i].Item_left)

                            let Zero_Item = parseInt(cookieArr[i].Item_left) == 0 


                            if(Item_over){
                                alert('數量超過庫存')
                                break;

                            }
                            else if(Zero_Item){
                                alert('商品缺貨中')
                                break;

                            }else{
                                cookieArr[i].count++
                                // 數量沒超過庫存
                            }

                    
                            break;
                                
                        
                        }

                    }

                    if(!same){
                        if(itemLeft == 0){
                            alert('商品缺貨中')
                        }else{
                            cookieArr.push({Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,Item_left:itemLeft,count:1})

                        }

                        
                    }


                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


                }   
                

            }

            //navbar購物車
            if($.cookie("Cart") == null){

                //cookie若無資料，顯是購物車為空
                $('.navbar_shoplist_count').css('display','none')
                $('.shoplist_count_RWD').css('display','none')
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

                $('.navbar_shoplist_count').text(sum)
                $('.shoplist_count_RWD').text(sum)


            }


       
        

        },

        // 加入購物車效果
        mouseenter: function () {
            $(this).addClass('Bounce')
        },
        mouseleave: function () {
            $(this).removeClass('Bounce')
        }

    })




    ////////商品列效果////////
    if ($(window).width() >= 992) {

        $(".item").on({

            mouseenter: function () {

                
                $(this).children().children('.item_title').css('border','solid 0.1px transparent').css('border-top','solid 0.1px rgba(173, 173, 173, 0.5)')

                $(this).children().children('.item_pic').css('border-top','solid 0.1px transparent').css('border-right','solid 0.1px transparent').css('border-left','solid 0.1px transparent')

                

            },
            mouseleave: function () {

               
                $(this).children().children('.item_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')


                $(this).children().children('.item_pic').css('border-top','solid 0.1px rgba(173, 173, 173, 0.5)').css('border-right','solid 0.1px rgba(173, 173, 173, 0.5)').css('border-left','solid 0.1px rgba(173, 173, 173, 0.5)')

                

            

            }
        })



    }

    // Q&A
    if ($(window).width() <  992){

        $('.question_icon').click(function(){
            
            $( this ).toggleClass( 'minus' );
            $( this ).parent().parent('.question').toggleClass( 'answer_open_RWD' );
        })

        $('.question_title').click(function(){
            
            
            $( this ).parent().toggleClass( 'answer_open_RWD' );
        })

    }

 
    if ($(window).width() >= 992){

        $('.question_icon').click(function(){
            
            $( this ).toggleClass( 'minus' );
            $( this ).parent().parent('.question').toggleClass( 'answer_open' )
        })

        $('.question_title').click(function(){
            
            $( this ).parent().toggleClass( 'answer_open' )
        })
    }


})