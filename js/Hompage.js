$(document).ready(function () {

    $(window).scroll(function () {

        let scrollNow = $(window).scrollTop();
        console.log('scrollTop', scrollNow);
    
        // 網頁版 
        if ($(window).width() >= 992) {
    
    
    /* /////第一頁////// */
    
            if (scrollNow >= 132){
                
                $('.home_intro').css('opacity','1').css('transition','0.5s')
    
            }else{
                $('.home_intro').css('opacity','0').css('transition','0.5s')
    
            }
    
    
            if (scrollNow >= 529){
    
                $('.First_page').css('box-shadow','0px 10px 30px var(--grey)').css('transition','0.8s')
            }else{
                $('.First_page').css('transition','0.8s').css('box-shadow','0px 0px 0px transparent')
            }
    
    /* /////最新漁貨////// */
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