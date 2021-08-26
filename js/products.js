$(document).ready(function () {

    let SeafoodURL = location.href.substr(-8,8) == '?Seafood';
    let ItemURL = location.href.substr(-5,5) == '?Item';

    let ItemPage = false;
    let SeafoodPage = false;


    // 生鮮漁貨分頁按鈕    
    $('.Seafood_select').on({

        click:function(){

            SeafoodPage = true;
            ItemPage = false;
          
            if ($(window).width() <  992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

                $(this).next().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).next().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')



            }

            if ($(window).width() >= 992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

                $(this).next().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).next().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')



            }


            $('.Seafood_select_warp').fadeIn(500)
            $('.Item_select_warp').fadeOut(1)


            let url = location.pathname + '?Seafood'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)
            


        }



    })

   

    // 釣具用品分頁按鈕    
    $('.Item_select').on({

        click:function(){

            ItemPage = true;
            SeafoodPage = false;
           

            if ($(window).width() <  992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

                $(this).prev().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

                
            }


            if ($(window).width() >= 992){

                $(this).css('background-color','white').css('opacity','1')
                $(this).children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

                $(this).prev().css('background-color','#DDDDDD').css('opacity','0.5')
                $(this).prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

            
            }

            $('.Seafood_select_warp').fadeOut(1)
            $('.Item_select_warp').fadeIn(500)


            let url = location.pathname + '?Item'
            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

        }


    })


    ////////////起始分頁/////////

    // 生鮮漁貨
    if(SeafoodURL || SeafoodPage){


        if ($(window).width() <  992){

            $('.Seafood_select').css('background-color','white').css('opacity','1')
            $('.Seafood_select').children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

            $('.Seafood_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Seafood_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

            
        }


        if ($(window).width() >= 992){

            $('.Seafood_select').css('background-color','white').css('opacity','1')
            $('.Seafood_select').children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

            $('.Seafood_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Seafood_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')


        
        }


        $('.Seafood_select_warp').fadeIn(500)
        $('.Item_select_warp').fadeOut(1)


    }


    // 釣具用品
    if(ItemURL || ItemPage == true){

        if ($(window).width() <  992){

            $('.Item_select').css('background-color','white').css('opacity','1')
            $('.Item_select').children('.Prouduct_select_icon').css('transform', 'scale(1.5) translateY(-5px)')

            $('.Item_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Item_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')

            
        }


        if ($(window).width() >= 992){

            $('.Item_select').css('background-color','white').css('opacity','1')
            $('.Item_select').children('.Prouduct_select_icon').css('transform', 'scale(1.8) translateY(-10px)')

            $('.Item_select').prev().css('background-color','#DDDDDD').css('opacity','0.5')
            $('.Item_select').prev().children('.Prouduct_select_icon').css('transform', 'scale(1) translateY(0px)')


        
        }


        $('.Seafood_select_warp').fadeOut(1)
        $('.Item_select_warp').fadeIn(500)

    }

    // 商品排序選單
    if ($(window).width() < 992){
        $('.Products_status_warp').on({

          
           click:function (){
                
                $(".product_status_list").toggle()
                   
                
            }
            
            
         })


    }

    if ($(window).width() >= 992){
        $('.Products_status_warp').on({

            click:function (){
                $('.listDown').css('transform','rotate(180deg)');
                $(".product_status_list").toggle()
                
            },
            mouseenter: function () {

                $('.listDown').css('transform','rotate(180deg)');
                $('.listUp').css('transform','rotate(0deg)')
                $('.product_status_list').fadeIn(100)

            
                

            },
            mouseleave: function () {
                $('.listDown').css('transform','rotate(0deg)')
                $('.listUp').css('transform','rotate(-180deg)')
                $('.product_status_list').fadeOut(100)

            
                
            }

        })
    

    }

    $('.status_list').on({

        click: function () {

            if ($(window).width() < 992){

                let arrow = `<i class="fas fa-angle-down listDown"></i>`;
                $('.product_status').html($(this).text()+ arrow);
                
            }
            
            if ($(window).width() >= 992){

            let arrow = `<i class="fas fa-angle-up listUp"></i>`
           
            $('.product_status').html($(this).text()+ arrow)
        
            }
         }


    })



    let SeafoodItemWarp = $('.Seafood_Products_warp')

    $.get("../JSON/Seafood.json", function (data) {

        //生鮮商品資料載入
        for(let i= 0 ; i < data.length ;i++ ){

            let d = data;

            // 由剩餘數量來排序,並按照id排序
            d = d.sort(function (a, b) {
    
                    return b.left - a.left || a.pid - b.pid;
    
            })

        
            let PRODUCTTAG = ` `;

            //判斷商品標籤
            function productTag(input) {

                let tagName = " ";

                let ProductTIME = new Date(input.create_at).getMonth();

                let nowTIME = new Date().getMonth();

                
                if(ProductTIME == nowTIME){
                        //判斷新商品
                    tagName = "NEW"
                    PRODUCTTAG = `<div class="product_tag">${tagName}</div>`

                }else if(input.hot == true){
                    //判斷熱銷商品
                    tagName = "熱銷";
                    PRODUCTTAG = `<div class="product_tag">${tagName}</div>`
                    

                }else if(input.vip == true){
                    //判斷官網限定
                    tagName =  "官網限定";
                    PRODUCTTAG = `<div class="product_tag">${tagName}</div>`


                }else{
                    PRODUCTTAG = ` `;
                }
        
            }


            //判斷商品是否有庫存
            let PRODUCTDETAIL = ` `
            function productDetail(input) {

                let ProductLeft = input.left;

                ProductLeft == 0 ? PRODUCTDETAIL = `<p class="sold">已售完</p>`:PRODUCTDETAIL = `<p>NT ${input.price}  / 公斤</p>`;

                
            }


            //商品ID三位數
            function productID(num) {

                if(num < 10){ 

                num ='00'+num;

                return num
                }
                else if(num < 100){

                    num ='0'+num;

                return num

                }else{

                    return num

                }
                
            }



           
            productTag(d[i])
            productDetail(d[i])

            let PRODUCTID  =  productID(d[i].pid)



            let PRODUCT = ``;

            if(d[i].left==0){

                PRODUCT = `
                    <div class="product p-0 col-lg-3 col-md-4 col-6">
                            <div class="product_intro empty_product">`+ PRODUCTTAG+
                                `<div class="product_pic">
                                    <a href="../html/each-product.html?pid=`+PRODUCTID+`">
                                    <img src="${d[i].pic[0]}" alt="">
                                    </a>
                                </div> 
                                <a href="../html/each-product.html?pid=`+PRODUCTID+`">
                                    <div class="product_title">
                                        <h3>${d[i].name}</h3>
                                    </div>  
                                </a>  
                            </div>
                            <div class="product_detail">` 
                                    + PRODUCTDETAIL+
                
                                `</div> 
                                
                    </div>`;
            }else{

                PRODUCT = `
                <div class="product p-0 col-lg-3 col-md-4 col-6">
                <div class="product_intro">`+PRODUCTTAG+
                            `<div class="add_btn">
                                <i class="fas fa-cart-plus"></i>
                            </div>
                            <div class="product_pic">
                                <a href="../html/each-product.html?pid=`+PRODUCTID+`">
                                <img src="${d[i].pic[0]}" alt="">
                                </a>
                            </div> 
                            <a href="../html/each-product.html?pid=`+PRODUCTID+`">
                                <div class="product_title">
                                    <h3>${d[i].name}</h3>
                                </div>  
                            </a>  
                        </div>
                        <div class="product_detail">` 
                                +PRODUCTDETAIL+
            
                            `</div> 
                            
                </div>`


            }
        
            
            SeafoodItemWarp.append(PRODUCT)

    
        }




    })
        



   



})