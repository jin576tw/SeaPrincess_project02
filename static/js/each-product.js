'use strict'
$(document).ready(function () {

    let ItemURL = location.href.substr(-10,1) == "I";

    let EachProductsWarp = $('.Each_products_warp')

    ///////////////////////釣具商品載入////////////////////////////////
    if(ItemURL){

        $.get("./static/JSON/Item.json", function (data) {

            $('.label02').hide()

            let d = data; 
            let ProductID = parseInt(location.href.substr(-3,3));
            let ProrductTitle = $('.product_intro_title h1');
            let ProductMainPic =$('.main_product_pic img');
            let ProductPriceWarp = $('.product_intro_option_warp');
            let ProductInfo = $('.IntroProduct_content_text')

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
                    let productOption = (p) =>{

                        let OptionSelect = ``;
                        let FirstOPTION =` <option>產品規格</option>`
                       
                        for(let j = 0 ; j <p.type.length ;j++){ 
                           
                            let OPTION = `<option>${p.type[j]}</option>`
    
                            OptionSelect = OptionSelect + OPTION
                            
                        }
    
                        let AllOption = ` <div class="product_intro_option">
                        <select class="option_select">`+FirstOPTION+OptionSelect+`</select>
                        </div>`

                        return AllOption;

                    }
                    
                   
                    let ProductOption = productOption(d[i])
                   
                    let ProductPrice = `<div class="product_intro_price">
                                            <h2>${d[i].price}</h2>
                                        </div>`

                    ProductPriceWarp.append(ProductOption+ProductPrice)


                     

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

                            let img01_data = `<div class="IntroProduct_Item_pic">
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


                            let img02_data = `<div class="IntroProduct_Item_pic">
                                                <img src="${d[i].intro.img02[j]}" alt="">
                                                </div>`
                            
        
                            INTRO_IMG02+=img02_data
        
                        }
                    }
        
                
                    let ARTICLE =  
                    P01_CONTENT+
                    `<div class="IntroProduct_pic_warp">`+
                        INTRO_IMG01+
                    `</div>`+
                    P02_CONTENT+
                    `<div class="IntroProduct_pic_warp">`+
                        INTRO_IMG02+
                    `</div>`
                        

                    ProductInfo.html(ARTICLE)
                    
                


                    break;
                }


            }

           
            // 相關商品
            let rd = []

            randomProuducts(4,d,rd)
    
            // 依照商品時間排序
            originSort(rd)
    
            for(let i = 0 ; i < rd.length ;i++){ 
                // 送隨機商品上去
                EachProductsWarp.append(PRODUCT_B(rd[i]))
    
            }

        
            
            

        })



    }else{

    
        // 商品資料載入
        $.get("./static/JSON/Seafood.json", function (data) {


            $('.label03').hide()
            let d = data;
            let ProductID = parseInt(location.href.substr(-3,3));
            let ProrductTitle = $('.product_intro_title h1');
            let ProductMainPic =$('.main_product_pic img');
            let ProductPriceWarp = $('.product_intro_option_warp');
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
                    let ProductPrice = `<div class="product_intro_price">
                                    <h2>${d[i].price} / g</h2>
                                </div>`

                    ProductPriceWarp.append(ProductPrice)
                    

                    // 商品庫存

                    let Productleft = `<div class="product_left">
                                            <p>${d[i].left}</p>
                                        </div>`
                   
                    $('.product_countBtn_warp').append(Productleft)

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
                    

            
                    break;

                }

            }

            // 相關商品
            let rd = []

            randomProuducts(4,d,rd)
    
            // 依照商品時間排序
            originSort(rd)
    
            for(let i = 0 ; i < rd.length ;i++){ 
                // 送隨機商品上去
                EachProductsWarp.append(PRODUCT(rd[i]))
    
            }
        
        })



    }


    ///////////////////////////加入購物車//////////////////////

    //計算器效果
    $(".product_counter").on("mousedown mouseup",".product_countBtn_plus , .product_countBtn_minus",function(){

        $(this).toggleClass('countBtn_color').css('transition','0.3s')

    })


    if(ItemURL){

//////// 釣具用品///////
        $.get("./static/JSON/Item.json", function (data) {

            let d = data
            let ProductID = parseInt(location.href.substr(-3,3))

        
            for(let i = 0 ; i < d.length ;i++){ 


                if(ProductID == d[i].pid){
                
                    //計算器
                    //加＋＋
                    $(".product_counter").on("click",".product_countBtn_plus",function(){


                        let countNum = parseInt($(this).prev().text());

                       
                        countNum++
                        $(this).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
                            
                        

                        $(this).prev().text(countNum);

                        
                        if(countNum >= 0){
                            let countBtn_minus = $(this).prev().prev()
                            countBtn_minus.css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
                        }

                    })



                    //減--
                    $(".product_counter").on("click",".product_countBtn_minus",function(){


                        
                        let countNum = parseInt($(this).next().text());

                    

                        if(countNum <=0 ){

                            $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                            
                        }else{
                            countNum--;
                        }
                        
                    
                        $(this).next().text(countNum);

                    })

                    //單一商品頁加入購物車
                    $('.add_btn_lg').on({


                        click:function(){


                            $('.item_list').css('display','block');

                            let ITEM_LIST =  $('.item_list_warp')
                            let CartTotalPrice = $('.Cart_list_total').children('p')//購物車總金額數字
                           


                           
                            ITEM_LIST.empty()

                            let CountNum = parseInt($('.product_countNum').text())

                            if(CountNum  == 0 ){

                                alert('請選擇數量')
                                

                            }else{

                                 
                                // 商品名稱、商品價格、商品圖片、商品ID、商品庫存、商品母種類、商品子種類、商品型號、商品數量初始值、判斷是否是食物
                                let arr =[{Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_tid:d[i].type_sid,Product_sub_tid:d[i].sub_type_sid,Product_type:d[i].type,count:CountNum,food:false}]

                            
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


                                // 購物車數量
                                let old_count = parseInt( ListCount.text()) 
                                ListCount.text(old_count+ CountNum )

                                let old_count_rwd = parseInt(ListCount_RWD.text()) 
                                ListCount_RWD.text(old_count_rwd+CountNum )


                                //寫入cookie
                                if($.cookie('Cart') == null ){


                                    // 第一次加入
                                    $.cookie('Cart',JSON.stringify(arr),{expire : 1})


                                    for(let i = 0 ; i < arr.length ;i++){ 

                                        // 計算當前商品金額
                                        let nowprice = parseInt(arr[i].count) * parseInt(arr[i].Product_Price);
                                      

                                        CartProduct(arr[i])

                                        CartTotalPrice.text(nowprice)

                                       
                                    
                                    }

                                  

                                    alert('商品已加入購物車！')


                                }else{

                      
                                    let cookieStr = $.cookie('Cart')
                                    let cookieArr = JSON.parse(cookieStr);

                                    
                                    let same = false ;//假設沒有添加過商品 

                                    
                                    for(let j = 0 ; j <  cookieArr.length; j++){ 

                                        ///若有相同商品
                                        if(!cookieArr[j].food){
                                            if(ProductID == cookieArr[j].pid){


                                                same = true;

                                                cookieArr[j].count+=CountNum 

                                                CartProduct(cookieArr[j])


                                                alert('商品已加入購物車！')

                                                break;


                                            }
                                        }   
                                        




                                    }


                                    if(!same){

                                        cookieArr.push({Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_tid:d[i].type_sid,Product_sub_tid:d[i].sub_type_sid,Product_type:d[i].type,count:CountNum,food:false})


                                        
                                       
                                        
                                        for(let j = 0 ; j <  cookieArr.length; j++){


                                            // 加入釣具商品
                                            if(!cookieArr[j].food){

                                                CartProduct(cookieArr[j])

                                            }
                                           

                                        }



                                        alert('商品已加入購物車！')
    
                                        
                                    }



                                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


                                    // 購物車總金額
                                    let total_price = 0

                                    for(let j = 0 ; j <  cookieArr.length; j++){

                                        // 計算當前商品金額
                                        let nowprice = parseInt(cookieArr[j].count) * parseInt(cookieArr[j].Product_Price);
                                        total_price += nowprice;

                                        CartTotalPrice.text(total_price)
                                
                                   
                                    }
                                       



                                }


                    


                            }



                        }


                     })

                

                    


                }

            }



        })



    }else{

///////////// 海鮮商品///////////
        $.get("./static/JSON/Seafood.json", function (data) {

            let d = data
            let ProductID = parseInt(location.href.substr(-3,3))


            for(let i = 0 ; i < d.length ;i++){ 


                if(ProductID == d[i].pid){
                
                    //計算器
                    //加＋＋
                    $(".product_counter").on("click",".product_countBtn_plus",function(){


                        let countNum = parseInt($(this).prev().text());

                        if(countNum < d[i].left){
                            countNum++
                            $(this).css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
                            
                        }else{
                        alert('數量超過庫存')
                        $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                        }

                        $(this).prev().text(countNum);

                        
                        if(countNum >= 0){
                            let countBtn_minus = $(this).prev().prev()
                            countBtn_minus.css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')
                        }

                    })



                    //減--
                    $(".product_counter").on("click",".product_countBtn_minus",function(){


                        
                        let countNum = parseInt($(this).next().text());

                    

                        if(countNum <=0 ){

                            $(this).css('border','solid 1px rgba(0, 0, 0, 0.1)').css('color','rgba(0, 0, 0, 0.1);')
                            
                        }else if(countNum <= d[i].left){
                            countNum--;
                            let addBtn = $(this).next().next()
                            addBtn.css('border','solid 1px rgba(0, 0, 0, 0.3)').css('color','rgba(0, 0, 0, 0.3);')

                        }
                        else{
                            countNum--;
                        }
                        
                    
                        $(this).next().text(countNum);

                    })




                    //單一商品頁加入購物車
                     $('.add_btn_lg').on({


                        click:function(){

                            $('.seafood_list').css('display','block');
                            
                            let CartTotalPrice = $('.Cart_list_total').children('p')//購物車總金額數字
                            let SEAFOOD_LIST =  $('.seafood_list_warp')

                            SEAFOOD_LIST.empty()
                           

                            let CountNum = parseInt($('.product_countNum').text())

                            if(CountNum  == 0 ){

                                alert('請選擇數量')
                                

                            }else{


                         
                                // 商品名稱、商品價格、商品圖片、商品ID、商品庫存、商品型號、商品數量初始值、判斷是否是食物
                                let arr =[{Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,count:CountNum ,food:true}]


                            
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


                                // 購物車數量
                                let old_count = parseInt( ListCount.text()) 
                                ListCount.text(old_count+ CountNum )

                                let old_count_rwd = parseInt(ListCount_RWD.text()) 
                                ListCount_RWD.text(old_count_rwd+CountNum )


                                //寫入cookie
                                if($.cookie('Cart') == null ){


                                    // 第一次加入
                                    $.cookie('Cart',JSON.stringify(arr),{expire : 1})


                                    for(let i = 0 ; i < arr.length ;i++){ 

                                        // 計算當前商品金額
                                        let nowprice = parseInt(arr[i].count) * parseInt(arr[i].Product_Price);
                                      

                                        CartProduct(arr[i])

                                        CartTotalPrice.text(nowprice)
                                    
                                    }

                                  

                                    alert('商品已加入購物車！')


                                }else{

                      
                                    let cookieStr = $.cookie('Cart')
                                    let cookieArr = JSON.parse(cookieStr);

                                    
                                    let same = false ;//假設沒有添加過商品 

                                    
                                    for(let j = 0 ; j <  cookieArr.length; j++){ 

                                        ///若有相同商品
                                        if(cookieArr[j].food){

                                            if(ProductID == cookieArr[j].pid){


                                                same = true;
    
                                        
    
                                                cookieArr[j].count+=CountNum 
    
                                                CartProduct(cookieArr[j])
    
    
                                                alert('商品已加入購物車！')
    
                                                break;
    
    
                                            }

                                        }
                                       

                                    }


                                    if(!same){

                                        cookieArr.push({Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,count:CountNum ,food:true})



                                        for(let j = 0 ; j <  cookieArr.length; j++){


                                            // 加入釣具商品
                                            if(cookieArr[j].food){

                                                CartProduct(cookieArr[j])

                                            }

                                        }



                                        alert('商品已加入購物車！')
    
                                        
                                        
                                    }



                                    $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})

                                    let total_price = 0

                                    for(let j = 0 ; j <  cookieArr.length; j++){

                                        // 計算當前商品金額
                                        let nowprice = parseInt(cookieArr[j].count) * parseInt(cookieArr[j].Product_Price);
                                        total_price += nowprice;

                                        CartTotalPrice.text(total_price)
                                
                                   
                                    }



                                }


                    


                            }



                        }


                     })

                
                }

            }



        })
    }




     

     

    





    $('.label01').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')
            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent')

            $('.IntroProduct_content_warp').fadeIn(500)
            $('.Product_intro_team').fadeOut(1)
            $('.Brand_Story').fadeOut(1)
            
        }



    })

    $('.label02').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')

            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent');

            $('.Brand_Story').fadeOut(1)
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



            $('.Brand_Story').fadeIn(500)
            $('.IntroProduct_content_warp').fadeOut(1)
            $('.Product_intro_team').fadeOut(1)

        }



    })

    $('.label04').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')

            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent')


        }



    })



});