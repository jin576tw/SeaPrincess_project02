'use strict'

$(document).ready(function () {

    let ItemURL = location.href.substr(-10,1) == "I";

    let EachProductsWarp = $('.Each_products_warp')

    ///////////////////////釣具商品載入////////////////////////////////
    if(ItemURL){

        $.get("./static/JSON/Item.json", function (data) {

            $('.label02').hide()
            $('.recipe_recommand').hide()

            $('.product_discount p').text("釣具用品滿1500享免運折扣")

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

                    let ARTICLE = d[i].intro
                    ProductInfo.html(ARTICLE)

                    // // 第一段文字
                    // let P01_CONTENT =``

                    // //若沒內容，就不顯示
                    // if(d[i].intro.p01 == ''){

                    //     P01_CONTENT = ``

                    // }else{
                
                    //     for(let j = 0 ; j<d[i].intro.p01.length;j++){


                    //         let p01_str = `<p>${d[i].intro.p01[j]}</p>`

                    //         P01_CONTENT +=p01_str

                    //     }
                    // }


                    // //第一段圖片
                    // let INTRO_IMG01 = ``

                    // if(d[i].intro.img01 == ''){

                    //     INTRO_IMG01 = ``

                    // }else{

                    //     for(let j = 0 ; j<d[i].intro.img01.length;j++){

                    //         let img01_data = `<div class="IntroProduct_Item_pic">
                    //                             <img src="${d[i].intro.img01[j]}" alt="">
                    //                         </div>`
                            

                    //         INTRO_IMG01+=img01_data
                            

                    //     }
                    // }


                    // // 第二段文字
                    // let P02_CONTENT =``

                    // if(d[i].intro.p02 == ''){

                    //     P02_CONTENT = ``

                    // }else{

                    //     for(let j = 0 ; j<d[i].intro.p02.length;j++){


                    //         let p02_str = `<p>${d[i].intro.p02[j]}</p>`

                    //         P02_CONTENT +=p02_str

                    //     }
                    // }

                    // //第二段圖片
                    // let INTRO_IMG02 = ``
                    // if(d[i].intro.img02 == ''){

                    //     INTRO_IMG02 = ``

                    // }else{


                    //     for(let j = 0 ; j<d[i].intro.img02.length;j++){


                    //         let img02_data = `<div class="IntroProduct_Item_pic">
                    //                             <img src="${d[i].intro.img02[j]}" alt="">
                    //                             </div>`
                            
        
                    //         INTRO_IMG02+=img02_data
        
                    //     }
                    // }
        
                
                    // let ARTICLE =  
                    // P01_CONTENT+
                    // `<div class="IntroProduct_pic_warp">`+
                    //     INTRO_IMG01+
                    // `</div>`+
                    // P02_CONTENT+
                    // `<div class="IntroProduct_pic_warp">`+
                    //     INTRO_IMG02+
                    // `</div>`
                        

                    // ProductInfo.html(ARTICLE)
                    
                


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

            $('.product_discount p').text("生鮮魚貨/海鮮魚箱滿2000享免運折扣")

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
                    let Productleft = ``

                    //小於10顯示
                    if(d[i].left <= 10){

                        Productleft = `<div class="product_left">
                                            <p>${d[i].left}</p>
                                        </div>`


                    }else{

                        Productleft =``

                    }
                   
                   
                    $('.product_counter').append(Productleft)

                    if(d[i].left==0){

                        let SoldOut =`<p>已售完</p>`
                        AddBtnLG.html(SoldOut)
            
                        AddBtnLG.attr('disabled', true).css('background-color','#dedede').children('p').css('color','#aaaaaa')

                        

                    }else{
                        AddBtnLG.attr('disabled', false).css('background-color','#a42021')

                    }
                    


                    // 商品描述
                    let ARTICLE = d[i].intro

                    ProductInfo.html(ARTICLE)


                    // // 第一段文字
                    // let P01_CONTENT =``

                    // //若沒內容，就不顯示
                    // if(d[i].intro.p01 == ''){

                    //     P01_CONTENT = ``

                    // }else{
                
                    //     for(let j = 0 ; j<d[i].intro.p01.length;j++){


                    //         let p01_str = `<p>${d[i].intro.p01[j]}</p>`

                    //         P01_CONTENT +=p01_str

                    //     }
                    // }


                    // //第一段圖片
                    // let INTRO_IMG01 = ``

                    // if(d[i].intro.img01 == ''){

                    //     INTRO_IMG01 = ``

                    // }else{

                    //     for(let j = 0 ; j<d[i].intro.img01.length;j++){

                    //         let img01_data = `<div class="IntroProduct_pic">
                    //                             <img src="${d[i].intro.img01[j]}" alt="">
                    //                         </div>`
                            

                    //         INTRO_IMG01+=img01_data
                            

                    //     }
                    // }


                    // // 第二段文字
                    // let P02_CONTENT =``

                    // if(d[i].intro.p02 == ''){

                    //     P02_CONTENT = ``

                    // }else{

                    //     for(let j = 0 ; j<d[i].intro.p02.length;j++){


                    //         let p02_str = `<p>${d[i].intro.p02[j]}</p>`

                    //         P02_CONTENT +=p02_str

                    //     }
                    // }

                    // //第二段圖片
                    // let INTRO_IMG02 = ``
                    // if(d[i].intro.img02 == ''){

                    //     INTRO_IMG02 = ``

                    // }else{


                    //     for(let j = 0 ; j<d[i].intro.img02.length;j++){


                    //         let img02_data = `<div class="IntroProduct_pic">
                    //                             <img src="${d[i].intro.img02[j]}" alt="">
                    //                             </div>`
                            
        
                    //         INTRO_IMG02+=img02_data
        
                    //     }
                    // }
        
                
                    // let ARTICLE =  
                    // `<h2>${d[i].name}</h2>`+
                    // P01_CONTENT+
                    // `<div class="IntroProduct_pic_warp">`+
                    //     INTRO_IMG01+
                    // `</div>`+
                    // P02_CONTENT+
                    // `<div class="IntroProduct_pic_warp">`+
                    //     INTRO_IMG02+
                    // `</div>`
                        
                    
                    // ProductInfo.html(ARTICLE)
                    

            
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


        // 食譜推薦    
        $.get("./static/JSON/recipe.json", function (data) {

            let RecipeList = $('.Blog_cate_content_warp')

            let d = data;
        
            let rd = []
        
            randomProuducts(4,d,rd)
        
            // 依照先後排序
            timeSort(rd)
        
            for(let i = 0 ; i < rd.length ;i++){ 
        
                // 食譜載入
                RecipeList.append(Blog_artical_B(rd[i]))
        
        
                
        
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




    // 圖片輪播
    let EachProductPic = $('.Each_product_pic_warp')
    let ProductPicWarp = $('.other_product_pic_warp')

    let num = 0;

     //按鈕效果
     EachProductPic.on("mousedown mouseup",".forward_btn",function(){

        $(this).toggleClass('forward_btn_click').css('transition','0.3s')

    })
     

    EachProductPic.on("click",".forward_btn",function(){
       
        num += 1

        let pic_length =  ProductPicWarp.children().length
       
        if(num > pic_length -1 ){

            num = 0 
        }


       $('.other_product_pic').eq(num).css('opacity','1').siblings('.other_product_pic').css('opacity','0.5')
       
       let nowPic = $('.other_product_pic').eq(num).children().attr('src')

      
       $('.main_product_pic img').attr('src',nowPic)

       if ($(window).width() > 1024) {

        ProductPicWarp.css('transform','translateX(-'+num*140+'px)')

        
       }

       if ($(window).width() <= 1024) {

        ProductPicWarp.css('transform','translateX(-'+num*105+'px)')


       }
        
        
        
    })


    EachProductPic.on("click",".other_product_pic",function(){

        num = $(this).index();

        $(this).css('opacity','1').siblings('.other_product_pic').css('opacity','0.5')

        let nowPic = $(this).children('img').attr('src')
    
        $('.main_product_pic img').attr('src',nowPic)
    
    })



    

  


    // 介紹選擇
    $('.label01').on({

        click:function(){

          
            $(this).css('border','solid 1px rgba(23, 34, 61, 0.3)').css('border-bottom','1px solid white')
            $(this).children('h1').css('border-bottom',' 2px solid #abd5e3').css('color','rgba(23, 34, 61, 0.8)')
            $(this).siblings().css('border','solid 1px transparent')
            $(this).siblings().children('h1').css('color','#aaaaaa').css('border-bottom','transparent')

            $('.IntroProduct_content_warp').fadeIn(500)
            $('.Product_intro_team').fadeOut(1)
            $('.Brand_Story').fadeOut(1)

            $('.title_line01').css('height','0%')
            
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


            $('.title_line01').css('height','100%')


            let titleIn = `animate__animated animate__fadeInRight`

            let PicMove = `animate__animated animate__pulse`

            let fadeIn = `animate__animated animate__fadeIn`

            let Finsish = `animate__animated animate__heartBeat`

            $(window).scroll(function () {

                let scrollNow = $(window).scrollTop();
            
             

                
                // 手機版
                if($(window).width() <= 767){

                     // 海釣團隊介紹
                     if(scrollNow >= 1535){

                        $('.team_intro02').css('opacity','1').css('transition','0.8s')


                        $('.title_line02').css('height','100%')

                        $('.teamtitle02 p').addClass(titleIn)

                        $('.pic_warp02').addClass(PicMove)

                        $('#intro_text02').addClass(fadeIn)


                     }else{

                        $('.team_intro02').css('opacity','0.2').css('transition','0.8s')

                        $('.title_line02').css('height','0%')


                        $('.teamtitle02 p').removeClass(titleIn)

                        $('.pic_warp02').removeClass(PicMove)

                        $('#intro_text02').removeClass(fadeIn)


                    }

                    if(scrollNow >= 2005){


                        $('.team_intro03').css('opacity','1').css('transition','0.8s')

                        $('.title_line03').css('height','100%')

                        $('.teamtitle03 p').addClass(titleIn)

                        $('.pic_warp03').addClass(PicMove)

                        $('#intro_text03').addClass(fadeIn)




                    }else{


                        $('.team_intro03').css('opacity','0.2').css('transition','0.8s')

                        $('.title_line03').css('height','0%')


                        $('.teamtitle03 p').removeClass(titleIn)

                        $('.pic_warp03').removeClass(PicMove)

                        $('#intro_text03').removeClass(fadeIn)


                    }

                    //魚貨流程
                    if(scrollNow >= 2452){

                        $('.About_Items').css('opacity','1').css('transition','0.8s')

                    }else{
                        $('.About_Items').css('opacity','0.2').css('transition','0.8s')

                    }


                    let Line = $('.step_line_success')

                   

                    if(scrollNow >= 2950){

                        $('.steps01').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.6s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.6s')




                        Line.css('height','20%')


                    }else{
                        $('.steps01').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        Line.css('height','0%')
                    }



                    if(scrollNow >= 3545){


                        $('.steps02').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.6s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.6s')


                        Line.css('height','40%')



                    }

                    if(scrollNow >= 4120){
                        $('.steps03').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.6s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.6s')


                        Line.css('height','60%')

                    }

                    if(scrollNow >= 4755){
                        $('.steps04').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.6s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.6s')


                        Line.css('height','80%')

                    }
                    if(scrollNow >= 5396){
                        $('.steps05').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.6s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.6s')


                        Line.css('height','98%')

                    }

                    if(scrollNow >= 5695){

                        Line.css('height','100%')

                        $('.final_dot').css('transition','0.2s').css('transform','scale(2)').css('filter','grayscale(0%)').css('background-color','rgb(90, 167, 0)')


                        $('.finish_arrow').addClass(Finsish)


                    }else{


                        $('.final_dot').css('transition','0.2s').css('transform','scale(1)').css('filter','grayscale(80%)')

                        $('.finish_arrow').removeClass(Finsish)

                    }






                }



                if ($(window).width() > 767) {
        
                    // 海釣團隊介紹
                    if(scrollNow >= 970){
            
            
                        $('.team_intro02').css('opacity','1').css('transition','0.8s')

                        $('.title_line02').css('height','70%')
            

                        $('.teamtitle02 p').addClass(titleIn)

                        $('.pic_warp02').addClass(PicMove)

                        $('#intro_text02').addClass(fadeIn)

                    }else{

                        $('.team_intro02').css('opacity','0.2').css('transition','0.8s')

                        $('.title_line02').css('height','0%')


                        $('.teamtitle02 p').removeClass(titleIn)

                        $('.pic_warp02').removeClass(PicMove)

                        $('#intro_text02').removeClass(fadeIn)


                    }

                    if(scrollNow >= 1405){

                        $('.team_intro03').css('opacity','1').css('transition','0.8s')

                        $('.title_line03').css('width','100%')

                        $('.teamtitle03 p').addClass(titleIn)

                        $('.pic_warp03').addClass(PicMove)

                        $('#intro_text03').addClass(fadeIn)

                
                    }else{


                        $('.team_intro03').css('opacity','0.2').css('transition','0.8s')

                        $('.title_line03').css('width','0%')


                        $('.teamtitle03 p').removeClass(titleIn)

                        $('.pic_warp03').removeClass(PicMove)

                        $('#intro_text03').removeClass(fadeIn)


                    }
                    //魚貨流程
                    if(scrollNow >= 1780){


                        $('.About_Items').css('opacity','1').css('transition','0.8s')
        
        
        
                    }else{
                        $('.About_Items').css('opacity','0.2').css('transition','0.8s')

                    }

                    let Arrow = $('.dot_arrow')
                    let Line = $('.step_line_success')

                    if(scrollNow >= 2040){


                        $('.steps01').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.4s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot01').css('transition','0.4s').css('transform','scale(1.8)').siblings('.step_dot').css('transition','0.4s').css('transform','scale(1)')

                        Arrow.css('transform','translateY(210px)')

                        Line.css('height','11.5%')

                        $('.start_dot').css('transform','scale(1)')

                    }else{

                        Arrow.css('transform','translateY(0px)')

                        Line.css('height','0%')


                        $('.start_dot').css('transform','scale(1.8)')


                        $('.steps01').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot01').css('transition','0.4s').css('transform','scale(1)')

                    }

                    if(scrollNow >= 2594){


                        $('.steps02').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.4s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot02').css('transition','0.4s').css('transform','scale(1.8)').parent().siblings('.food_steps').children('.step_dot').css('transition','0.4s').css('transform','scale(1)')


                        Arrow.css('transform','translateY(600px)')

                        Line.css('height','31%')


                    }

                    if(scrollNow >= 2928){

                        


                        $('.steps03').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.4s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot03').css('transition','0.4s').css('transform','scale(1.8)').parent().siblings('.food_steps').children('.step_dot').css('transition','0.4s').css('transform','scale(1)')

                        Arrow.css('transform','translateY(980px)')

                        Line.css('height','50.5%')





                    }

                    if(scrollNow >= 3284){

                   


                        $('.steps04').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.4s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot04').css('transition','0.4s').css('transform','scale(1.8)').parent().siblings('.food_steps').children('.step_dot').css('transition','0.4s').css('transform','scale(1)')

                        Arrow.css('transform','translateY(1360px)')

                        Line.css('height','69.5%')





                    }

                    if(scrollNow >= 3600){

                      
                        $('.steps05').css('transform','scale(1)').css('filter','grayscale(0%)').css('transition','0.4s').siblings('.food_steps').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')

                        $('.step_dot05').css('transition','0.4s').css('transform','scale(1.8)').parent().siblings('.food_steps').children('.step_dot').css('transition','0.4s').css('transform','scale(1)')

                        Arrow.css('transform','translateY(1740px)')

                        Line.css('height','89%')





                    }


                    if(scrollNow >= 3900){

                        $('.steps04').css('transform','scale(0.8)').css('filter','grayscale(80%)').css('transition','0.4s')
                        $('.step_dot04').css('transition','0.4s').css('transform','scale(1)')


                        $('.final_dot').css('transition','0.2s').css('transform','scale(2)').css('filter','grayscale(0%)').css('background-color','rgb(90, 167, 0)')


                       $('.finish_arrow').addClass(Finsish)
                      

                        Line.css('height','100%')

                    }else{

                        $('.final_dot').css('transition','0.2s').css('transform','scale(1)').css('filter','grayscale(80%)')

                        $('.finish_arrow').removeClass(Finsish)

                    }
                    
        
                }
            
            })

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


    // if ($(window).width() > 1024) {
        
    //     $(window).scroll(function () {

    //         let scrollNow = $(window).scrollTop();
        
    //      


           
        
        
        
    //     })


    // }
   




});