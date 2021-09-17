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


            
            
            // 魚箱選擇、組合預算、魚箱圖片、食用人數、其他留言、商品數量初始值、判斷是否是鮮魚箱
            let arr= [{Product_Name:Box_Selected,Product_Price:Box_price,Product_Pic:Box_pic,Product_qty:Box_qty,Product_message:Box_message,count:1,fishbox:true,food:false}]


            // 顯示navbar數量 
            $('.navbar_shoplist_count').css('display','flex').addClass('Bounce');
            $('.shoplist_count_RWD').css('display','flex').addClass('Bounce');

            //寫入cookie
            if($.cookie('Cart') == null ){

                // 第一次加入
                $.cookie('Cart',JSON.stringify(arr),{expire : 1})
                alert('海鮮魚箱已加入購物車')


               
               


            }else{

                // 抓cookie購物車資料
                let cookieStr = $.cookie('Cart')

                // 若不是第一次加入
                let cookieArr = JSON.parse(cookieStr);//先轉成物件

                let same = false ;//假設沒有添加過商品 

                for(let j = 0 ; j <  cookieArr.length; j++){ 

                    if(cookieArr[j].fishbox){

                        same = true;

                        alert('已經加入過海鮮魚箱')

                        break;


                    }


                }

                if(!same){


                    cookieArr.push({Product_Name:Box_Selected,Product_Price:Box_price,Product_Pic:Box_pic,Product_qty:Box_qty,Product_message:Box_message,count:1,fishbox:true,food:false})

                    alert('海鮮魚箱已加入購物車')

                }

                $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                console.log(cookieArr);

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


                let ListCount = $('.navbar_shoplist_count');//購物車數量
                let ListCount_RWD =  $('.shoplist_count_RWD');//購物車數量RWD
        
                

                let old_count = parseInt( ListCount.text()) 
              
                ListCount.text(old_count+1)


                let old_count_rwd = parseInt(ListCount_RWD.text()) 
              
                ListCount_RWD.text(old_count_rwd+1)




            }



            let cookieStr = $.cookie('Cart')
            let cookieArr = JSON.parse(cookieStr)

            let FISHBOX_LIST =  $('.fishbox_list_warp')

            for(let i = 0 ; i < cookieArr.length ;i++){

                if(cookieArr[i].fishbox){


                    let Fishbox_product =`<div class="Cart_list_item" Product-ID="999">

                    <div class="list_item_pic">
                        <a href="./fishbox.html">
                            <img src="${cookieArr[i].Product_Pic}" alt="">
                        </a>
                    </div>
        
                    <div class="list_item_intro">
        
                        <div class="list_item_title">
                            <a href="./fishbox.html">
                                <h1>${cookieArr[i].Product_Name}</h1>
                            </a>
                        </div>
        
        
                        <div class="list_item_detail">
            
                            <div class="Counter">
                                <div class="countBtn countBtn_minus">
                                    <i class="fas fa-minus"></i>
                                </div>
                                <div class="countNum">${cookieArr[i].count}</div>
                                <div class="countBtn countBtn_plus">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
        
                            <div class="list_intro_price">
                                <h4>${nowprice}</h4>
                            </div>
        
                            <div class="item_delete">
                                <i class="far fa-trash-alt "></i>
                            </div>
                        </div>
        
                    </div>
                </div>`
        
        
                FISHBOX_LIST.append(Fishbox_product)


                }


            }




        }

    }


})