$(document).ready(function () {

/* ///////導覽列////////// */

    //手機版navbar
    $('.navbar_RWD_icon').click(function(){
        
        $('.navbar_RWD_items').toggleClass('RWD_open');

    });


    $(window).scroll(function () {

    let scrollNow = $(window).scrollTop();
    console.log('scrollTop', scrollNow);


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


////////商品列效果////////


    if ($(window).width() <  992){

        $(".add_btn").on({

            click: function () {

                
                $(this).addClass('Bounce')

            }
    

        })


    }
    if ($(window).width() >= 992) {

        $(".item").on({

            mouseenter: function () {

                
                $(this).children().children('.item_title').css('border','solid 0.1px transparent')

                // $(this).children().children('.item_pic').children().css('transform','scale(1.2)').css('transition','0.5s');

            },
            mouseleave: function () {

               
                $(this).children().children('.item_title').css('border','solid 0.1px rgba(173, 173, 173, 0.5)')

                // $(this).children().children('.item_pic').children().css('transform','scale(1)').css('transition','0.5s');

            

            }
        })

        $(".add_btn").on({

            mouseenter: function () {

                
                $(this).addClass('Bounce')


            },
            mouseleave: function () {


                $(this).removeClass('Bounce')



            }

        })


    }





})