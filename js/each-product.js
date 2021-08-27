'use strict'
$(document).ready(function () {

    let ItemURL = location.href.substr(-10,1) == "I";

    if(ItemURL){

        $.get("../JSON/Item.json", function (data) {

            let d = data; 
            let ProductID = parseInt(location.href.substr(-3,3));
            let ProrductTitle = $('.product_intro_title h1');
            let ProductMainPic =$('.main_product_pic img');
            let ProductPrice = $('.product_intro_price p');
            let Productleft = $('.product_left p');
            let ProductInfo = $('.IntroProduct_content_text')

            let AddBtnLG = $('.add_btn_lg');

             for(let i= 0 ; i < d.length ;i++ ){

                if(d[i].pid == ProductID){
                    
                    // 商品名稱
                    ProrductTitle.text(d[i].name)

                    // 商品圖片
                    ProductMainPic.attr('src',d[i].pic[0])


                    //其他圖片
                    for(let j=0 ; j < d[i].pic.length;j++ ){

                        let ProductOtherPic = `
                        <div class="other_product_pic">
                            <img src="${d[i].pic[j]}" alt="">
                        </div>
                        `

                        $('.other_product_pic_warp').append(ProductOtherPic)


                    }

                    // 商品資訊
                    let ProductDetail = `
                    <p>${d[i].detail}</p>`
                    $('.product_intro_detail').html(ProductDetail)

                    // 商品價格
                    ProductPrice.text(d[i].price)
              





                }




            }
            

    
           




        })



    }else{

    
        // 商品資料載入
        $.get("../JSON/Seafood.json", function (data) {
            let d = data;
            let ProductID = parseInt(location.href.substr(-3,3));
            let ProrductTitle = $('.product_intro_title h1');
            let ProductMainPic =$('.main_product_pic img');
            let ProductPrice = $('.product_intro_price p');
            let Productleft = $('.product_left p');
            let ProductInfo = $('.IntroProduct_content_text')

            let AddBtnLG = $('.add_btn_lg');

            for(let i= 0 ; i < d.length ;i++ ){

                if(d[i].pid == ProductID){

                    // 商品名稱
                    ProrductTitle.text(d[i].name)

                    // 商品圖片
                    ProductMainPic.attr('src',d[i].pic[0])
        
                    //其他圖片
                    for(let j=0 ; j < d[i].pic.length;j++ ){

                        let ProductOtherPic = `
                        <div class="other_product_pic">
                            <img src="${d[i].pic[j]}" alt="">
                        </div>
                        `

                        $('.other_product_pic_warp').append(ProductOtherPic)


                    }

                    // 商品資訊
                    let ProductDetail = `
                    <p>包裝方式：${d[i].detail[0]}</p>
                    <p>保存方式：${d[i].detail[1]}</p>
                    <p>保存期限：${d[i].detail[2]}</p>`
                    
                    $('.product_intro_detail').html(ProductDetail)

                    // 商品價格
                    let Price = `${d[i].price} / 公斤`
                    ProductPrice.text(Price)

                    // 商品庫存
                    Productleft.text(d[i].left)

                    if(d[i].left==0){

                        let SoldOut =`<p>已售完</p>`
                        AddBtnLG.html(SoldOut)
            
                        AddBtnLG.attr('disabled', true).css('background-color','#dedede').children('p').css('color','#aaaaaa')

                        

                    }else{
                        AddBtnLG.attr('disabled', false).css('background-color','#a42021')

                    }
                    


                    // 商品描述

                    // 第一段文字
                    let P01_CONTENT =``

                    //若沒內容，就不顯示
                    if(d[i].intro.p01 == ''){

                        P01_CONTENT = ``

                    }else{
                
                        for(let j = 0 ; j<d[i].intro.p01.length;j++){


                            let p01_str = `<p>${d[i].intro.p01[j]}</p>`

                            P01_CONTENT +=p01_str

                        }
                    }


                    //第一段圖片
                    let INTRO_IMG01 = ``

                    if(d[i].intro.img01 == ''){

                        INTRO_IMG01 = ``

                    }else{

                        for(let j = 0 ; j<d[i].intro.img01.length;j++){

                            let img01_data = `<div class="IntroProduct_pic">
                                                <img src="${d[i].intro.img01[j]}" alt="">
                                            </div>`
                            

                            INTRO_IMG01+=img01_data
                            

                        }
                    }


                    // 第二段文字
                    let P02_CONTENT =``

                    if(d[i].intro.p02 == ''){

                        P02_CONTENT = ``

                    }else{

                        for(let j = 0 ; j<d[i].intro.p02.length;j++){


                            let p02_str = `<p>${d[i].intro.p02[j]}</p>`

                            P02_CONTENT +=p02_str

                        }
                    }

                    //第二段圖片
                    let INTRO_IMG02 = ``
                    if(d[i].intro.img02 == ''){

                        INTRO_IMG02 = ``

                    }else{


                        for(let j = 0 ; j<d[i].intro.img02.length;j++){


                            let img02_data = `<div class="IntroProduct_pic">
                                                <img src="${d[i].intro.img02[j]}" alt="">
                                                </div>`
                            
        
                            INTRO_IMG02+=img02_data
        
                        }
                    }
        
                
                    let ARTICLE =  
                    `<h2>${d[i].name}</h2>`+
                    P01_CONTENT+
                    `<div class="IntroProduct_pic_warp">`+
                        INTRO_IMG01+
                    `</div>`+
                    P02_CONTENT+
                    `<div class="IntroProduct_pic_warp">`+
                        INTRO_IMG02+
                    `</div>`
                        
                    
                    ProductInfo.html(ARTICLE)
                    

            


                }

            }
        
        })



    }

    //計算器
    //加＋＋
    $(".product_countBtn_warp").on("click",".product_countBtn_add",function(){

        //商品庫存
       
        let itemLeft =  parseInt($(this).next().attr('Item-left'))
        
        let sum = parseInt($(this).prev().text());
        

        if(sum < itemLeft){
            sum++
            $(this).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
            
        }else{
           alert('數量超過庫存')
           $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
        }

        $(this).prev().text(sum);

        
        if(sum >= 0){
            let countBtn_minus = $(this).prev().prev()
            $(countBtn_minus).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
        }

    })
    //減--
    $(".product_countBtn_warp").on("click",".product_countBtn_minus",function(){


        //商品庫存
        let itemLeft =  parseInt($(this).next().next().next().attr('Item-left'))

        
        let sum = parseInt($(this).next().text());

    

        if(sum <=0 ){
            $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
            
        }else if(sum <= itemLeft){
            sum--;
            let addBtn = $(this).next().next()
            addBtn.css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')

        }
        else{
            sum--;
        }
        
       
        $(this).next().text(sum);

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

            // 顯示navbarRWD數量 
            $('.shoplist_count_RWD').css('display','flex').addClass('Bounce');


            // 商品名稱
            let itemTitle = $(this).parent().prev().prev().prev().children('h1').text()


            //商品圖片
            let itemPic = $(this).parent().parent().prev().children('.other_product_pic_warp').children('.other_product_pic01').children().attr('src')

        
            //商品價格
            let itemPrice = $(this).parent().prev().prev().children('.product_intro_price').children('p').text()

            
            // 商品ID
            let itemID = $(this).parent().parent().attr('Item-ID')

    
            //商品庫存
            let itemLeft =  $(this).parent().prev().children().children('.product_left').attr('Item-left')

            // 商品數量 //計數器數量
            let itemCount = parseInt($(this).parent().prev().children().children('.product_count').text())

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
                    alert('商品加入購物車')

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
                            alert('商品加入購物車')
                            break;
                                
                        
                        }

                    }

                    if(!same){
                        if(itemLeft == 0){
                            alert('商品缺貨中')
                        }else{
                            cookieArr.push({Item_title:itemTitle,Item_pic:itemPic,Item_price:itemPrice,pid:itemID,Item_left:itemLeft,count:itemCount})
                            alert('商品加入購物車')

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
                


                for(let i = 0 ; i < cookieArr.length;i++){
                    let sum = 0;
                    sum += cookieArr[i].count;
                }

                let navItem_count = parseInt($('.navbar_shoplist_count').text())
                let navItem_count_RWD = parseInt($('.shoplist_count_RWD').text())

                let new_count = itemCount+ navItem_count
                let new_count_RWD = itemCount+ navItem_count_RWD

                $('.navbar_shoplist_count').text(new_count)
                $('.shoplist_count_RWD').text(new_count_RWD)


            }


        }


    })





    $('.label01').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')
            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent')

            $('.IntroProduct_content_warp').fadeIn(500)
            $('.Product_intro_team').fadeOut(1)
            
        }



    })

    $('.label02').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')

            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent');

            $('.IntroProduct_content_warp').fadeOut(1)
            $('.Product_intro_team').fadeIn(500)

        }

    })

    $('.label03').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')

            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent')


        }



    })



});