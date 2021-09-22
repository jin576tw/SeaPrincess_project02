'use strict'
let Box_Selected = ''
let Box_pic = ''
let Box_price = 0
let Box_qty = ''
let Box_cook = []
let Box_message = ''

// 魚箱選擇
$('.fishbox_package_box').on({


    click:function(){

        $(this).children('.fishbox_package_title').children('input').prop('checked',true) 


        Box_pic=$(this).children('.fishbox_package_pic').children('img').attr('src')

       

    }


})




$('.fishbox_addCart').on({

    click:function(){



        let isPass = true

        // 魚箱選擇
        Box_Selected = $('input:checked[name="fishbox"]').val()

        if(Box_Selected == null){

            isPass = false
            alert('請選擇魚箱')

        }
        

        // 組合預算
        Box_price = $('input:checked[name="fishbox_pice"]').val()
        if(Box_price == null){

            isPass = false
            alert('請選擇組合預算')

        }


        // 食用人數
        Box_qty = $('input:checked[name="fishbox_qty"]').val()

        if(Box_qty == null){

            isPass = false
            alert('請選擇食用人數')

        }
       

        // 料理習慣 
        Box_cook = $("input[name='fishbox_cook[]']:checked").map(function() { return $(this).val(); }).get()



        // 其他留言
        Box_message = $('#fishbox_message').val()
       


        if(isPass){

            $('.fishbox_list').css('display','block')//海鮮魚箱欄位

            // 魚箱選擇、組合預算、魚箱圖片、食用人數、其他留言、商品數量初始值、判斷是否是鮮魚箱
            let arr= [{Product_Name:Box_Selected,Product_Price:Box_price,Product_Pic:Box_pic,Product_qty:Box_qty,Product_message:Box_message,count:1,fishbox:true,pid:999}]


            let CheckBtn = $('.checkout_btn')//結帳按鈕

             // 啟動結帳按鈕
            CheckBtn.attr('disabled', false).css('background-color','var(--dark_blue)')
            CheckBtn.on({

                click: function(){
            
                    location.href = "./checkout.html"
            
                }
            
            })

            // 顯示navbar數量 
            $('.navbar_shoplist_count').css('display','flex').addClass('Bounce');
            $('.shoplist_count_RWD').css('display','flex').addClass('Bounce');


            $('.list_item_empty').css('display','none');
            $('.Cart_list_total').css('display','block');

            let ListCount = $('.navbar_shoplist_count');//購物車數量
            let ListCount_RWD =  $('.shoplist_count_RWD');//購物車數量RWD

            

            //寫入cookie
            if($.cookie('Cart') == null ){

                 // 第一次加入
                 $.cookie('Cart',JSON.stringify(arr),{expire : 1})


                 for(let i = 0 ; i < arr.length ;i++){ 
 
                     CartProduct(arr[i])
 
 
                 }
 
                 alert('海鮮魚箱已加入購物車')



                // 購物車數量
                let old_count = parseInt( ListCount.text()) 
                ListCount.text(old_count+1)


                let old_count_rwd = parseInt(ListCount_RWD.text()) 
                ListCount_RWD.text(old_count_rwd+1)
 

              


            }else{

                // 抓cookie購物車資料
                let cookieStr = $.cookie('Cart')

                // 若不是第一次加入
                let cookieArr = JSON.parse(cookieStr);//先轉成物件

                let same = false ;//假設沒有添加過商品 

                for(let j = 0 ; j <  cookieArr.length; j++){ 

                    if(cookieArr[j].fishbox){

                        same = true;

                        // 修改魚箱內容
                        cookieArr[j] = arr[0];


                        let FISHBOX_LIST =  $('.fishbox_list_warp');


                        FISHBOX_LIST.empty();


                        CartProduct(arr[0])
                        
                        alert('海鮮魚箱已修改！')

                        break;


                    }


                }

                if(!same){

                    //購物車已有商品時

                    cookieArr.push({Product_Name:Box_Selected,Product_Price:Box_price,Product_Pic:Box_pic,Product_qty:Box_qty,Product_message:Box_message,count:1,fishbox:true,pid:999})

                   

                    for(let i = 0 ; i < arr.length ;i++){ 


                        CartProduct(arr[i])
    
    
                    }

                   

                    // 購物車數量
                    let old_count = parseInt( ListCount.text()) 
                    ListCount.text(old_count+1)


                    let old_count_rwd = parseInt(ListCount_RWD.text()) 
                    ListCount_RWD.text(old_count_rwd+1)


            
                    alert('海鮮魚箱已加入購物車')

                }

                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                let total_price = 0 

                for(let j = 0 ; j <  cookieArr.length; j++){

                    // 計算當前商品金額
                    let nowprice = parseInt(cookieArr[j].count) * parseInt(cookieArr[j].Product_Price);

                    total_price+= nowprice

                }

               
                //購物車總金額
                let CartTotalPrice = $('.Cart_list_total').children('p')
                CartTotalPrice.text(total_price)


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


                
    

            }




        }

    }


})