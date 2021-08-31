$(document).ready(function () {

    let SeafoodURL = location.href.substr(-65,8) == '?Seafood';
    let ItemURL = location.href.substr(-76,5) == '?Item';

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


            let stateURL = '&&tid=000&&hot=false&&new=false&&p_high=false&&p_low=false'

            let url = location.pathname + '?Seafood' + stateURL
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


            let stateURL = '&&tid=000&&sub_tid=000&&hot=false&&new=false&&p_high=false&&p_low=false'

            let url = location.pathname + '?Item' + stateURL
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

    $(".product_type_warp ").on("click",".product_type",function(){

        $(this).addClass('lightUP').siblings('.product_type').removeClass('lightUP')

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

  //  // 判斷商品種類
         function SeafoodTypeCheck(p) {

            for(let i = 0 ; i < p.length ;i++){ 

                if(p[i].type_sid == s_type){

                    SeafoodWarp.append(PRODUCT(p[i]));

                }else if(s_type == ''){
                    SeafoodWarp.append(PRODUCT(p[i]));

                }
                
            }

        
            
        }


        // 傳送URL
        let S_sendURL= function(a,b,c,d,e) {

            // 種類ID
            let tid = 0 

            tid = tid + a;

            if(tid < 10){
                tid = '&&tid=00'+tid
               

            }else if(tid < 100){
                tid = '&&tid=0'+tid


            }else{

                tid = '&&tid='+a
            
            }

            // 熱銷狀態
            let hotSort = ``
            b == true ? hotSort = `&&hot=trues`:hotSort = `&&hot=false`;
            
          
            // 新商品狀態
            let newSort = ``
            c == true ? newSort = `&&new=trues`:newSort = `&&new=false`;

         
            // 價格由高到低
            let p_highSort =``
            d == true ? p_highSort = `&&p_high=trues`:p_highSort = `&&p_high=false`;

            
            // 價格由低到高
            let p_lowSort = ``
            e == true ? p_lowSort = `&&p_low=trues`:p_lowSort = `&&p_low=false`;

            

            let url = location.pathname + '?Seafood'+tid+hotSort+newSort+p_highSort+ p_lowSort;

            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

            return url

        }



        // 設定判斷參數
        let s_type = ''
        let hot = false
        let newTime = false
        let p_high = false
        let p_low = false
       
        $('.Ａll_S_type').on({

            click:function () {

                SeafoodWarp.empty()

                s_type = ''
                hot = false
                newTime = false
                p_high = false
                p_low = false

                // 回歸原始排序
                originSort(d)

                SeafoodTypeCheck(d)

                // 傳送狀態URL
                S_sendURL(s_type,hot,newTime,p_high,p_low)
            
            }

        })
        $('.s_type01').on({

            click:function () {

                SeafoodWarp.empty()

                s_type = 1;
                hot = false
                newTime = false
                p_high = false
                p_low = false

                 // 回歸原始排序
                 originSort(d)

                SeafoodTypeCheck(d)

                // 傳送狀態URL
                S_sendURL(s_type,hot,newTime,p_high,p_low)
                
               
            }

        })
        $('.s_type02').on({

            click:function () {

                SeafoodWarp.empty()

                s_type = 2;
                hot = false
                newTime = false
                p_high = false
                p_low = false

                // 回歸原始排序
                originSort(d)

                SeafoodTypeCheck(d)

                // 傳送狀態URL
                S_sendURL(s_type,hot,newTime,p_high,p_low)

             


            }

        })
        $('.s_type03').on({

            click:function () {

                SeafoodWarp.empty()

                s_type = 3;
                hot = false
                newTime = false
                p_high = false
                p_low = false

                // 回歸原始排序
                originSort(d)

                SeafoodTypeCheck(d)

                // 傳送狀態URL
                S_sendURL(s_type,hot,newTime,p_high,p_low)

        
            
            }

        })

    
///////// 商品排序

    
        // 熱銷商品
        $('.hot_slist').on({

            click:function () {

        
                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                //依熱銷商品
                hotSort(d)


                // 判斷商品種類
                SeafoodTypeCheck(d)

                hot = true
                newTime = false
                p_high = false
                p_low = false

                 // 傳送狀態URL
                S_sendURL(s_type,hot,newTime,p_high,p_low)
            
            }

        })

        

        // 價格由低到高
        $('.priceLow_slist').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格低到高來排序
                priceDownSort(d)

                // 判斷商品種類
                SeafoodTypeCheck(d)

                hot = false
                newTime = false
                p_high = false
                p_low = true

                S_sendURL(s_type,hot,newTime,p_high,p_low)

            
            
            }

        })

        // // 價格高到低
        $('.priceHigh_slist').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格高到低來排序
                priceUpSort(d)

                // 判斷商品種類
                SeafoodTypeCheck(d)

                hot = false
                newTime = false
                p_high = true
                p_low = false

                S_sendURL(s_type,hot,newTime,p_high,p_low)

            
            
            }

        })

     

        // 商品建立時間排序
        $('.new_slist').on({

            click:function () {

                SeafoodWarp.empty()

                // 回歸原始排序
                originSort(d)

        
                //依最新時間排序
                timeSort(d)
                
                // 判斷商品種類
                SeafoodTypeCheck(d)


                hot = false
                newTime = true
                p_high = false
                p_low = false

                S_sendURL(s_type,hot,newTime,p_high,p_low)

               
            
            }

        })

    })
        


