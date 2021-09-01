$(document).ready(function () {

    $(window).scroll(function () {

            let scrollNow = $(window).scrollTop();
        // console.log('scrollTop', scrollNow);


/* ///////////第一頁//////////// */

  // 平板版
        if ($(window).width() < 992) {

            if (scrollNow >= 63){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 526){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }

        }

        //手機版
        if ($(window).width() < 480) {
            if (scrollNow >= 36){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 575){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }


        }

      

        // 網頁版 
        if ($(window).width() >= 992) {

            if (scrollNow >= 91){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 774){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }
        }

        


/* //////////最新漁貨////////// */
     

        // 平板版
        if ($(window).width() < 992) {

            if (scrollNow >= 588){
                $('.product_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.product_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 641){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }


           
        }

           //手機版
           if ($(window).width() < 480) {

            if (scrollNow >= 638){
                $('.product_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.product_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 713){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }


        }


        // 網頁版
        if ($(window).width() >= 992) {


            if (scrollNow >= 825){
                $('.product_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.product_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 923){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }
    
        }
    
    })
 
    $('.view_more_btn').on({

        mouseenter: function () {

            $(this).css('color','var(--light_blue)')  
        
            $(this).find("p").css('border-bottom','solid 0.5px var(--light_blue)').css('transition','0.5s')

            $(this).find(".fa-caret-down").css('transform','scale(1.2) translateY(5px)').css('transition','0.5s')

        },
        mouseleave: function () {

        
            $(this).css('color','rgba(29, 30, 30, 0.55)')

           $(this).find("p").css('border-bottom','solid 0.5px rgba(29, 30, 30, 0.55)').css('transition','0.5s')

           $(this).find(".fa-caret-down").css('transform','scale(1) translateY(0px)').css('transition','0.5s')
        

        }



    })

    let HOMESEAFOOD = $('.homeSeafood_warp')
    let HOMEITEM = $('.homeItem_warp')

    $.get("../JSON/Seafood.json", function (data) {

        let d = data;

        //新隨機商品資料
        let rd = []

        //商品隨機產生
        randomProuducts(8,d,rd)

        // 依照商品時間排序
        timeSort(rd)


        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            HOMESEAFOOD.append(PRODUCT(rd[i]))

        }
        



    })


    $.get("../JSON/Item.json", function (data) {

        let d = data;

        let rd = []

        randomProuducts(8,d,rd)

        // 依照商品時間排序
        timeSort(rd)

        for(let i = 0 ; i < rd.length ;i++){ 
            // 送隨機商品上去
            HOMEITEM.append(PRODUCT_B(rd[i]))

        }



    })







})