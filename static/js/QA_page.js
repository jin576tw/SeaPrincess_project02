'use strict'


///////標題//////
setTimeout(function(){

    // 平板版
    if ($(window).width() < 1024) {

        $('.shipment_title_line').css('width',' 20%')
        

    }

     // 手機版
     if ($(window).width() < 768) {

        $('.shipment_title_line').css('width',' 40%')

        }

    // 網頁版
    if ($(window).width() > 1024) {


        $('.shipment_title_line').css('width',' 40%')


    }   
    


},10)


$(window).scroll(function () { 


    let scrollNow = $(window).scrollTop();
    // console.log('scrollTop', scrollNow);

   

    // 平板版
    if ($(window).width() < 1024) {

        if (scrollNow >= 444){

            $('.refund_title_line').css('width',' 20%')

        }else{

            $('.refund_title_line').css('width','0%')

        }


        if (scrollNow >= 714){

            $('.shipment_title_line').css('width',' 0%')

           
        }else{

            
            $('.shipment_title_line').css('width',' 20%')
        }

   

    

    }

    // 手機版
    if ($(window).width() < 768) {

        if (scrollNow >= 307){

            $('.refund_title_line').css('width',' 60%')

            
        }else{


            $('.refund_title_line').css('width',' 0%')


        }

        if (scrollNow >= 664){

            $('.shipment_title_line').css('width',' 0%')

           
        }else{

            
            $('.shipment_title_line').css('width',' 40%')
        }
        

    }


    // 網頁版
    if ($(window).width() > 1024) {

       

        if (scrollNow >= 649){

            $('.refund_title_line').css('width',' 70%')
        }else{

            $('.refund_title_line').css('width',' 0%')

        }


         if (scrollNow >= 805){

            $('.shipment_title_line').css('width',' 0%')

           
        }else{

            
            $('.shipment_title_line').css('width',' 40%')
        }
    }   
    




 })


 // Q&A

 $(".answer").slideUp(10)

 $('.question_title').click(function(){

    $(this).children('.question_icon').toggleClass( 'minus' );

    $(this).next('.answer').slideToggle()


 })