/////////////////////////////釣具商品資料載入//////////////////////////////////

    //釣魚用具分類視覺    
    $('.Item_type_box').on({
        click:function(){

            $(this).addClass('TypeLight').siblings('.Item_type_box').removeClass('TypeLight')
        }

    })
    

    //資料載入
    let ItemWarp = $('.Item_Products_warp ')

    let ItemTypeWarp = $('.item_type_warp')

    $.get("../JSON/Item.json", function (data) {

        let d = data;

        // 商品母分類參數
        itype = 1;
        // 商品子分類參數
        subitype = '';

        let hot = false
        let newTime = false
        let p_high = false
        let p_low = false
       

        ItemChecktype(d)


    /// 商品母種類架構
        function  ItemChecktype(p) {

            for(let i= 0 ; i < p.length ;i++ ){

                if(p[i].type_sid == itype){
    
                    ItemWarp.append(PRODUCT_B(p[i]))
    
                }
    
            }

            
        }

         // 傳送URL
         let I_sendURL = function(a,b,c,d,e,f) {

            // 母種類ID
            let tid = 0 

            tid = tid + a;

            if(tid < 10){
                tid = '&&tid=00'+tid
               

            }else if(tid < 100){
                tid = '&&tid=0'+tid


            }else{

                tid = '&&tid='+a
            
            }

            // 子種類ID
            let sub_tid = 0 

            sub_tid = sub_tid + b;

            if(sub_tid  < 10){
                sub_tid  = '&&sub_tid=00'+ sub_tid 
               

            }else if( sub_tid  < 100){
                sub_tid  = '&&sub_tid=0'+ sub_tid 


            }else{

                sub_tid  = '&&sub_tid='+b
            
            }

            // 熱銷狀態
            let hotSort = ``
            c == true ? hotSort = `&&hot=trues`:hotSort = `&&hot=false`;
            
          
            // 新商品狀態
            let newSort = ``
            d == true ? newSort = `&&new=trues`:newSort = `&&new=false`;

         
            // 價格由高到低
            let p_highSort =``
            e == true ? p_highSort = `&&p_high=trues`:p_highSort = `&&p_high=false`;

            
            // 價格由低到高
            let p_lowSort = ``
            f == true ? p_lowSort = `&&p_low=trues`:p_lowSort = `&&p_low=false`;

            

            let url = location.pathname +'?Item'+tid+sub_tid+hotSort+newSort+p_highSort+ p_lowSort;

            history.pushState({
                url: url,
                title: document.title
            }, document.title, url)

            return url

        }


    /// 商品母種類
        $('.Item_type01').on({

            click:function(){

                itype = 1;
                subitype = '';
                hot = false
                newTime = false
                p_high = false
                p_low = false
               
                ItemWarp.empty()

                originSort(d)

                // 子分類列表
                let SUBTYPE = `<div class="product_type All_i_type lightUP">所有商品</div>
                <div class="product_type i_type01_01">海水紡車捲線器</div>
                <div class="product_type i_type01_02">泛用型紡車式捲線器</div>
                <div class="product_type i_type01_03">擬餌拋投捲線器</div>
                <div class="product_type i_type01_04">雙軸鼓式捲線器</div>`

                ItemTypeWarp.html(SUBTYPE)

               
                ItemChecktype(d)


                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)
            
                
            }



        })
        $('.Item_type02').on({

            click:function(){

                itype = 2;
                subitype = '';
                hot = false
                newTime = false
                p_high = false
                p_low = false

                ItemWarp.empty()

                // 回歸原始排序
                originSort(d)

                let SUBTYPE = `<div class="product_type All_i_type lightUP">所有商品</div>
                <div class="product_type i_type02_01">日式釣竿</div>
                <div class="product_type i_type02_02">遠投竿</div>
                <div class="product_type i_type02_03">淡水路亞</div>
                <div class="product_type i_type02_04">海水路亞</div>
                <div class="product_type i_type02_05">船釣竿</div>
                <div class="product_type i_type02_06">池釣竿</div>
                <div class="product_type i_type02_07">竿輪Combo組</div>`

                ItemTypeWarp.html(SUBTYPE)

               

                ItemChecktype(d)
                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

                

              
                
                
            }



        })
        $('.Item_type03').on({

            click:function(){

                itype = 3;
                subitype = '';
                hot = false
                newTime = false
                p_high = false
                p_low = false

                ItemWarp.empty()

                originSort(d)

                let SUBTYPE = `<div class="product_type All_i_type lightUP">所有商品</div>
                <div class="product_type i_type03_01">PE/編織線</div>
                <div class="product_type i_type03_02">碳纖維</div>
                <div class="product_type i_type03_03">尼龍繩</div>`

                ItemTypeWarp.html(SUBTYPE)

                

                ItemChecktype(d)
                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

                
                

                
            }



        })
        $('.Item_type04').on({

            click:function(){

                itype = 4;
                subitype = '';
                hot = false
                newTime = false
                p_high = false
                p_low = false

                ItemWarp.empty()

                originSort(d)

                let SUBTYPE = `<div class="product_type All_i_type lightUP">所有商品</div>
                <div class="product_type i_type04_01">捲線器改裝配件</div>
                <div class="product_type i_type04_02">服飾配件</div>
                <div class="product_type i_type04_03">釣具收納＆保養</div>
                <div class="product_type i_type04_04">釣蝦仕掛／周邊</div>`

                ItemTypeWarp.html(SUBTYPE)

                
                ItemChecktype(d)
                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

                
                
                
            }



        })



    /// 商品子種類架構
        ItemCheckSubtype = function (p) {

            for(let i = 0 ; i < p.length ;i++){

                if(p[i].type_sid==itype && p[i].sub_type_sid==subitype){

                    ItemWarp.append(PRODUCT_B(p[i]))

                    
                }
            }
            
        }


        $(".item_type_warp").on("click",".All_i_type",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = '';
            hot = false
            newTime = false
            p_high = false
            p_low = false
        
            ItemChecktype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)


            
        })


        $(".item_type_warp").on("click",".i_type01_01,.i_type02_01,.i_type03_01,.i_type04_01",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 1;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);


            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type01_02,.i_type02_02,.i_type03_02,.i_type04_02",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 2;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d)

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type01_03,.i_type02_03,.i_type03_03,.i_type04_03",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 3;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type01_04,.i_type02_04,.i_type04_04",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 4;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type02_05",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 5;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type02_06",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 6;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
        $(".item_type_warp").on("click",".i_type02_07",function(){

            ItemWarp.empty()

            originSort(d)

            subitype = 7;
            hot = false
            newTime = false
            p_high = false
            p_low = false

            ItemCheckSubtype(d);

            I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            


        })
      


        ///商品排序
       
         // 熱銷商品
         $('.hot_ilist').on({

            click:function () {

        
                ItemWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 依熱銷商品
                hotSort(d)

                // 若子分類為空值
                if(subitype == ''){

                    ItemChecktype(d)
                
                }else{

                    ItemCheckSubtype(d);

                }

                hot = true;
                newTime = false
                p_high = false
                p_low = false

                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

            }

        })

        // 價格由低到高
        $('.priceLow_ilist').on({

            click:function () {

    
                ItemWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格低到高來排序
                priceDownSort(d)

                if(subitype == ''){

                    ItemChecktype(d)
                
                }else{

                    ItemCheckSubtype(d);

                }


                hot = false;
                newTime = false
                p_high = false
                p_low = true

                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

              

            
            
            }

        })

        // // 價格高到低
        $('.priceHigh_ilist').on({

            click:function () {

                

                ItemWarp.empty()

                // 回歸原始排序
                originSort(d)

                // 由價格高到低來排序
                priceUpSort(d)

                if(subitype == ''){

                    ItemChecktype(d)
                
                }else{

                    ItemCheckSubtype(d);

                }


                hot = false;
                newTime = false
                p_high = true
                p_low = false

                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)

               
            
            
            }

        })

        // 商品建立時間排序
        $('.new_ilist').on({

            click:function () {

                ItemWarp.empty()

                // 回歸原始排序
                originSort(d)

        
                //依最新時間排序
                timeSort(d)
                

                if(subitype == ''){

                    ItemChecktype(d)
                
                }else{

                    ItemCheckSubtype(d);

                }
                

                hot = false;
                newTime = true
                p_high = false
                p_low = false

                I_sendURL(itype,subitype,hot,newTime,p_high,p_low)


               
            
            }

        })

     












    })



})