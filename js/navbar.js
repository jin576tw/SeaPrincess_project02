$(document).ready(function () {

 /* ///////導覽列////////// */

 

        //navbar購物車數量
        if($.cookie("Cart") == null){

            $('.navbar_shoplist_count').css('display','none')
            $('.Cart_list_total').css('display','none')
            $('.list_item_empty').css('display','flex')
        
        }else{

            $('.list_item_empty').css('display','none');
            $('.Cart_list_total').css('display','block');
            
            let cookieStr = $.cookie('Cart');
            let cookieArr = JSON.parse(cookieStr);
            let sum = 0;


            for(let i = 0 ; i < cookieArr.length;i++){
                sum += cookieArr[i].count;
            }

            $('.navbar_shoplist_count').text(sum)
                

        
        }

        


   
        

        
      
        

       

    
        //手機版navbar
        $('.navbar_RWD_icon').click(function(){
            
            $('.navbar_RWD_items').toggleClass('RWD_open');
            
    
        });
    
    
        $(window).scroll(function () {
    
        let scrollNow = $(window).scrollTop();
        // console.log('scrollTop', scrollNow);
    
    
        if ($(window).width() <  992){
    
            if (scrollNow >= 400){
    
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
            }else{
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.1s')
    
                
    
            }
    
        }
    
        // 網頁版 
        if ($(window).width() >= 992) {
    
       
            if (scrollNow >= 706){
    
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.3s')
            }else{
                $('.Navbar').css('box-shadow','0px 2px 15px 0 rgba(173, 173, 173, 0.5)').css('transition','0.1s')
    
                
    
            }
       
            if (scrollNow >= 1000){
    
                $('.navbar_Logo').css('width','80px').css('transition','0.3s')
            }else{
                $('.navbar_Logo').css('width','140px').css('transition','0.1s')
    
                
    
            }
        }
    
        })
    
       
    
        /////購物車按鈕/////
    
        //手機版
        if ($(window).width() < 480) {
            
    
            $('.navbar_icon_shoplist').css('color','black')
    
            $('.navbar_icon_shoplist').click(function(){
                
                $('.Cart_list_bar').toggleClass('RWD_open_shoplist').css('opacity','0.9');
    
            })
        }
        
        if ($(window).width() >= 480) {
    
            $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
    
    
            $('.navbar_icon_shoplist').click(function(){
    
                $('.Cart_list').fadeIn(100);
                $('.Cart_list_bar').css('transform','translateX(0px)').css('transition','0.5s')
                
                
            })
    
            $('.cancle_btn').click(function(){
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
    
            })
            $('.Cart_bg').click(function(){
    
                $('.Cart_list').fadeOut(100);
                $('.Cart_list_bar').css('transform','translateX(80px)').css('transition','0.5s')
                
    
            })
    
            
    
    
    
        }
})