$(document).ready(function () {

/* ///////導覽列////////// */

    //手機版navbar
    $('.navbar_RWD_icon').click(function(){
        
        $('.navbar_RWD_items').toggleClass('RWD_open');

    });


    $(window).scroll(function () {

    let scrollNow = $(window).scrollTop();
    console.log('scrollTop', scrollNow);

    // 網頁版 
    if ($(window).width() >= 992) {


        if (scrollNow >= 1000){

            $('.navbar_Logo').css('width','80px').css('transition','0.3s')
        }else{
            $('.navbar_Logo').css('width','140px').css('transition','0.1s')

        }
    }

    })

////////商品列效果////////
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