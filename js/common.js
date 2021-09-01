'use strict'

// 生鮮商品架構
function PRODUCT(p){
     // 商品標籤
    let PRODUCTTAG = ` `;

    function productTag(p) {

        let tagName = " ";

        let ProductTIME = new Date(p.create_at).getMonth();

        let nowTIME = new Date().getMonth();


        if(ProductTIME == nowTIME){
            //判斷新商品
            tagName = "NEW"
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`

        }else if(p.hot == true){
            //判斷熱銷商品
            tagName = "熱銷";
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`
            

        }else if(p.vip == true){
            //判斷官網限定
            tagName =  "官網限定";
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`


        }else{
            PRODUCTTAG = ` `;
        }

    }

    //商品ID三位數
    function productID(p) {

        if(p.pid < 10){ 

            let num ='00'+p.pid;

            return num

        }
        else if(p.pid < 100){

            let num ='0'+p.pid;

            return num

        }else{
            let num = p.id
            return num

        }

    }

    //判斷商品是否有庫存
    let PRODUCTDETAIL = ` `
    function productDetail(p) {

        let ProductLeft = p.left;

        ProductLeft == 0 ? PRODUCTDETAIL = `<p class="sold">已售完</p>`:PRODUCTDETAIL = `<p>NT ${p.price}  / 公斤</p>`;

        
    }

    productTag(p)
    productDetail(p)
    let PRODUCTID  =  productID(p)

     // 商品架構生成
    let PRODUCT = ``;

    if(p.left==0){

        PRODUCT = `
            <div class="product p-0 col-lg-3 col-md-4 col-6  animate__animated animate__fadeIn">
                    <div class="product_intro empty_product">`+ PRODUCTTAG+
                        `<div class="product_pic">
                            <a href="../html/each-product.html?S&&pid=`+PRODUCTID+`">
                            <img src="${p.pic[0]}" alt="">
                            </a>
                        </div> 
                        <a href="../html/each-product.html?S&&pid=`+PRODUCTID+`">
                            <div class="product_title">
                                <h3>${p.name}</h3>
                            </div>  
                        </a>  
                    </div>
                    <div class="product_detail">` 
                            + PRODUCTDETAIL+
        
                        `</div> 
                        
            </div>`;

    }else{

        PRODUCT = `
        <div class="product p-0 col-lg-3 col-md-4 col-6 animate__animated animate__fadeIn">
        <div class="product_intro">`+PRODUCTTAG+
                    `<div class="add_btn">
                        <i class="fas fa-cart-plus"></i>
                    </div>
                    <div class="product_pic">
                        <a href="../html/each-product.html?S&&pid=`+PRODUCTID+`">
                        <img src="${p.pic[0]}" alt="">
                        </a>
                    </div> 
                    <a href="../html/each-product.html?S&&pid=`+PRODUCTID+`">
                        <div class="product_title">
                            <h3>${p.name}</h3>
                        </div>  
                    </a>  
                </div>
                <div class="product_detail">` 
                        +PRODUCTDETAIL+
    
                    `</div> 
                    
        </div>`


    }

    return PRODUCT;

}

//釣具商品架構
function PRODUCT_B(p){
     // 商品標籤
    let PRODUCTTAG = ` `;

    function productTag(p) {

        let tagName = " ";

        let ProductTIME = new Date(p.create_at).getMonth();

        let nowTIME = new Date().getMonth();


        if(ProductTIME == nowTIME){
            //判斷新商品
            tagName = "NEW"
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`

        }else if(p.hot == true){
            //判斷熱銷商品
            tagName = "熱銷";
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`
            

        }else if(p.vip == true){
            //判斷官網限定
            tagName =  "官網限定";
            PRODUCTTAG = `<div class="product_tag">${tagName}</div>`


        }else{
            PRODUCTTAG = ` `;
        }

    }

    //商品ID三位數
    function productID(p) {

        if(p.pid < 10){ 

            let num ='00'+p.pid;

            return num

        }
        else if(p.pid < 100){

            let num ='0'+p.pid;

            return num

        }else{
            let num = p.id
            return num

        }

    }

    //判斷商品是否有庫存
    let PRODUCTDETAIL = ` `
    function productDetail(p) {

        let ProductLeft = p.left;

        ProductLeft == 0 ? PRODUCTDETAIL = `<p class="sold">已售完</p>`:PRODUCTDETAIL = `<p>NT ${p.price} </p>`;

        
    }

    productTag(p)
    productDetail(p)
    let PRODUCTID  =  productID(p)

     // 商品架構生成
    let PRODUCT = ``;

    if(p.left==0){

        PRODUCT = `
            <div class="product p-0 col-lg-3 col-md-4 col-6  animate__animated animate__fadeIn">
                    <div class="product_intro empty_product">`+ PRODUCTTAG+
                        `<div class="product_pic">
                            <a href="../html/each-product.html?I&&pid=`+PRODUCTID+`">
                            <img src="${p.pic[0]}" alt="">
                            </a>
                        </div> 
                        <a href="../html/each-product.html?I&&pid=`+PRODUCTID+`">
                            <div class="product_title">
                                <h3>${p.name}</h3>
                            </div>  
                        </a>  
                    </div>
                    <div class="product_detail">` 
                            + PRODUCTDETAIL+
        
                        `</div> 
                        
            </div>`;

    }else{

        PRODUCT = `
        <div class="product p-0 col-lg-3 col-md-4 col-6 animate__animated animate__fadeIn">
        <div class="product_intro">`+PRODUCTTAG+
                    `<div class="add_btn">
                        <i class="fas fa-cart-plus"></i>
                    </div>
                    <div class="product_pic">
                        <a href="../html/each-product.html?I&&pid=`+PRODUCTID+`">
                        <img src="${p.pic[0]}" alt="">
                        </a>
                    </div> 
                    <a href="../html/each-product.html?I&&pid=`+PRODUCTID+`">
                        <div class="product_title">
                            <h3>${p.name}</h3>
                        </div>  
                    </a>  
                </div>
                <div class="product_detail">` 
                        +PRODUCTDETAIL+
    
                    `</div> 
                    
        </div>`


    }

    return PRODUCT;

}

// 回歸原始商品排序
function originSort(p) {
    // 由剩餘數量來排序,並按照id排序
    p = p.sort(function (a, b) {

        return b.left - a.left || a.pid - b.pid;

    })
    return p;
    
}

// 商品依熱銷排序
function hotSort(p) {

    p = p.sort(function (a, b) {
        return b.left - a.left || b.hot - a.hot
    })
    return p;
}

//商品依最新時間排序
function timeSort(p) {

    // 將時間轉成秒數
    function newTime(time){
        let newtime = new Date(time.create_at).getTime();
        return newtime
    
    }

    // 新秒數存入物件 
    for(let i = 0 ; i < p.length ; i++){

        p[i].newTime = newTime(p[i]);
        
    }

    // 由商品建立時間排序
    p.sort(function(a, b) {
        return b.left - a.left || b.newTime - a.newTime ;
    });

    return p
    
}

// 商品依價格高到低來排序
function priceUpSort(p) {

    p = p.sort(function (a, b) {
        return b.left - a.left || b.price - a.price;
    })
    return p;
}

// 商品依價格低到高來排序
function priceDownSort(p) {

    p = p.sort(function (a, b) {
        return b.left - a.left || a.price - b.price;
    })
    return p;
}


//商品隨機產生
function randomProuducts(num,p,rp){

    let newArr = []

    // 先抓還有庫存的商品  
    for(let i = 0 ; i < p.length ;i++){  

        if(p[i].left != 0 || typeof p[i].left != 'number'){


            newArr.push(p[i])
            
    
        }

    }

    // 在抓指定數目的亂數
    for(let j = 0 ; j < num ; j++){ 

        let ran = Math.floor(Math.random() * (newArr.length - j)); 

        if(rp.includes(newArr[ran]) ){ 
            continue; 
        } 

        rp.push(newArr[ran]); 

        newArr[ran] = newArr[newArr.length - j - 1];     
        

    }

    return rp

}




// 商品加入購物車效果
let PROPUCTSWARP = $('.products_warp')

PROPUCTSWARP.on("mouseenter",".add_btn",function(){

    $(this).addClass('Bounce')

})

PROPUCTSWARP.on("mouseleave",".add_btn",function(){

    $(this).removeClass('Bounce')

})

///////////////////加入購物車/////////////

PROPUCTSWARP.on("click",".add_btn",function(){

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
    

})





//////文章頁標籤效果//////

$('.artical_tag').on({

    mouseenter: function () {


        $(this).children('.artical_tag_outline').css('border','solid 1px #dc7e00')

        $(this).children('.artical_tag_outline').children('p').css('color','#dc7e00')


    },

    mouseleave: function () {

        $(this).children('.artical_tag_outline').css('border','solid 1px var(--sea_blue)')

        $(this).children('.artical_tag_outline').children('p').css('color','var(--sea_blue)')

    }


})



////////商品列效果////////
if ($(window).width() >= 992) {

    $(".product").on({

        mouseenter: function () {

            
            $(this).children().children('.product_title').css('border','solid 0.1px transparent').css('border-top','solid 0.1px rgba(173, 173, 173, 0.5)')

            $(this).children().children('.product_pic').css('border-top','solid 0.1px transparent').css('border-right','solid 0.1px transparent').css('border-left','solid 0.1px transparent')

            

        },
        mouseleave: function () {

            
            $(this).children().children('.product_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')


            $(this).children().children('.product_pic').css('border-top','solid 0.1px rgba(173, 173, 173, 0.5)').css('border-right','solid 0.1px rgba(173, 173, 173, 0.5)').css('border-left','solid 0.1px rgba(173, 173, 173, 0.5)')

            

        

        }
    })



}

// Q&A
if ($(window).width() <  992){

    $('.question_icon').click(function(){
        
        $( this ).toggleClass( 'minus' );
        $( this ).parent().parent('.question').toggleClass( 'answer_open_RWD' );
    })

    $('.question_title h3').click(function(){
        
        $( this ).parent().parent('.question').toggleClass( 'answer_open' )
    })

}


if ($(window).width() >= 992){

    $('.question_icon').click(function(){
        
        $( this ).toggleClass( 'minus' );
        $( this ).parent().parent('.question').toggleClass( 'answer_open' )
    })

    $('.question_title h3').click(function(){
        
        $( this ).parent().parent('.question').toggleClass( 'answer_open' )
    })
}

