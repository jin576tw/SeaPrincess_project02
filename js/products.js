$(document).ready(function () {

    let SeafoodURL = location.href.substr(-8,8) == '?Seafood';
    let ItemURL = location.href.substr(-5,5) == '?Item';

    let ItemPage = false;
    let SeafoodPage = false;

   ////////////////////////////////起始分頁選擇//////////////////////////////////

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


    /////////////////////起始分頁載入//////////////////////////////////////////

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

////// 商品排序選單
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

//////////商品種類

    $('.product_type').on({

        click:function () {
        
            $(this).addClass('lightUP').siblings('.product_type').removeClass('lightUP')
            
        }

    })


/////////////////////////////生鮮商品資料載入//////////////////////////////////

    let SeafoodWarp = $('.Seafood_Products_warp')

    $.get("../JSON/Seafood.json", function (data) {

        let d = data;

        originSort(d)

        for(let i= 0 ; i < d.length ;i++ ){

            SeafoodWarp.append(PRODUCT(d[i]))


        }


//////////商品種類 

        // 設定判斷參數
        let type01 = false;
        let type02 = false;
        let type03 = false;

        $('.Ａll_S_type').on({

            click:function () {

                SeafoodWarp.empty()

                originSort(d)

                for(let i= 0 ; i < d.length ;i++ ){

                    SeafoodWarp.append(PRODUCT(d[i]))
        
                }
                type01 = false;
                type02 = false;
                type03 = false; 
            }

        })
        $('.s_type01').on({

            click:function () {

                SeafoodWarp.empty()

                originSort(d)

                for(let i= 0 ; i < d.length ;i++ ){

                    if(d[i].type_sid == 1){

                        SeafoodWarp.append(PRODUCT(d[i]))
                     
                    }
                
                }
                // 判斷商品種類參數
                type01 = true;
                type02 = false;
                type03 = false;
 
            }

        })
        $('.s_type02').on({

            click:function () {

                SeafoodWarp.empty()
                originSort(d)

                for(let i= 0 ; i < d.length ;i++ ){

                    if(d[i].type_sid == 2){

                        SeafoodWarp.append(PRODUCT(d[i]))

                    }
                }

                // 判斷商品種類參數
                type01 = false;
                type02 = true;
                type03 = false;


            }

        })
        $('.s_type03').on({

            click:function () {

                SeafoodWarp.empty()
                originSort(d)

                for(let i= 0 ; i < d.length ;i++ ){

                    if(d[i].type_sid == 3){

                        SeafoodWarp.append(PRODUCT(d[i]))

                    }

                }

                // 判斷商品種類參數
                type01 = false;
                type02 = false;
                type03 = true;

            
            }

        })
    


///////// 商品排序

        // 判斷商品種類
        function SeafoodTypeCheck(p) {

            if(type01){

                if(p.type_sid == 1){

                SeafoodWarp.append(PRODUCT(p));
                

                }

            }else if(type02){

                if(p.type_sid == 2){

                    SeafoodWarp.append(PRODUCT(p));
                    

                }

            }else if(type03){

                if(p.type_sid == 3){

                    SeafoodWarp.append(PRODUCT(p));
                    

                }

            }else{


                SeafoodWarp.append(PRODUCT(p));

            }
    



            
        }

        // 熱銷商品
        $('.hot_list').on({

            click:function () {

        
                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                //依熱銷商品
                hotSort(d)

                for(let i= 0 ; i < d.length ;i++ ){

                    // 判斷商品種類
                    SeafoodTypeCheck(d[i])
            
                
                }
            
            }

        })

        // 價格由低到高
        $('.priceLow_list').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格低到高來排序
                priceDownSort(d)

                for(let i= 0 ; i < d.length ;i++ ){
                    
                     // 判斷商品種類
                    SeafoodTypeCheck(d[i])

                }

            
            
            }

        })

        // // 價格高到低
        $('.priceHigh_list').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格高到低來排序
                priceUpSort(d)

                for(let i= 0 ; i < data.length ;i++ ){

                     // 判斷商品種類
                     SeafoodTypeCheck(d[i])


                }
            
            
            }

        })

        // 商品建立時間排序
        $('.new_list').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

        
                //依最新時間排序
                timeSort(d)
                

                for(let i = 0 ; i < d.length ; i++){

                     // 判斷商品種類
                     SeafoodTypeCheck(d[i])
        
                }

               
            
            }

        })

    })
        


/////////////////////////////生鮮商品資料載入//////////////////////////////////
    let ItemWarp = $('.Item_Products_warp ')

    $.get("../JSON/Item.json", function (data) {

        let d = data;

        originSort(d)

        for(let i= 0 ; i < d.length ;i++ ){

            ItemWarp.append(PRODUCT_B(d[i]))


        }





    })



})