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

        ProductLeft == 0 ? PRODUCTDETAIL = `<p class="sold">已售完</p>`:PRODUCTDETAIL = `<p class="S_price">${p.price}</p>`;

        
    }

    productTag(p)
    productDetail(p)
    let PRODUCTID  =  productID(p)

     // 商品架構生成
    let PRODUCT = ``;

    if(p.left==0){

        PRODUCT = `
            <div class="product p-0 col-lg-3 col-md-4 col-6  animate__animated animate__fadeIn" Product-ID=${p.pid} food="true" >
                    <div class="product_intro empty_product">`+ PRODUCTTAG+
                        `<div class="product_pic">
                            <a href="./each-product.html?S&&pid=`+PRODUCTID+`">
                            <img src="${p.pic[0]}" alt="">
                            </a>
                        </div> 
                        <a href="./each-product.html?S&&pid=`+PRODUCTID+`">
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
        <div class="product p-0 col-lg-3 col-md-4 col-6 animate__animated animate__fadeIn" Product-ID=${p.pid} food="true">
        <div class="product_intro">`+PRODUCTTAG+
                    `<div class="add_btn" id="add_seafood" >
                        <i class="fas fa-cart-plus"></i>
                    </div>
                    <div class="product_pic">
                        <a href="./each-product.html?S&&pid=`+PRODUCTID+`">
                        <img src="${p.pic[0]}" alt="">
                        </a>
                    </div> 
                    <a href="./each-product.html?S&&pid=`+PRODUCTID+`">
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

        ProductLeft == 0 ? PRODUCTDETAIL = `<p class="sold">已售完</p>`:PRODUCTDETAIL = `<p class="I_price">${p.price} </p>`;

        
    }

    productTag(p)
    productDetail(p)
    let PRODUCTID  =  productID(p)

     // 商品架構生成
    let PRODUCT = ``;

    if(p.left==0){

        PRODUCT = `
            <div class="product p-0 col-lg-3 col-md-4 col-6  animate__animated animate__fadeIn" Product-ID=${p.pid} food="false">
                    <div class="product_intro empty_product">`+ PRODUCTTAG+
                        `<div class="product_pic">
                            <a href="./each-product.html?I&&pid=`+PRODUCTID+`">
                            <img src="${p.pic[0]}" alt="">
                            </a>
                        </div> 
                        <a href="./each-product.html?I&&pid=`+PRODUCTID+`">
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
        <div class="product p-0 col-lg-3 col-md-4 col-6 animate__animated animate__fadeIn" Product-ID=${p.pid} food="false">
        <div class="product_intro">`+PRODUCTTAG+
                    `<div class="add_btn" id="add_item">
                        <i class="fas fa-cart-plus"></i>
                    </div>
                    <div class="product_pic">
                        <a href="./each-product.html?I&&pid=`+PRODUCTID+`">
                        <img src="${p.pic[0]}" alt="">
                        </a>
                    </div> 
                    <a href="./each-product.html?I&&pid=`+PRODUCTID+`">
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

// 文章架構
function Blog_artical(a) {

    // 文章標籤
    let TagList =``
    for(let j =0 ;j < a.tag.length ; j++){

       let articleTag = 
       `<div class="artical_tag p-0">
           <div class="artical_tag_outline"><p>${a.tag[j]}</p></div>
       </div>`

       TagList += articleTag;
       // DairyTag.append(articleTag)


   }

   //文章ID三位數
   function articleID(a) {

       if(a.aid < 10){ 

           let num ='00'+a.aid;

           return num

       }
       else if(a.aid < 100){

           let num ='0'+a.aid;

           return num

       }else{
           let num = a.aid
           return num

       }

   }

   let ArticleID = articleID(a)
  

   let Blog_artical =`
   <div class="Blog_artical diary_artical col-lg-3 col-md-3 col-12 p-0">

           <div class="Blog_artical_pic">
               <a href="./articale.html?D&&aid=`+ArticleID 
               +
               `">
                   <img src="${a.cover}" alt="">
               </a>
           </div>

          
           <div class="Blog_artical_title">
               <a href="./articale.html?D&&aid=`+ArticleID +`">
               <p>${a.title}</p>
               </a>
           </div>
           <div class="Blog_artical_author">
               <div class="artical_author_pic">
                   <i class="fas fa-user-circle"></i>
               </div>
               <div class="artical_author_name">
                  ${a.user}
               </div>
           </div>
           <div class="Blog_artical_tags Tags_list m-0 ">`+TagList+`</div>
       </div>`;


   return Blog_artical


}

// 食譜架構
function Blog_artical_B(a) {

    // 文章標籤
    let TagList =``
    for(let j =0 ;j < a.tag.length ; j++){

       let articleTag = 
       `<div class="artical_tag p-0">
           <div class="artical_tag_outline"><p>${a.tag[j]}</p></div>
       </div>`

       TagList += articleTag;
       // DairyTag.append(articleTag)


   }

   //文章ID三位數
   function articleID(a) {

       if(a.aid < 10){ 

           let num ='00'+a.aid;

           return num

       }
       else if(a.aid < 100){

           let num ='0'+a.aid;

           return num

       }else{
           let num = a.aid
           return num

       }

   }

   let ArticleID = articleID(a)
  

   let Blog_artical =`
   <div class="Blog_artical recipe_artical col-lg-3 col-md-3 col-12 p-0">

           <div class="Blog_artical_pic">
               <a href="./articale.html?R&&aid=`+ArticleID 
               +
               `">
                   <img src="${a.cover}" alt="">
               </a>
           </div>

          
           <div class="Blog_artical_title">
               <a href="./articale.html?R&&aid=`+ArticleID +`">
               <p>${a.title}</p>
               </a>
           </div>
           <div class="Blog_artical_author">
               <div class="artical_author_pic">
                   <i class="fas fa-user-circle"></i>
               </div>
               <div class="artical_author_name">
                  ${a.user}
               </div>
           </div>
           <div class="Blog_artical_tags Tags_list m-0 ">`+TagList+`</div>
       </div>`;


   return Blog_artical


}


// 回歸原始商品排序
function originSort(p) {
    // 由剩餘數量來排序,並按照id大到小排序
    p = p.sort(function (a, b) {

        return b.left - a.left || b.pid - a.pid;

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


//navbar購物車商品架構
function CartProduct(arr){

    let SEAFOOD_LIST =  $('.seafood_list_warp')
    let ITEM_LIST =  $('.item_list_warp')
    let FISHBOX_LIST =  $('.fishbox_list_warp')


    
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

    let PID = productID(arr)

    // 計算當前商品金額
    let nowprice = parseInt(arr.count) * parseInt(arr.Product_Price);

    let isFood = arr.food;
    // 是否為食物
    if(isFood){

        let Seafood_product =`<div class="Cart_list_item" Product-ID="${arr.pid}" food="${arr.food}">

            <div class="list_item_pic">
                <a href="./each-product.html?S&&pid=${PID}">
                    <img src="${arr.Product_Pic}" alt="">
                </a>
            </div>

            <div class="list_item_intro">

                <div class="list_item_title">
                    <a href="./each-product.html?S&&pid=${PID}">
                        <h1>${arr.Product_Name}</h1>
                    </a>
                </div>


                <div class="list_item_detail">
    
                    <div class="Counter">
                        <div class="countBtn countBtn_minus">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="countNum">${arr.count}</div>
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


        SEAFOOD_LIST.append(Seafood_product);

      
    
        
    }else if(arr.fishbox){//若為鮮魚箱


        // 料理習慣
        let cooktype = arr.Product_cook.join('、')

        // 魚箱資訊
        let box_detail =`${arr.Product_Price}元 / ${arr.Product_qty} / ${cooktype}`
        

    
        let Fishbox_product =`<div class="Cart_list_item" Product-ID="${arr.pid}" fishbox="${arr.fishbox}">

            <div class="list_item_pic">
                <a href="./fishbox.html">
                    <img src="${arr.Product_Pic}" alt="">
                </a>
            </div>

            <div class="list_item_intro">

                <div class="list_item_title">
                    <a href="./fishbox.html">
                        <h1>${arr.Product_Name}</h1>
                    </a>
                </div>

                <div class="list_fishbox_detail">
                    <p>${box_detail}</p>
                </div>


                <div class="list_item_detail">
    
                    <div class="Counter">
                        <div class="countBtn countBtn_minus">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="countNum">${arr.count}</div>
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

        


    }else if(!isFood){


        // 釣具型號選擇
        let Item_type = `<option name="Items_type[]" value="">請選擇商品種類</option>`;

        let tid = arr.Selected_type


        if(tid == ''){


            for(let j = 0 ; j < arr.Product_type.length ;j++){ 


                let optiStr = `<option name="Items_type[]" value="${j}">${arr.Product_type[j]}</option>`

               
            
                Item_type+=optiStr

            }

        }else{

            let optiStr =``

            for(let j = 0 ; j < arr.Product_type.length ;j++){ 

                if(tid == j){


                    optiStr = `<option name="Items_type[]" value="${j}" selected>${arr.Product_type[j]}</option>`

                }else{

                    optiStr = `<option name="Items_type[]" value="${j}">${arr.Product_type[j]}</option>`
                }
                

               
                Item_type+=optiStr

            }

        }

        

        let Item_product =`<div class="Cart_list_item" Product-ID="${arr.pid}" food="${arr.food}" Selected-ID="${arr.Selected_type}">

            <div class="list_item_pic">
                <a href="./each-product.html?I&&pid=${PID}">
                    <img src="${arr.Product_Pic}" alt="">
                </a>
            </div>

            <div class="list_item_intro">

                <div class="list_item_title">
                    <a href="./each-product.html?I&&pid=${PID}">
                        <h1>${arr.Product_Name}</h1>
                    </a>
                </div>


                <div class="list_item_option">
                    <select name="All_Item_type">`+Item_type+`</select>

                </div>


                <div class="list_item_detail">
    
                    <div class="Counter">
                        <div class="countBtn countBtn_minus">
                            <i class="fas fa-minus"></i>
                        </div>
                        <div class="countNum">${arr.count}</div>
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

        ITEM_LIST.append(Item_product);


    }

}

// 結帳頁商品架構
function CheckProduct(arr){

let isFood = arr.food;


// 計算當前商品金額
let nowprice = parseInt(arr.count) * parseInt(arr.Product_Price);

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

let PID = productID(arr)


if(isFood){

    let Item_left= ``

// 商品庫存小於100顯示商品庫存
if(arr.Product_Left <= 100){

    Item_left= `<div class="Item_left">
                    <h4>${arr.Product_Left}</h4>
                </div>`

    
}else{


    Item_left= ``
    

}

let seafood_items_list = `

    <div class="Items_list seafood_items_list" Product-ID="${arr.pid}" food="${arr.food}">

        <div class="Items_list_content Items_list_head">
            <input type="checkbox" name="Seafood_check[]" id="Seafood_check" class="Item_check" checked>
            <div class="Items_pic">
                <a href="./each-product.html?S&&pid=${PID}">
                    <img src="${arr.Product_Pic}" alt="">
                </a>
            </div>
        </div>

        <div class="Items_list_detail">
            <div class="Items_list_content Items_name">
                <a href="./each-product.html?S&&pid=${PID}">
                    <h3>${arr.Product_Name}</h3>
                </a>
            </div>

            <div class="Items_list_detail_tool">
                <div class="Items_list_content Items_list_count">
                    
                    <div class="count_warp">

                        <div class="Counter">
                            <div class="countBtn countBtn_minus">
                                <i class="fas fa-minus"></i>
                            </div>
                            <div class="countNum">${arr.count}</div>
                            <div class="countBtn countBtn_plus">
                                <i class="fas fa-plus"></i>
                            </div>
                            
                        </div>`+Item_left+`</div>

                </div>
                <div class="Items_list_content Items_list_price">
                    <p>${nowprice}</p>
                </div>
                <div class="Items_list_content Items_list_delete">
                    <div class="list_delete">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    
                </div>
            </div>


        </div>
        

    </div>
    
    `

    $('.Seafood_items_warp').append(seafood_items_list)

}else if(arr.fishbox){


        // 料理習慣
        let cooktype = arr.Product_cook.join('、')

        // 魚箱資訊
        let box_detail =`${arr.Product_Price}元 / ${arr.Product_qty} / ${cooktype}`


        let fisboxMessage = ``

    //  魚箱選填項目
        if(arr.Product_message == ''){

        fisboxMessage = ``

        }else{
        fisboxMessage = ` <p>${arr.Product_message}</p>`
        }
    
        
    let fishbox_items_list =`

        <div class="Items_list fishbox_items_list" Product-ID="${arr.pid}" fishbox="${arr.fishbox}">

        <div class="Items_list_content Items_list_head">
            <input type="checkbox" name="Fishbox_check[]" id="Fishbox_check" class="Item_check" checked>
            <div class="Items_pic">
                <a href="./fishbox.html">
                    <img src="${arr.Product_Pic}" alt="">
                </a>
            </div>
        </div>

        <div class="Items_list_detail">
            <div class="Items_list_content Items_name">
                <a href="./fishbox.html">
                    <h3>${arr.Product_Name}</h3>
                    <div class="checkFishboxDetail">
                        <p>${box_detail}</p>`+fisboxMessage+`</div>
                </a>
            </div>

            <div class="Items_list_detail_tool">
                <div class="Items_list_content Items_list_count">

                    <div class="count_warp">

                        <div class="Counter">
                            <div class="countBtn countBtn_minus">
                                <i class="fas fa-minus"></i>
                            </div>
                            <div class="countNum">${arr.count}</div>
                            <div class="countBtn countBtn_plus">
                                <i class="fas fa-plus"></i>
                            </div>
                            
                        </div>
                    </div>

                </div>
                <div class="Items_list_content Items_list_price">
                    <p>${nowprice}</p>
                </div>
                <div class="Items_list_content Items_list_delete">
                    <div class="list_delete">
                        <i class="far fa-trash-alt"></i>
                    </div>
                    
                </div>
            </div>


        </div>
        

    </div>
    `

    $('.fishbox_items_warp').append(fishbox_items_list)

}else if(!isFood){

    // 釣具型號選擇
    let Item_type = `<option name="checkItems_type[]" value="">請選擇商品種類</option>`;

    
    let tid = arr.Selected_type


    if(tid == ''){

        for(let j = 0 ; j < arr.Product_type.length ;j++){

            let optiStr = `<option name="checkItems_type[]" value="${j}">${arr.Product_type[j]}</option>`


            Item_type+=optiStr

        }


    }else{


        let optiStr =``

        for(let j = 0 ; j < arr.Product_type.length ;j++){

            if(tid == j){

                optiStr = `<option name="checkItems_type[]" value="${j}" selected>${arr.Product_type[j]}</option>`

            }else{

                optiStr = `<option name="checkItems_type[]" value="${j}">${arr.Product_type[j]}</option>`

            }

            Item_type += optiStr



        }

    }
    
    

    let tool_items_list=`

        <div class="Items_list tool_items_list"  Product-ID="${arr.pid}" food="${arr.food}">

            <div class="Items_list_content Items_list_head">
                <input type="checkbox" name="Tool_check[]" id="Tool_check" class="Item_check" checked>
                <div class="Items_pic">
                    <a href="./each-product.html?I&&pid=${PID}">
                        <img src="${arr.Product_Pic}" alt="">
                    </a>
                </div>
            </div>

            <div class="Items_list_detail">
                <div class="Items_list_content Items_name">
                    <a href="./each-product.html?I&&pid=${PID}">
                        <h3>${arr.Product_Name}</h3>
                    </a>
                    <select class="Items_type" name="checkItems_Alltype">`+Item_type+`</select>
                </div>

                <div class="Items_list_detail_tool">
                    <div class="Items_list_content Items_list_count">

                        <div class="count_warp">
                            <div class="Counter">
                                <div class="countBtn countBtn_minus">
                                    <i class="fas fa-minus"></i>
                                </div>
                                <div class="countNum">${arr.count}</div>
                                <div class="countBtn countBtn_plus">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="Items_list_content Items_list_price">
                        <p>${nowprice}</p>
                    </div>
                    <div class="Items_list_content Items_list_delete">
                        <div class="list_delete">
                         <i class="far fa-trash-alt"></i>
                        </div>
                    </div>
                </div>


            </div>
            

        </div> `


    $('.tool_items_warp').append(tool_items_list)

}



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


// 海鮮商品資料
$.get("./static/JSON/Seafood.json", function (data) {

    let d = data;
    let ListCount = $('.navbar_shoplist_count');//購物車數量
    let ListCount_RWD =  $('.shoplist_count_RWD');//購物車數量RWD


    PROPUCTSWARP.on("click","#add_seafood",function(){

        $('.seafood_list').css('display','block');

        let CheckOut_Page = location.href.substr(-13,13) == 'checkout.html'

     
      
        if(CheckOut_Page){


            $('.fish_items').css('display','block');
        }

        // 商品ID
        let PID = $(this).parent().parent().attr('Product-id')

        // 判斷食物或商品
        let Food = $(this).parent().parent().attr('food') == 'true'
            
        
        if(Food){
       
            for(let i = 0 ; i < d.length ;i++){ 
                // 資料庫抓到相同商品
                if( PID  == d[i].pid){
                    
                    // 商品名稱、商品價格、商品圖片、商品ID、商品庫存、商品型號、商品數量初始值、判斷是否是食物
                    let arr =[{Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,count:1,food:true,fishbox:false}]
                
                
                     // 判斷商品是否缺貨
                    if(d[i].left == 0 ){
                        alert('商品缺貨中')

                    }else{

                        

                        // 顯示navbar數量 
                        ListCount.css('display','flex').addClass('Bounce');
                        ListCount_RWD.css('display','flex').addClass('Bounce');


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
                            for(let j =0 ; j < cookieArr.length; j++){

                                if(cookieArr[j].food){

                                    if(d[i].pid == cookieArr[j].pid){

                                        same = true;
                                        
                                        let Item_over = parseInt(cookieArr[j].count) >= parseInt(cookieArr[j].Product_Left)

                                        let Zero_Item = parseInt(cookieArr[j].Product_Left) == 0 


                                        if(Item_over){
                                            alert('數量超過庫存')
                                            break;

                                        }
                                        else if(Zero_Item){
                                            alert('商品缺貨中')
                                            break;

                                        }else{
                                            cookieArr[j].count++
                                            // 數量沒超過庫存
                                        }

                                
                                        break;
                                            
                                    
                                    }
                                }

                            }

                            if(!same){

                                if(d[i].left == 0){
                                    alert('商品缺貨中')
                                }else{
                                    cookieArr.push({Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,count:1,food:true,fishbox:false})

                                }

                                
                            }

                            $.cookie('Cart',JSON.stringify(cookieArr),{expire : 1})


                        }
            

                    }

                    //navbar購物車
                    if($.cookie("Cart") == null){

                        //cookie若無資料，顯是購物車為空
                        ListCount.css('display','none')
                        ListCount_RWD.css('display','none')
                        $('.Cart_list_total').css('display','none')
                        $('.list_item_empty').css('display','flex')



                    }else{

                        $('.list_item_empty').css('display','none');
                        $('.Cart_list_total').css('display','block');
                        
                        // 抓cookie購物車資料
                        let cookieStr = $.cookie('Cart');
                        let cookieArr = JSON.parse(cookieStr);
                        let sum = 0;


                        for(let j = 0 ; j < cookieArr.length;j++){
                            sum += cookieArr[j].count;
                        }

                        $('.navbar_shoplist_count').text(sum)
                        $('.shoplist_count_RWD').text(sum)


                    }


                }

            }


        }
    })


})

// 釣具用品資料
$.get("./static/JSON/Item.json", function (data) {

    let d = data

    PROPUCTSWARP.on("click","#add_item",function(){

        // 還原欄位
        $('.item_list').css('display','block');

        let CheckOut_Page = location.href.substr(-13,13) == 'checkout.html'
      
        if(CheckOut_Page){

            $('.tool_items').css('display','block');
        }

        // 商品ID
        let PID = $(this).parent().parent().attr('Product-id')

        // 判斷食物或商品
        let Food = $(this).parent().parent().attr('food') == 'true'


        if(!Food){
       
            for(let i = 0 ; i < d.length ;i++){ 
                // 資料庫抓到相同商品
                if( PID  == d[i].pid){
                    
                    // 商品名稱、商品價格、商品圖片、商品ID、商品庫存、商品全部型號、商品選擇型號、商品數量初始值、判斷是否是食物
                    let arr =[{Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,Selected_type:"",count:1,food:false,fishbox:false}]
                
                
                     // 判斷商品是否缺貨
                    if(d[i].left == 0 ){
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
                            for(let j =0 ; j < cookieArr.length; j++){

                                if(!cookieArr[j].food){
                                    if(d[i].pid == cookieArr[j].pid && arr[0].Selected_type == cookieArr[j].Selected_type){

                                        same = true;

                                        
                                        
                                        let Item_over = parseInt(cookieArr[j].count) >= parseInt(cookieArr[j].Product_Left)

                                        let Zero_Item = parseInt(cookieArr[j].Product_Left) == 0 


                                        if(Item_over){
                                            alert('數量超過庫存')
                                            break;

                                        }
                                        else if(Zero_Item){
                                            alert('商品缺貨中')
                                            break;

                                        }else{
                                            cookieArr[j].count++
                                            // 數量沒超過庫存
                                        }

                                
                                        break;
                                            
                                    
                                    }
                                }

                            }

                            if(!same){

                                if(d[i].left == 0){
                                    alert('商品缺貨中')
                                }else{
                                    cookieArr.push({Product_Name:d[i].name,Product_Price:d[i].price,Product_Pic:d[i].pic[0],pid:d[i].pid,Product_Left:d[i].left,Product_type:d[i].type,Selected_type:"",count:1,food:false,fishbox:false})

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


                        for(let j = 0 ; j < cookieArr.length;j++){
                            sum += cookieArr[j].count;
                        }

                        $('.navbar_shoplist_count').text(sum)
                        $('.shoplist_count_RWD').text(sum)


                    }


                }

            }


        }
    })





})






//////文章頁標籤效果//////
let Artical_Tagslist = $('.Tags_list')
let Blog_Content = $('.Blog_content')

Artical_Tagslist.on("mouseenter",".artical_tag",function(){

    $(this).children('.artical_tag_outline').css('border','solid 1px #dc7e00')

    $(this).children('.artical_tag_outline').children('p').css('color','#dc7e00')


})

Artical_Tagslist.on("mouseleave",".artical_tag",function(){


    $(this).children('.artical_tag_outline').css('border','solid 1px var(--sea_blue)')

    $(this).children('.artical_tag_outline').children('p').css('color','var(--sea_blue)')


})

Blog_Content .on("mouseenter",".artical_tag",function(){

    $(this).children('.artical_tag_outline').css('border','solid 1px #dc7e00')

    $(this).children('.artical_tag_outline').children('p').css('color','#dc7e00')


})

Blog_Content .on("mouseleave",".artical_tag",function(){


    $(this).children('.artical_tag_outline').css('border','solid 1px var(--sea_blue)')

    $(this).children('.artical_tag_outline').children('p').css('color','var(--sea_blue)')


})





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
if ($(window).width() > 1024) {

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



