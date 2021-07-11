$(document).ready(function () {

    $(window).scroll(function () {

        let scrollNow = $(window).scrollTop();
        console.log('scrollTop', scrollNow);


/* ///////////第一頁//////////// */

        //手機版
        if ($(window).width() < 480) {
            if (scrollNow >= 178){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 518){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }


        }

        // 平板版
        if ($(window).width() < 992) {

            if (scrollNow >= 178){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 518){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }

        }

        // 網頁版 
        if ($(window).width() >= 992) {

            if (scrollNow >= 132){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 618){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }
        }

        


/* //////////最新漁貨////////// */
        //手機版
        if ($(window).width() < 480) {

            if (scrollNow >= 638){
                $('.item_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.item_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 713){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }


        }

        // 平板版
        if ($(window).width() < 992) {

            if (scrollNow >= 588){
                $('.item_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.item_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 641){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }


           
        }


        // 網頁版
        if ($(window).width() >= 992) {


            if (scrollNow >= 579){
                $('.item_tittle').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.item_tittle').css('opacity','0').css('transition','0.5s')
    
            }
    
            if (scrollNow >= 733){
                $('.items_warp').css('opacity','1').css('transition','0.8s').css('transform','translateY(-20px)')
    
            }else{
                $('.items_warp').css('opacity','0').css('transition','0.8s').css('transform','translateY(20px)')
    
            }
    
        }
    
        })



})